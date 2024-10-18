hmm = true

document.addEventListener('click', function() {
    // Run only once per document load
    if (hmm === true) {

    // Targets
    var cta = document.getElementById('cta');
    var title = document.getElementById('title');
    var iframe = document.getElementById('youtube-video');
    var card = document.getElementById('card');
    var bottomHeading = document.getElementById('bottom-heading');

    // Autoplay video and unmute
    iframe.src = iframe.src.replace("mute=1", "mute=0");

    // Show/hide functionality
    cta.style.display = 'none';
    title.style.display = 'inherit';
    card.style.display = 'flex';
    bottomHeading.style.display = 'inherit';
    }

    // Toggle
    hmm = false;
});