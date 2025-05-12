// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH3qb0yxJX9BwEZ5RqWN4WqMVD9QrZxE0",
  authDomain: "photo-booth-app-12345.firebaseapp.com", 
  projectId: "photo-booth-app-12345",
  storageBucket: "photo-booth-app-12345.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase services
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const storageRef = storage.ref(); 