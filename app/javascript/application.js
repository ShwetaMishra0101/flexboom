// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

//= require jquery3
//= require popper
//= require bootstrap
import 'bootstrap'
import 'bootstrap/dist/js/bootstrap'
document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    
    accordionHeaders.forEach(function(header) {
      header.addEventListener("click", function() {
        // Toggle the active class on the clicked header
        this.classList.toggle("active");
        
        // Toggle the display of the accordion content
        const accordionContent = this.nextElementSibling;
        accordionContent.style.display = accordionContent.style.display === "block" ? "none" : "block";
      });
    });
  });