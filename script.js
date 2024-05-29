document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('player');
    const status = document.getElementById('status');

    audio.addEventListener('playing', () => {
        status.textContent = 'Now Playing';
    });

    audio.addEventListener('pause', () => {
        status.textContent = 'Paused';
    });

    audio.addEventListener('ended', () => {
        status.textContent = 'Stream Ended';
    });

    audio.addEventListener('error', () => {
        status.textContent = 'Error Loading Stream';
    });

    // Automatically play the stream when the page loads
    window.onload = () => {
        audio.play().catch(error => {
            status.textContent = 'Click Play to Start the Stream';
            console.log('Autoplay was prevented:', error);
        });
    };
});
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("song-request-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = new FormData(form);
        var fullName = formData.get("full-name");
        var email = formData.get("email");
        var songRequest = formData.get("song-request");

        // Display popup message
        alert("Thank you for your song request!");

        // Optionally, you can reset the form after submission
        form.reset();
    });
});
