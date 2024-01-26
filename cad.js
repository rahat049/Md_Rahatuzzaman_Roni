// Define an object to store slide indexes for each project
var slideIndexes = {};

// Initialize slide indexes for each project
function initializeSlideIndex(project) {
    slideIndexes[project] = 0;
}

// Initialize slide indexes for all projects
initializeSlideIndex('project1');
initializeSlideIndex('project2');
initializeSlideIndex('project3');
initializeSlideIndex('project4');
initializeSlideIndex('project5');
initializeSlideIndex('project6');
initializeSlideIndex('project7');
initializeSlideIndex('project8');
initializeSlideIndex('project9');
initializeSlideIndex('project10');
initializeSlideIndex('project11');

// Automatic slideshow
function showSlides(project) {
    var i;
    var slides = document.getElementsByClassName(project);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Increment the slide index for the given project
    slideIndexes[project]++;
    if (slideIndexes[project] > slides.length) {
        slideIndexes[project] = 1;
    }

    slides[slideIndexes[project] - 1].style.display = 'block';

    // Automatically change slide every 5 seconds
    setTimeout(function () {
        showSlides(project);
    }, 2500);
}

// Manual control buttons
function plusSlides(n, project) {
    showSlidesManual(slideIndexes[project] += n, project);
}

function showSlidesManual(n, project) {
    var i;
    var slides = document.getElementsByClassName(project);
    if (n > slides.length) {
        slideIndexes[project] = 1;
    }
    if (n < 1) {
        slideIndexes[project] = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndexes[project] - 1].style.display = 'block';
}

// Call showSlides function for each project
showSlides('project1');
showSlides('project2');
showSlides('project3');
showSlides('project4');
showSlides('project5');
showSlides('project6');
showSlides('project7');
showSlides('project8');
showSlides('project9');
showSlides('project10');
showSlides('project11');
