"use strict";

// Load full html file and set variables
document.addEventListener("DOMContentLoaded", function() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var closeBtn = document.getElementsByClassName('close')[0];
	
	// Select all relevent images and adds function to them
    document.querySelectorAll('.clickable').forEach(function(image) {
		image.style.cursor = 'pointer';
        image.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
        });
    });
	
	// Close on click function
    closeBtn.onclick = function() {
        lightbox.style.display = 'none';
    };
	
	// Allow closing if clicked anywhere (other than picture)
    lightbox.onclick = function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    };
});