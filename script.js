// Function to close the letter overlay
function closeLetter() {
    const letterOverlay = document.getElementById('letter-overlay');
    if (letterOverlay) {
        letterOverlay.classList.add('hidden');
    }
}

// Function to navigate to the tracks page
function openMixtape() {
    window.location.href = 'tracks2.html';
}

// Close letter when clicking outside of it
document.addEventListener('DOMContentLoaded', function() {
    const letterOverlay = document.getElementById('letter-overlay');
    if (letterOverlay) {
        letterOverlay.addEventListener('click', function(e) {
            if (e.target === letterOverlay) {
                closeLetter();
            }
        });
    }
});
