// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Scroll-triggered animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.product-card, .feature, .showcase-item, .testimonial-card, .pricing-card');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
  
    // Initial setup for animations
    const setupAnimations = () => {
      const elements = document.querySelectorAll('.product-card, .feature, .showcase-item, .testimonial-card, .pricing-card');
      
      elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      });
      
      // Trigger initial animation check
      animateOnScroll();
    };
  
    setupAnimations();
    
    // Add scroll listener for animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .footer-column a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Only process internal links
        if (this.getAttribute('href').startsWith('#')) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Header background change on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      } else {
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.8)';
        header.style.boxShadow = 'none';
      }
    });
    
    // Product thumbnails functionality
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        const mainImage = this.closest('.product-card').querySelector('.product-image img');
        const thumbnailSrc = this.getAttribute('src');
        
        // Swap the images
        const mainSrc = mainImage.getAttribute('src');
        mainImage.setAttribute('src', thumbnailSrc);
        this.setAttribute('src', mainSrc);
      });
    });
    
    // Launch button click effect
    const launchButtons = document.querySelectorAll('.launch-btn');
    
    launchButtons.forEach(button => {
      button.addEventListener('click', function() {
        this.textContent = 'Launching...';
        this.disabled = true;
        
        // Simulate loading
        setTimeout(() => {
          this.textContent = 'Launched!';
          
          // Reset after delay
          setTimeout(() => {
            this.textContent = 'Launch';
            this.disabled = false;
          }, 2000);
        }, 1500);
      });
    });
  });
  