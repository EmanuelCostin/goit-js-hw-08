// Importăm biblioteca Vimeo Player API
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo(document.getElementById('vimeo-player'));

const savePlaybackTime = throttle(async function () {
    const currentTime = await player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 500);


player.on('timeupdate', savePlaybackTime);


const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
    player.setCurrentTime(parseFloat(savedTime)).then(() => {
        player.play(); 
    });
}
