
document.addEventListener('DOMContentLoaded', function() {
  // Project filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        // Show/hide projects based on filter
        projectCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Project detail view
  const projectDetailLinks = document.querySelectorAll('.project-detail-link');
  const projectsSection = document.querySelector('.projects-grid').closest('section');
  const projectDetailSection = document.getElementById('projectDetail');
  const backButton = document.getElementById('backToProjects');
  
  if (projectDetailLinks.length > 0 && projectDetailSection) {
    projectDetailLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const projectId = this.getAttribute('data-project');
        const projectDetail = document.getElementById(`${projectId}-detail`);
        
        if (projectDetail) {
          // Hide projects grid section
          projectsSection.classList.add('hidden');
          
          // Show project detail section
          projectDetailSection.classList.remove('hidden');
          
          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
    
    // Back button functionality
    if (backButton) {
      backButton.addEventListener('click', function() {
        // Hide project detail section
        projectDetailSection.classList.add('hidden');
        
        // Show projects grid section
        projectsSection.classList.remove('hidden');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
  
  // Image gallery interaction in project detail
  const galleryImages = document.querySelectorAll('.image-gallery img');
  const mainImage = document.querySelector('.main-image');
  
  if (galleryImages.length > 0 && mainImage) {
    galleryImages.forEach(img => {
      img.addEventListener('click', function() {
        // Update main image src with clicked thumbnail
        mainImage.src = this.src;
        
        // Update active state
        galleryImages.forEach(image => image.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
});
