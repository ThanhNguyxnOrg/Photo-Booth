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
    
    // Check if user exists in local storage
    try {
      const userData = localStorage.getItem(email);
      
      if (!userData) {
        loginError.textContent = i18n.translate('accountNotExist');
        return;
      }
      
      const user = JSON.parse(userData);
      
      if (user.email === email && user.password === password) {
        // Login successful
        loginError.textContent = '';
        
        // Store logged in user info
        sessionStorage.setItem('currentUser', JSON.stringify({
          email: user.email,
          loginMethod: 'email'
        }));
        
        // Store language preference with user
        const currentLang = i18n.getCurrentLanguage();
        if (currentLang) {
          sessionStorage.setItem('userLanguage', currentLang);
        }
        
        // Redirect to main page
        window.location.href = 'app.html';
      } else {
        loginError.textContent = i18n.translate('wrongCredentials');
      }
    } catch (error) {
      loginError.textContent = i18n.translate('loginError');
      console.error('Login error:', error);
    }
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
    
    // Check if user already exists
    if (localStorage.getItem(email)) {
      registerError.textContent = i18n.translate('emailUsed');
      return;
    }
    
    try {
      // Create user object
      const user = {
        email: email,
        password: password,
        createdAt: new Date().toISOString(),
        language: i18n.getCurrentLanguage() // Store preferred language
      };
      
      // Save to local storage
      localStorage.setItem(email, JSON.stringify(user));
      
      // Clear form and error
      registerError.textContent = '';
      registerFormEl.reset();
      
      // Show success message and switch to login
      alert(i18n.translate('registerSuccess'));
      registerForm.classList.remove('active');
      loginForm.classList.add('active');
      
    } catch (error) {
      registerError.textContent = i18n.translate('registerError');
      console.error('Registration error:', error);
    }
  });
  
  // Social login handlers
  facebookLoginBtn.addEventListener('click', function() {
    handleSocialLogin('facebook');
  });
  
  googleLoginBtn.addEventListener('click', function() {
    handleSocialLogin('google');
  });
  
  facebookRegisterBtn.addEventListener('click', function() {
    handleSocialLogin('facebook');
  });
  
  googleRegisterBtn.addEventListener('click', function() {
    handleSocialLogin('google');
  });
  
  function handleSocialLogin(provider) {
    // In a real app, this would connect to the social provider's API
    // For this demo, we'll simulate a successful login
    
    // Format the provider name for display
    const providerDisplay = provider.charAt(0).toUpperCase() + provider.slice(1);
    
    // Create a mock user based on the provider
    const mockUser = {
      email: `user@${provider}.example.com`,
      name: `${providerDisplay} User`,
      loginMethod: provider,
      language: i18n.getCurrentLanguage() // Store preferred language
    };
    
    // Store logged in user info
    sessionStorage.setItem('currentUser', JSON.stringify(mockUser));
    
    // Show success message
    alert(i18n.translate('socialLoginSuccess', { provider: providerDisplay }));
    
    // Redirect to main page
    window.location.href = 'app.html';
  }
  
  // Check if user is already logged in
  function checkLoginStatus() {
    const currentUser = sessionStorage.getItem('currentUser');
    
    if (currentUser) {
      // User is already logged in, redirect to main page
      window.location.href = 'app.html';
    }
  }
  
  // Check login status when page loads
  checkLoginStatus();
}); 