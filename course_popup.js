// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
    // Get all buttons that open popups
    const popupButtons = document.querySelectorAll('.open-popup');
    
    // Add click event listener to all popup buttons
    popupButtons.forEach(button => {
      button.addEventListener('click', function() {
        const target = this.getAttribute('data-target'); // Get the target popup id
        const modal = document.getElementById(target);   // Get the popup element by id
        modal.style.display = "block";                   // Show the modal
      });
    });
  
    // Get all close buttons
    const closeButtons = document.querySelectorAll('.close');
  
    // Add click event listener to all close buttons
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const target = this.getAttribute('data-target'); // Get the target popup id
        const modal = document.getElementById(target);   // Get the popup element by id
        modal.style.display = "none";                    // Hide the modal
      });
    });
  
    // Close the modal when clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = "none"; // Close the modal
      }
    });
  });
  
