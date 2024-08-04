// script.js
document.addEventListener('DOMContentLoaded', () => {
    const channels = document.querySelectorAll('.channel');
    const videoContainer = document.getElementById('video-container');
    const videoFrame = document.getElementById('video');
    const closeButton = document.getElementById('close-button');

    let selectedIndex = 0;

    const selectChannel = (index) => {
        channels[selectedIndex].classList.remove('selected');
        selectedIndex = index;
        channels[selectedIndex].classList.add('selected');
    };

    channels.forEach((channel, index) => {
        channel.addEventListener('click', () => {
            const videoId = channel.getAttribute('data-video-id');
            videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            videoContainer.classList.remove('hidden');
        });
    });

    closeButton.addEventListener('click', () => {
        videoFrame.src = '';
        videoContainer.classList.add('hidden');
    });

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowRight':
                if (selectedIndex < channels.length - 1) {
                    selectChannel(selectedIndex + 1);
                }
                break;
            case 'ArrowLeft':
                if (selectedIndex > 0) {
                    selectChannel(selectedIndex - 1);
                }
                break;
            case 'Enter':
                channels[selectedIndex].click();
                break;
            case 'Escape':
                if (!videoContainer.classList.contains('hidden')) {
                    closeButton.click();
                }
                break;
        }
    });

    selectChannel(selectedIndex);
});