document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const goToRegisterLink = document.getElementById('go-to-register');
  const goToLoginLink = document.getElementById('go-to-login');
  
  // Login Form Elements
  const loginFormEl = document.getElementById('loginForm');
  const loginEmail = document.getElementById('email');
  const loginPassword = document.getElementById('password');
  const loginError = document.getElementById('login-error');
  
  // Register Form Elements
  const registerFormEl = document.getElementById('registerForm');
  const regEmail = document.getElementById('reg-email');
  const regPassword = document.getElementById('reg-password');
  const confirmPassword = document.getElementById('confirm-password');
  const registerError = document.getElementById('register-error');
  
  // Social login buttons
  const facebookLoginBtn = document.getElementById('facebook-login');
  const googleLoginBtn = document.getElementById('google-login');
  const facebookRegisterBtn = document.getElementById('facebook-register');
  const googleRegisterBtn = document.getElementById('google-register');
  
  // Firebase auth instance
  const auth = firebase.auth();
  
  // Configure providers
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  
  // Switch between login and register forms
  goToRegisterLink.addEventListener('click', function(e) {
    e.preventDefault();
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
  });
  
  goToLoginLink.addEventListener('click', function(e) {
    e.preventDefault();
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
  });
  
  // Login form submission
  loginFormEl.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = loginEmail.value.trim();
    const password = loginPassword.value;
    
    // Validate inputs
    if (email === '' || password === '') {
      loginError.textContent = i18n.translate('emptyFields');
      return;
    }
    
    // Sign in with Firebase Auth
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful
        loginError.textContent = '';
        const user = userCredential.user;
        
        // Store logged in user info in session
        sessionStorage.setItem('currentUser', JSON.stringify({
          email: user.email,
          uid: user.uid,
          loginMethod: 'email',
          displayName: user.displayName || email.split('@')[0]
        }));
        
        // Store language preference
        const currentLang = i18n.getCurrentLanguage();
        if (currentLang) {
          sessionStorage.setItem('userLanguage', currentLang);
        }
        
        // Redirect to main app
        window.location.href = 'app.html';
      })
      .catch((error) => {
        // Handle errors
        console.error('Login error:', error);
        switch (error.code) {
          case 'auth/user-not-found':
            loginError.textContent = i18n.translate('accountNotExist');
            break;
          case 'auth/wrong-password':
            loginError.textContent = i18n.translate('wrongCredentials');
            break;
          default:
            loginError.textContent = i18n.translate('loginError');
        }
      });
  });
  
  // Register form submission
  registerFormEl.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = regEmail.value.trim();
    const password = regPassword.value;
    const confirm = confirmPassword.value;
    
    // Validate inputs
    if (email === '' || password === '' || confirm === '') {
      registerError.textContent = i18n.translate('emptyFields');
      return;
    }
    
    if (password !== confirm) {
      registerError.textContent = i18n.translate('passwordMismatch');
      return;
    }
    
    // Register with Firebase Auth
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registration successful
        registerError.textContent = '';
        const user = userCredential.user;
        
        // Save additional user info if needed (e.g., preferred language)
        return user.updateProfile({
          displayName: email.split('@')[0],
          language: i18n.getCurrentLanguage()
        });
      })
      .then(() => {
        // Clear form
        registerFormEl.reset();
        
        // Show success message and switch to login
        alert(i18n.translate('registerSuccess'));
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
      })
      .catch((error) => {
        // Handle errors
        console.error('Registration error:', error);
        switch (error.code) {
          case 'auth/email-already-in-use':
            registerError.textContent = i18n.translate('emailUsed');
            break;
          case 'auth/weak-password':
            registerError.textContent = i18n.translate('weakPassword', 'Password should be at least 6 characters');
            break;
          default:
            registerError.textContent = i18n.translate('registerError');
        }
      });
  });
  
  // Google login handler
  function signInWithGoogle() {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        
        // Store user info in session
        sessionStorage.setItem('currentUser', JSON.stringify({
          email: user.email,
          uid: user.uid,
          loginMethod: 'google',
          displayName: user.displayName || user.email.split('@')[0],
          photoURL: user.photoURL
        }));
        
        // Store language preference
        const currentLang = i18n.getCurrentLanguage();
        if (currentLang) {
          sessionStorage.setItem('userLanguage', currentLang);
        }
        
        // Show success message
        alert(i18n.translate('socialLoginSuccess', { provider: 'Google' }));
        
        // Redirect to main app
        window.location.href = 'app.html';
      })
      .catch((error) => {
        console.error('Google sign-in error:', error);
        loginError.textContent = error.message;
        registerError.textContent = error.message;
      });
  }
  
  // Facebook login handler
  function signInWithFacebook() {
    auth.signInWithPopup(facebookProvider)
      .then((result) => {
        const user = result.user;
        
        // Store user info in session
        sessionStorage.setItem('currentUser', JSON.stringify({
          email: user.email,
          uid: user.uid,
          loginMethod: 'facebook',
          displayName: user.displayName || user.email.split('@')[0],
          photoURL: user.photoURL
        }));
        
        // Store language preference
        const currentLang = i18n.getCurrentLanguage();
        if (currentLang) {
          sessionStorage.setItem('userLanguage', currentLang);
        }
        
        // Show success message
        alert(i18n.translate('socialLoginSuccess', { provider: 'Facebook' }));
        
        // Redirect to main app
        window.location.href = 'app.html';
      })
      .catch((error) => {
        console.error('Facebook sign-in error:', error);
        loginError.textContent = error.message;
        registerError.textContent = error.message;
      });
  }
  
  // Social login buttons
  facebookLoginBtn.addEventListener('click', signInWithFacebook);
  googleLoginBtn.addEventListener('click', signInWithGoogle);
  facebookRegisterBtn.addEventListener('click', signInWithFacebook);
  googleRegisterBtn.addEventListener('click', signInWithGoogle);
  
  // Check if user is already logged in
  function checkLoginStatus() {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is already logged in, redirect to main page
        window.location.href = 'app.html';
      }
    });
  }
  
  // Check login status when page loads
  checkLoginStatus();
}); 