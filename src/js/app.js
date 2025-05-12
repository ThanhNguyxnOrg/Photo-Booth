import { auth, db, storage, storageRef } from './firebase-config.js';

// DOM Elements
const loginSection = document.getElementById('loginSection');
const mainContent = document.getElementById('mainContent');
const loginForm = document.getElementById('loginForm');
const authError = document.getElementById('auth-error');
const googleLogin = document.getElementById('googleLogin');
const facebookLogin = document.getElementById('facebookLogin');
const skipLogin = document.getElementById('skipLogin');
const userStatus = document.getElementById('userStatus');
const userAvatar = document.getElementById('userAvatar');
const userName = document.getElementById('userName');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const adminControls = document.getElementById('adminControls');

// Admin credentials
const ADMIN_CREDENTIALS = {
  email: 'thanhnguyentuan2007@gmail.com',
  password: 'Thanh17112007'
};

// Initialize NSFW detection model
let nsfwModel = null;
async function loadNSFWModel() {
  try {
    nsfwModel = await nsfwjs.load();
    console.log('NSFW Model loaded');
  } catch (err) {
    console.error('Error loading NSFW model:', err);
  }
}

// Load NSFW model when page loads
loadNSFWModel();

// Continue as guest function
function continueAsGuest() {
  loginSection.style.display = 'none';
  mainContent.style.display = 'block';
  userStatus.style.display = 'flex';
  loginBtn.style.display = 'block';
  logoutBtn.style.display = 'none';
  userName.textContent = 'Guest';
  userAvatar.textContent = 'G';
}

// Check auth state on page load
document.addEventListener('DOMContentLoaded', () => {
  // Show login section by default
  loginSection.style.display = 'flex';
  mainContent.style.display = 'none';
  
  // Check if user is already logged in
  auth.onAuthStateChanged((user) => {
    if (user) {
      const isAdmin = user.email === ADMIN_CREDENTIALS.email;
      loginSuccess(isAdmin);
    }
  });
});

// Regular email/password login
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    // Check if trying to login as admin
    if (email === ADMIN_CREDENTIALS.email) {
      if (password === ADMIN_CREDENTIALS.password) {
        loginSuccess(true);
      } else {
        authError.textContent = 'Invalid admin credentials';
      }
    } else {
      // Regular user login
      try {
        await auth.signInWithEmailAndPassword(email, password);
        loginSuccess(false);
      } catch (error) {
        if (error.code === 'auth/user-not-found') {
          // Create new account
          await auth.createUserWithEmailAndPassword(email, password);
          loginSuccess(false);
        } else {
          authError.textContent = error.message;
        }
      }
    }
  } catch (error) {
    authError.textContent = error.message;
  }
});

// Google login
googleLogin.addEventListener('click', async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    loginSuccess(false);
  } catch (error) {
    authError.textContent = error.message;
  }
});

// Facebook login
facebookLogin.addEventListener('click', async () => {
  try {
    const provider = new firebase.auth.FacebookAuthProvider();
    await auth.signInWithPopup(provider);
    loginSuccess(false);
  } catch (error) {
    authError.textContent = error.message;
  }
});

// Skip login (guest mode)
skipLogin.addEventListener('click', () => {
  continueAsGuest();
});

// Login success handler
function loginSuccess(isAdmin) {
  authError.textContent = '';
  loginSection.style.display = 'none';
  mainContent.style.display = 'block';
  userStatus.style.display = 'flex';
  loginBtn.style.display = 'none';
  logoutBtn.style.display = 'block';
  
  if (isAdmin) {
    adminControls.classList.add('visible');
    userName.textContent = 'Admin';
    userAvatar.textContent = 'A';
  } else {
    adminControls.classList.remove('visible');
    const user = auth.currentUser;
    userName.textContent = user?.email || 'User';
    userAvatar.textContent = (user?.email?.[0] || 'U').toUpperCase();
  }
}

// Login button handler
loginBtn.addEventListener('click', () => {
  mainContent.style.display = 'none';
  loginSection.style.display = 'flex';
});

// Logout button handler
logoutBtn.addEventListener('click', async () => {
  try {
    await auth.signOut();
    continueAsGuest();
  } catch (error) {
    console.error('Logout error:', error);
  }
});

// Photo capture and processing logic
const video = document.getElementById('video');
const captureBtn = document.getElementById('capture-btn');
const countdown = document.getElementById('countdown');
const errorMessage = document.getElementById('error-message');

// Access camera
async function initCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    errorMessage.style.display = "none";
  } catch (error) {
    console.error("Error accessing camera:", error);
    errorMessage.style.display = "block";
    errorMessage.textContent = "Unable to access camera. Please allow camera permissions in your browser settings and ensure you're using HTTPS.";
    captureBtn.disabled = true;
  }
}

initCamera();

// Start countdown and capture photo
captureBtn.addEventListener("click", () => {
  captureBtn.disabled = true;
  let timeLeft = 3;
  countdown.style.display = "flex";
  countdown.textContent = timeLeft;

  const countdownInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      countdown.textContent = timeLeft;
    } else {
      countdown.style.display = "none";
      clearInterval(countdownInterval);
      capturePhoto();
      captureBtn.disabled = false;
    }
  }, 1000);
});

// Capture photo function
async function capturePhoto() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  const dataURL = canvas.toDataURL("image/png");
  
  // Display in slot and preview
  const currentSlot = document.getElementById(`slot-${currentSlotIndex + 1}`);
  const img = document.createElement("img");
  img.src = dataURL;
  currentSlot.innerHTML = "";
  currentSlot.appendChild(img);
  
  // Update preview
  updatePreview(dataURL, currentSlotIndex);
  
  // Store in capturedImages array
  capturedImages[currentSlotIndex] = dataURL;

  // Add public toggle
  const publishToggle = document.createElement('div');
  publishToggle.className = 'publish-toggle';
  publishToggle.innerHTML = `
    <input type="checkbox" id="publishPhoto${currentSlotIndex}">
    <label for="publishPhoto${currentSlotIndex}">Share to public gallery</label>
  `;
  currentSlot.appendChild(publishToggle);

  // Handle upload and moderation if public
  const isPublic = document.getElementById(`publishPhoto${currentSlotIndex}`).checked;
  if (isPublic) {
    const result = await handlePhotoUpload(dataURL, true);
    if (result.success && result.isApproved) {
      addToGallery(result.photoDoc);
    }
  }

  // Move to next slot or show editor
  currentSlotIndex++;
  if (currentSlotIndex >= 3) {
    document.getElementById('capture-section').classList.remove("active");
    document.getElementById('editor').classList.add("active");
    currentSlotIndex = 0;
  }
}

// Handle photo upload and moderation
async function handlePhotoUpload(photoDataUrl, isPublic = false) {
  try {
    // Create temporary image for moderation
    const img = new Image();
    img.src = photoDataUrl;
    await new Promise(resolve => img.onload = resolve);

    // Check content
    const isApproved = await moderateImage(img);
    
    // Generate unique ID
    const photoId = 'photo_' + Date.now();
    
    // Upload to Firebase Storage
    const photoRef = storageRef.child(`photos/${photoId}.jpg`);
    await photoRef.putString(photoDataUrl, 'data_url');
    const photoUrl = await photoRef.getDownloadURL();

    // Save to Firestore
    const photoDoc = {
      id: photoId,
      url: photoUrl,
      userId: auth.currentUser?.uid || 'guest',
      userEmail: auth.currentUser?.email || 'guest',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      isPublic: isPublic,
      status: isApproved ? 'approved' : 'rejected',
      moderationScore: isApproved ? 1 : 0
    };

    await db.collection('photos').doc(photoId).set(photoDoc);

    return {
      success: true,
      isApproved,
      photoDoc
    };
  } catch (error) {
    console.error('Upload error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Function to check image content
async function moderateImage(imgElement) {
  if (!nsfwModel) return true; // If model not loaded, approve by default
  
  try {
    const predictions = await nsfwModel.classify(imgElement);
    // Check if the image is safe
    const isSafe = predictions.every(p => 
      (p.className === 'Drawing' || p.className === 'Neutral') || 
      p.probability < 0.5
    );
    return isSafe;
  } catch (err) {
    console.error('Moderation error:', err);
    return false;
  }
}

// Load public gallery
async function loadPublicGallery() {
  try {
    const snapshot = await db.collection('photos')
      .where('isPublic', '==', true)
      .where('status', '==', 'approved')
      .orderBy('timestamp', 'desc')
      .limit(20)
      .get();

    const galleryDiv = document.getElementById('publicGallery');
    snapshot.forEach(doc => {
      const photoData = doc.data();
      addToGallery(photoData);
    });

    document.getElementById('gallerySection').style.display = 'block';
  } catch (error) {
    console.error('Error loading gallery:', error);
  }
}

// Function to add photo to public gallery
function addToGallery(photoDoc) {
  const galleryDiv = document.getElementById('publicGallery');
  const photoDiv = document.createElement('div');
  photoDiv.className = 'gallery-item';
  photoDiv.innerHTML = `
    <img src="${photoDoc.url}" alt="Gallery photo">
    <div class="info">
      <div>By: ${photoDoc.userEmail}</div>
      <div class="moderation-status status-${photoDoc.status}">
        ${photoDoc.status.toUpperCase()}
      </div>
    </div>
  `;
  galleryDiv.prepend(photoDiv);
}

// Load gallery when page loads
loadPublicGallery();
