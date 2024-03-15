// Define slideIndex variable and initialize it to 1
let slideIndex = 1;

// Call showSlides function with the initial slideIndex
showSlides(slideIndex);

// Function to move to the previous or next slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to move to a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display the slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  // Check if slide index is out of range, reset it if needed
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  // Display the current slide
  slides[slideIndex-1].style.display = "block";  
}

// Event listener for the "Back to Home" button
document.getElementById("homeButton").addEventListener("click", function() {
  // Redirect to the home page
  window.location.href = ".../index.html";
});