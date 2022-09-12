import { PLAY_SONG, SET_SRC_AUDIO } from './constanst.js';

// export const setJob = (payload) => {
//   return {
//     type: SET_JOB,
//     payload,
//   };
// };

// export const addJob = (payload) => {
//   return {
//     type: ADD_JOB,
//     payload,
//   };
// };

// export const deleteJob = (payload) => {
//   return {
//     type: DELETE_JOB,
//     payload,
//   };
// };

export const playSong = (payload) => {
    return {
        type: PLAY_SONG,
        payload,
    };
};

export const setSrcAudio = (payload) => {
    return {
        type: SET_SRC_AUDIO,
        payload,
    }
}
