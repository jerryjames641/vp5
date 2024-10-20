const video = document.getElementById('video');
const videoSource = document.getElementById('video-source');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const tracklist = document.getElementById('tracklist');

const videos = [
    'video1.mp4',
    'video2.mp4',
    'video3.mp4'
];

let currentVideoIndex = 0;

// Autoplay the first video on page load
window.onload = () => {
    loadVideo(currentVideoIndex); // Load the first video
};

// Play button
playButton.addEventListener('click', () => {
    video.play();
});

// Pause button
pauseButton.addEventListener('click', () => {
    video.pause();
});

// Next button
nextButton.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    loadVideo(currentVideoIndex);
});

// Previous button
prevButton.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    loadVideo(currentVideoIndex);
});

// Load video function
function loadVideo(index) {
    videoSource.src = videos[index];
    video.load();
    video.play();
    highlightCurrentTrack(); // Highlight the current track
}

// Event listener for video end
video.addEventListener('ended', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    loadVideo(currentVideoIndex);
});

// Tracklist click event
tracklist.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        currentVideoIndex = Array.from(tracklist.children).indexOf(event.target);
        loadVideo(currentVideoIndex);
    }
});

// Function to highlight the current track
function highlightCurrentTrack() {
    const trackItems = tracklist.children;
    
    // Remove highlight from all tracks
    Array.from(trackItems).forEach((item, index) => {
        item.classList.remove('highlight');
        if (index === currentVideoIndex) {
            item.classList.add('highlight'); // Add highlight to current track
        }
    });
}
