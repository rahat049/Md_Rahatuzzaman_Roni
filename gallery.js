// gallery.js

// Function to control slides in the slideshow
function plusSlides(n, projectNumber) {
    showSlides((slideIndex[projectNumber] += n), projectNumber);
}

// Function to show a specific slide
function currentSlide(n, projectNumber) {
    showSlides((slideIndex[projectNumber] = n), projectNumber);
}

// Function to display slides
function showSlides(n, projectNumber) {
    var i;
    var slides = document.getElementsByClassName('mySlides ' + projectNumber);
    var dots = document.getElementsByClassName('dot ' + projectNumber);

    if (n > slides.length) {
        slideIndex[projectNumber] = 1;
    }

    if (n < 1) {
        slideIndex[projectNumber] = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex[projectNumber] - 1].style.display = 'block';
    dots[slideIndex[projectNumber] - 1].className += ' active';
}

// Set initial slide index for each project
var slideIndex = {
    project1: 1,
    project2: 1,
    project3: 1,
    // Add more projects as needed
};

// Display initial slides
showSlides(slideIndex.project1, 'project1');
showSlides(slideIndex.project2, 'project2');
showSlides(slideIndex.project3, 'project3');
// Add more projects as needed
