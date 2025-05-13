// Handle authentication form tabs (Email/Phone switching)
document.addEventListener('DOMContentLoaded', function() {
  // Tab switching functionality
  const authTabs = document.querySelectorAll('.auth-tab');
  
  authTabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent any default action
      
      // Get the parent tab container
      const tabContainer = this.parentElement;
      // Get the parent form container
      const formContainer = tabContainer.closest('.form-container');
      // Get the target form ID
      const targetForm = this.getAttribute('data-target');
      
      // Remove active class from all tabs in this container
      tabContainer.querySelectorAll('.auth-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      
      // Add active class to clicked tab
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      
      // Hide all forms in this container
      formContainer.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
        form.setAttribute('aria-hidden', 'true');
        
        // Disable inputs in hidden forms to prevent focus and submission
        form.querySelectorAll('input, button').forEach(input => {
          input.setAttribute('tabindex', '-1');
        });
      });
      
      // Show the target form
      const targetFormEl = formContainer.querySelector(`[data-form="${targetForm}"]`);
      if (targetFormEl) {
        targetFormEl.classList.add('active');
        targetFormEl.setAttribute('aria-hidden', 'false');
        
        // Enable inputs in visible form
        targetFormEl.querySelectorAll('input, button').forEach(input => {
          input.removeAttribute('tabindex');
        });
        
        // Focus on the first input in the form
        const firstInput = targetFormEl.querySelector('input');
        if (firstInput) {
          // Slight delay to ensure animations complete
          setTimeout(() => {
            firstInput.focus();
          }, 100);
        }
      }
      
      // Clear any error messages
      const errorElements = formContainer.querySelectorAll('.error-message');
      errorElements.forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
      });
    });
    
    // Add keyboard accessibility
    tab.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
  
  // Set up initial ARIA attributes
  document.querySelectorAll('.auth-tabs').forEach(tabContainer => {
    const tabs = tabContainer.querySelectorAll('.auth-tab');
    tabs.forEach((tab, index) => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', tab.classList.contains('active') ? 'true' : 'false');
      tab.id = tab.getAttribute('data-target') + '-tab';
      
      // Set tabindex for keyboard navigation
      if (!tab.classList.contains('active')) {
        tab.setAttribute('tabindex', '-1');
      } else {
        tab.setAttribute('tabindex', '0');
      }
    });
    
    tabContainer.setAttribute('role', 'tablist');
  });
  
  document.querySelectorAll('.auth-form').forEach(form => {
    const formId = form.getAttribute('data-form');
    form.setAttribute('role', 'tabpanel');
    form.setAttribute('aria-labelledby', formId + '-tab');
    form.setAttribute('aria-hidden', form.classList.contains('active') ? 'false' : 'true');
    
    // Disable inputs in hidden forms
    if (!form.classList.contains('active')) {
      form.querySelectorAll('input, button').forEach(input => {
        input.setAttribute('tabindex', '-1');
      });
    }
  });
}); 