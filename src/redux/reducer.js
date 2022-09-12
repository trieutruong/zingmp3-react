import { PLAY_SONG, SET_SRC_AUDIO } from './constanst.js';

export const initState = {
    isPlaying: false,
    srcAudio: '',
    currentIndexSong: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        // case SET_JOB:
        //     return {
        //         ...state,
        //         job: action.payload,
        //     };

        // case ADD_JOB:
        //     return {
        //         ...state,
        //         jobs: [...state.jobs, action.payload],
        //     };

        // case DELETE_JOB:
        //     const newJobs = [...state.jobs];

        //     newJobs.splice(action.payload, 1);

        //     return {
        //         ...state,
        //         jobs: newJobs,
        //     };
        case PLAY_SONG:
            return {
                ...state,
                isPlaying: action.payload,
            };

        case SET_SRC_AUDIO:
            return {
                ...state,
                srcAudio: action.payload,
            };
        default:
            throw new Error('Invalid action');
    }
};

export default reducer;
