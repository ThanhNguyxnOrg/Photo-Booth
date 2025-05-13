// Phone authentication handlers
document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements - Login
  const phoneLoginForm = document.getElementById('phoneLoginForm');
  const phoneInput = document.getElementById('phone');
  const verificationCodeInput = document.getElementById('verification-code');
  const verificationCodeGroup = phoneLoginForm ? phoneLoginForm.querySelector('.verification-code-group') : null;
  const phoneLoginBtn = document.getElementById('phone-login-btn');
  const resendCodeBtn = document.getElementById('resend-code-btn');
  const phoneLoginError = document.getElementById('phone-login-error');
  
  // DOM Elements - Register
  const phoneRegisterForm = document.getElementById('phoneRegisterForm');
  const regPhoneInput = document.getElementById('reg-phone');
  const regVerificationCodeInput = document.getElementById('reg-verification-code');
  const regVerificationCodeGroup = phoneRegisterForm ? phoneRegisterForm.querySelector('.verification-code-group') : null;
  const userProfileGroup = phoneRegisterForm ? phoneRegisterForm.querySelector('.user-profile-group') : null;
  const regDisplayNameInput = document.getElementById('reg-display-name');
  const phoneRegisterBtn = document.getElementById('phone-register-btn');
  const regResendCodeBtn = document.getElementById('reg-resend-code-btn');
  const phoneRegisterError = document.getElementById('phone-register-error');
  
  // Get Firebase Auth instance
  const auth = firebase.auth && firebase.auth();
  
  // Store verification details
  const phoneAuthState = {
    login: {
      verificationId: null,
      phoneNumber: null,
      verificationSent: false,
      confirmationResult: null
    },
    register: {
      verificationId: null,
      phoneNumber: null,
      verificationSent: false,
      confirmationResult: null
    }
  };
  
  // Mock verification codes for development
  const MOCK_CODE = '123456';
  const mockPhoneUsers = JSON.parse(localStorage.getItem('photobooth_mock_phone_users') || '{}');
  
  // Add test user if none exist
  if (Object.keys(mockPhoneUsers).length === 0) {
    // Add a test phone user
    const testUser = {
      uid: 'phone_user_test',
      phoneNumber: '+84987654321',
      displayName: 'Test Phone User',
      createdAt: new Date().toISOString()
    };
    
    mockPhoneUsers['+84987654321'] = testUser;
    localStorage.setItem('photobooth_mock_phone_users', JSON.stringify(mockPhoneUsers));
    
    console.log('Added test phone user: +84987654321');
  }
  
  // Helper function to validate phone number
  function isValidPhoneNumber(phone) {
    // Basic validation: starts with + and has 7-15 digits
    return /^\+\d{7,15}$/.test(phone);
  }
  
  // Format phone input as user types
  function setupPhoneInputFormatting(input) {
    if (!input) return;
    
    input.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\s+/g, '');
      
      // Add plus if it doesn't exist
      if (value && value.charAt(0) !== '+') {
        value = '+' + value;
      }
      
      // Replace non-digits (except +)
      value = value.replace(/[^\d+]/g, '');
      
      // Update input value
      e.target.value = value;
    });
    
    // Force focus to the end when clicking on the input
    input.addEventListener('click', function(e) {
      const len = e.target.value.length;
      e.target.setSelectionRange(len, len);
    });
  }
  
  // Helper function to show error
  function showPhoneError(element, message) {
    if (element) {
      element.textContent = message;
      element.style.display = 'block';
      
      // Scroll to error message if it's out of view
      if (element.getBoundingClientRect().top < 0 || element.getBoundingClientRect().bottom > window.innerHeight) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }
  
  // Helper function to clear error
  function clearPhoneError(element) {
    if (element) {
      element.textContent = '';
      element.style.display = 'none';
    }
  }
  
  // Show verification sent UI (login)
  function showVerificationUI() {
    if (verificationCodeGroup) {
      verificationCodeGroup.style.display = 'block';
    }
    if (phoneLoginBtn) {
      phoneLoginBtn.textContent = i18n.translate('verifyCode');
      phoneLoginBtn.dataset.stage = 'verify';
    }
    if (phoneInput) {
      phoneInput.disabled = true;
    }
    
    // Focus on verification code input after a short delay
    setTimeout(() => {
      if (verificationCodeInput) {
        verificationCodeInput.focus();
      }
    }, 100);
  }
  
  // Show verification sent UI (register)
  function showRegVerificationUI() {
    if (regVerificationCodeGroup) {
      regVerificationCodeGroup.style.display = 'block';
    }
    if (phoneRegisterBtn) {
      phoneRegisterBtn.textContent = i18n.translate('verifyCode');
      phoneRegisterBtn.dataset.stage = 'verify';
    }
    if (regPhoneInput) {
      regPhoneInput.disabled = true;
    }
    
    // Focus on verification code input after a short delay
    setTimeout(() => {
      if (regVerificationCodeInput) {
        regVerificationCodeInput.focus();
      }
    }, 100);
  }
  
  // Show profile setup UI (register)
  function showProfileSetupUI() {
    if (userProfileGroup) {
      userProfileGroup.style.display = 'block';
    }
    if (phoneRegisterBtn) {
      phoneRegisterBtn.textContent = i18n.translate('registerButton');
      phoneRegisterBtn.dataset.stage = 'register';
    }
    if (regVerificationCodeInput) {
      regVerificationCodeInput.disabled = true;
    }
    
    // Focus on display name input after a short delay
    setTimeout(() => {
      if (regDisplayNameInput) {
        regDisplayNameInput.focus();
      }
    }, 100);
  }
  
  // Mock implementation for sending verification code
  function mockSendVerificationCode(phoneNumber, type = 'login') {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check if phone is already registered for login
        if (type === 'login' && !mockPhoneUsers[phoneNumber]) {
          reject({ code: 'auth/user-not-found', message: 'Phone number is not registered' });
          return;
        }
        
        // Check if phone is already registered for registration
        if (type === 'register' && mockPhoneUsers[phoneNumber]) {
          reject({ code: 'auth/phone-number-already-exists', message: 'Phone number is already registered' });
          return;
        }
        
        // Store in session that we sent a code to this phone
        const mockVerificationId = 'mock_' + Date.now();
        
        // Update state
        if (type === 'login') {
          phoneAuthState.login.verificationId = mockVerificationId;
          phoneAuthState.login.phoneNumber = phoneNumber;
          phoneAuthState.login.verificationSent = true;
        } else {
          phoneAuthState.register.verificationId = mockVerificationId;
          phoneAuthState.register.phoneNumber = phoneNumber;
          phoneAuthState.register.verificationSent = true;
        }
        
        resolve({ verificationId: mockVerificationId });
      }, 1000);
    });
  }
  
  // Mock implementation for verifying code
  function mockVerifyCode(verificationId, code, phoneNumber, type = 'login') {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Validate
        if (code !== MOCK_CODE) {
          reject({ code: 'auth/invalid-verification-code', message: 'Invalid verification code' });
          return;
        }
        
        if (type === 'login') {
          const user = mockPhoneUsers[phoneNumber];
          if (!user) {
            reject({ code: 'auth/user-not-found', message: 'User not found' });
            return;
          }
          
          resolve({ user });
        } else {
          // For registration, we just verify the code
          resolve({ success: true });
        }
      }, 800);
    });
  }
  
  // Mock implementation for registering with phone
  function mockRegisterWithPhone(phoneNumber, displayName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          uid: 'phone_user_' + Date.now(),
          phoneNumber: phoneNumber,
          displayName: displayName,
          createdAt: new Date().toISOString()
        };
        
        // Store the user
        mockPhoneUsers[phoneNumber] = user;
        localStorage.setItem('photobooth_mock_phone_users', JSON.stringify(mockPhoneUsers));
        
        resolve({ user });
      }, 800);
    });
  }

  // Handle phone login form submission
  if (phoneLoginForm) {
    phoneLoginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      clearPhoneError(phoneLoginError);
      
      // Get the current stage
      const stage = phoneLoginBtn.dataset.stage || 'send';
      
      if (stage === 'send') {
        // STEP 1: Send verification code
        const phoneNumber = phoneInput.value.trim();
        
        // Validate phone number
        if (!isValidPhoneNumber(phoneNumber)) {
          showPhoneError(phoneLoginError, i18n.translate('invalidPhoneNumber'));
          phoneInput.focus();
          return;
        }
        
        // Show loading state
        phoneLoginBtn.disabled = true;
        phoneLoginBtn.textContent = 'Sending...';
        
        // Send verification code using mock
        mockSendVerificationCode(phoneNumber, 'login')
          .then((result) => {
            showVerificationUI();
            
            // Toast notification instead of alert for better mobile UX
            const message = i18n.translate('codeSent');
            console.log(message); // For debug
            
            // If running in browser, show toast or alert
            if (typeof window !== 'undefined') {
              if ('Notification' in window && Notification.permission === 'granted') {
                new Notification(message);
              } else {
                alert(message);
              }
            }
            
            // Reset button state
            phoneLoginBtn.disabled = false;
          })
          .catch((error) => {
            console.error('Phone auth error:', error);
            
            let errorMessage = i18n.translate('phoneAuthError');
            if (error.code === 'auth/invalid-phone-number') {
              errorMessage = i18n.translate('invalidPhoneNumber');
            } else if (error.code === 'auth/user-not-found') {
              errorMessage = i18n.translate('accountNotExist');
            }
            
            showPhoneError(phoneLoginError, errorMessage);
            
            // Reset button state
            phoneLoginBtn.disabled = false;
            phoneLoginBtn.textContent = i18n.translate('sendCode');
            
            // Focus back on phone input
            phoneInput.focus();
          });
      } else if (stage === 'verify') {
        // STEP 2: Verify the code
        const verificationCode = verificationCodeInput.value.trim();
        
        if (!verificationCode) {
          showPhoneError(phoneLoginError, 'Please enter the verification code');
          verificationCodeInput.focus();
          return;
        }
        
        // Show loading state
        phoneLoginBtn.disabled = true;
        phoneLoginBtn.textContent = 'Verifying...';
        
        // Get stored phone number
        const phoneNumber = phoneAuthState.login.phoneNumber;
        const verificationId = phoneAuthState.login.verificationId;
        
        // Verify code using mock
        mockVerifyCode(verificationId, verificationCode, phoneNumber, 'login')
          .then((result) => {
            const user = result.user;
            
            // Store user info in session
            sessionStorage.setItem('currentUser', JSON.stringify({
              phone: user.phoneNumber,
              uid: user.uid,
              loginMethod: 'phone',
              displayName: user.displayName || 'Phone User',
              language: i18n.getCurrentLanguage()
            }));
            
            alert(i18n.translate('phoneLoginSuccess'));
            
            // Redirect to main app
            window.location.href = 'app.html';
          })
          .catch((error) => {
            console.error('Verification error:', error);
            
            let errorMessage = 'Failed to verify code';
            if (error.code === 'auth/invalid-verification-code') {
              errorMessage = i18n.translate('invalidVerificationCode');
            }
            
            showPhoneError(phoneLoginError, errorMessage);
            
            // Reset button state
            phoneLoginBtn.disabled = false;
            phoneLoginBtn.textContent = i18n.translate('verifyCode');
            
            // Focus back on verification code input
            verificationCodeInput.focus();
            verificationCodeInput.select();
          });
      }
    });
  }
  
  // Resend code button
  if (resendCodeBtn) {
    resendCodeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the phone number
      const phoneNumber = phoneAuthState.login.phoneNumber;
      
      if (!phoneNumber) {
        showPhoneError(phoneLoginError, 'No phone number provided');
        return;
      }
      
      // Show loading state
      resendCodeBtn.disabled = true;
      resendCodeBtn.textContent = 'Sending...';
      
      // Resend verification code
      mockSendVerificationCode(phoneNumber, 'login')
        .then(() => {
          alert(i18n.translate('codeSent'));
          
          // Reset button state
          resendCodeBtn.disabled = false;
          resendCodeBtn.textContent = i18n.translate('resendCode');
          
          // Focus on verification code input
          verificationCodeInput.focus();
        })
        .catch((error) => {
          console.error('Resend code error:', error);
          
          showPhoneError(phoneLoginError, 'Failed to resend code');
          
          // Reset button state
          resendCodeBtn.disabled = false;
          resendCodeBtn.textContent = i18n.translate('resendCode');
        });
    });
  }
  
  // Handle phone registration form submission
  if (phoneRegisterForm) {
    phoneRegisterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      clearPhoneError(phoneRegisterError);
      
      // Get the current stage
      const stage = phoneRegisterBtn.dataset.stage || 'send';
      
      if (stage === 'send') {
        // STEP 1: Send verification code
        const phoneNumber = regPhoneInput.value.trim();
        
        // Validate phone number
        if (!isValidPhoneNumber(phoneNumber)) {
          showPhoneError(phoneRegisterError, i18n.translate('invalidPhoneNumber'));
          regPhoneInput.focus();
          return;
        }
        
        // Show loading state
        phoneRegisterBtn.disabled = true;
        phoneRegisterBtn.textContent = 'Sending...';
        
        // Send verification code
        mockSendVerificationCode(phoneNumber, 'register')
          .then(() => {
            showRegVerificationUI();
            alert(i18n.translate('codeSent'));
            
            // Reset button state
            phoneRegisterBtn.disabled = false;
          })
          .catch((error) => {
            console.error('Phone auth error:', error);
            
            let errorMessage = i18n.translate('phoneAuthError');
            if (error.code === 'auth/invalid-phone-number') {
              errorMessage = i18n.translate('invalidPhoneNumber');
            } else if (error.code === 'auth/phone-number-already-exists') {
              errorMessage = i18n.translate('phoneRegistered');
            }
            
            showPhoneError(phoneRegisterError, errorMessage);
            
            // Reset button state
            phoneRegisterBtn.disabled = false;
            phoneRegisterBtn.textContent = i18n.translate('sendCode');
            
            // Focus back on phone input
            regPhoneInput.focus();
          });
      } else if (stage === 'verify') {
        // STEP 2: Verify the code
        const verificationCode = regVerificationCodeInput.value.trim();
        
        if (!verificationCode) {
          showPhoneError(phoneRegisterError, 'Please enter the verification code');
          regVerificationCodeInput.focus();
          return;
        }
        
        // Show loading state
        phoneRegisterBtn.disabled = true;
        phoneRegisterBtn.textContent = 'Verifying...';
        
        // Get stored phone number
        const phoneNumber = phoneAuthState.register.phoneNumber;
        const verificationId = phoneAuthState.register.verificationId;
        
        // Verify code
        mockVerifyCode(verificationId, verificationCode, phoneNumber, 'register')
          .then(() => {
            showProfileSetupUI();
            
            // Reset button state
            phoneRegisterBtn.disabled = false;
          })
          .catch((error) => {
            console.error('Verification error:', error);
            
            let errorMessage = 'Failed to verify code';
            if (error.code === 'auth/invalid-verification-code') {
              errorMessage = i18n.translate('invalidVerificationCode');
            }
            
            showPhoneError(phoneRegisterError, errorMessage);
            
            // Reset button state
            phoneRegisterBtn.disabled = false;
            phoneRegisterBtn.textContent = i18n.translate('verifyCode');
            
            // Focus back on verification code input
            regVerificationCodeInput.focus();
            regVerificationCodeInput.select();
          });
      } else if (stage === 'register') {
        // STEP 3: Complete registration
        const displayName = regDisplayNameInput.value.trim();
        
        if (!displayName) {
          showPhoneError(phoneRegisterError, 'Please enter your name');
          regDisplayNameInput.focus();
          return;
        }
        
        // Show loading state
        phoneRegisterBtn.disabled = true;
        phoneRegisterBtn.textContent = 'Registering...';
        
        // Get stored phone number
        const phoneNumber = phoneAuthState.register.phoneNumber;
        
        // Register user
        mockRegisterWithPhone(phoneNumber, displayName)
          .then((result) => {
            const user = result.user;
            
            // Store user info in session
            sessionStorage.setItem('currentUser', JSON.stringify({
              phone: user.phoneNumber,
              uid: user.uid,
              loginMethod: 'phone',
              displayName: user.displayName,
              language: i18n.getCurrentLanguage()
            }));
            
            alert(i18n.translate('phoneRegisterSuccess'));
            
            // Redirect to main app
            window.location.href = 'app.html';
          })
          .catch((error) => {
            console.error('Registration error:', error);
            
            showPhoneError(phoneRegisterError, 'Failed to register user');
            
            // Reset button state
            phoneRegisterBtn.disabled = false;
            phoneRegisterBtn.textContent = i18n.translate('registerButton');
          });
      }
    });
  }
  
  // Resend code button for registration
  if (regResendCodeBtn) {
    regResendCodeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the phone number
      const phoneNumber = phoneAuthState.register.phoneNumber;
      
      if (!phoneNumber) {
        showPhoneError(phoneRegisterError, 'No phone number provided');
        return;
      }
      
      // Show loading state
      regResendCodeBtn.disabled = true;
      regResendCodeBtn.textContent = 'Sending...';
      
      // Resend verification code
      mockSendVerificationCode(phoneNumber, 'register')
        .then(() => {
          alert(i18n.translate('codeSent'));
          
          // Reset button state
          regResendCodeBtn.disabled = false;
          regResendCodeBtn.textContent = i18n.translate('resendCode');
          
          // Focus on verification code input
          regVerificationCodeInput.focus();
        })
        .catch((error) => {
          console.error('Resend code error:', error);
          
          showPhoneError(phoneRegisterError, 'Failed to resend code');
          
          // Reset button state
          regResendCodeBtn.disabled = false;
          regResendCodeBtn.textContent = i18n.translate('resendCode');
        });
    });
  }
  
  // Set up phone input formatting
  setupPhoneInputFormatting(phoneInput);
  setupPhoneInputFormatting(regPhoneInput);
  
  // Setup verification code input to only allow digits
  [verificationCodeInput, regVerificationCodeInput].forEach(input => {
    if (input) {
      input.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '').substring(0, 6);
        
        // Auto submit when code is 6 digits
        if (e.target.value.length === 6) {
          // If this is the login verification code
          if (e.target === verificationCodeInput && phoneLoginBtn) {
            setTimeout(() => phoneLoginBtn.click(), 300);
          }
          
          // If this is the register verification code
          if (e.target === regVerificationCodeInput && phoneRegisterBtn) {
            setTimeout(() => phoneRegisterBtn.click(), 300);
          }
        }
      });
    }
  });
}); 