import {
    MUTE,
    PLAY_BELL,
    PLAY_CLACK,
    PLAY_CLICK,
    PLAY_FIREWORKS,
    PLAY_MONEY,
    PLAY_ROULETTE,
    PLAY_TIC, SPIN,
    STOP_ALL, WIN,
    YOU_LOSE, YOU_WON
} from "../types";

const initialState = {
    play: '',
    mute: true,
    spin: false
}
export const soundReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAY_BELL:
            return {...state, play: 'bell'};
        case PLAY_CLACK:
            return {...state, play: 'clack'};
        case PLAY_CLICK:
            return {...state, play: 'click'}
        case PLAY_MONEY:
            return {...state, play: 'money'}
        case PLAY_TIC:
            return {...state, play: 'tic'}
        case PLAY_FIREWORKS:
            return {...state, play: 'fireworks'}
        case PLAY_ROULETTE:
            return {...state, play: 'roulette'}
        case SPIN:
            return {...state, spin: action.payload}
        case WIN:
            return {...state, play: 'success'}
        case STOP_ALL:
            return {...state, play: ''}
        case MUTE:
            return {...state, mute: !state.mute}
        case YOU_LOSE: 
            return {...state, play: 'you_lose'}
        case YOU_WON:
            return {...state, play: 'youwon'}
        default:
            return state;
    }
}
