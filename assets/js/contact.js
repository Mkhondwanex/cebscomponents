
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');
  const toast = document.getElementById('toast');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate form
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill in all required fields.';
        formStatus.className = 'form-status error';
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formStatus.textContent = 'Please enter a valid email address.';
        formStatus.className = 'form-status error';
        return;
      }
      
      // Form submission in progress
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      formStatus.textContent = '';
      
      // Simulate form submission (replace with actual API call)
      setTimeout(function() {
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        
        // Show success toast
        showToast();
      }, 1500);
    });
  }
  
  function showToast() {
    toast.classList.add('show');
    
    // Auto hide after 5 seconds
    setTimeout(function() {
      toast.classList.remove('show');
    }, 5000);
    
    // Start progress bar animation
    const progressBar = toast.querySelector('.toast-progress');
    progressBar.style.width = '100%';
    progressBar.style.transition = 'width 5s linear';
    
    setTimeout(function() {
      progressBar.style.width = '0';
    }, 100);
  }
});
