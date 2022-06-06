import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const key = 'videoplayer-current-time';
const savedTime = localStorage.getItem(key) || 0;
//console.log(savedTime);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  const value = data.seconds;
  localStorage.setItem(key, value);
}

player.setCurrentTime(savedTime);
