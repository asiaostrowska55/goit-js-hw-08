import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function () {});

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

// player.on(
//   'timeupdate',
//   throttle(function ({ seconds }) {
//     localStorage.setItem('videoplayer-current-time', seconds);
//   }, 1000)
// );

// const videoCurrentTime = () => {
//   return localStorage.getItem('videoplayer-current-time') || 0;
// };

// player
//   .setCurrentTime(videoCurrentTime())
//   .then(function () {})
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         break;
//       default:
//         break;
//     }
//   });

//   const videoCurrentTime = () => {
//     return
//   };
