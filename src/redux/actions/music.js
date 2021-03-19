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
    YOU_WON, YOU_LOSE
} from "../types";

export function click() {
    return {type: PLAY_CLICK}
}
export function clack() {
    return {type: PLAY_CLACK}
}
export function bell() {
    return {type: PLAY_BELL}
}
export function money() {
    return {type: PLAY_MONEY}
}
export function tic() {
    return {type: PLAY_TIC}
}
export function fireworks() {
    return {type: PLAY_FIREWORKS}
}
export function roulette() {
    return {type: PLAY_ROULETTE}
}
export function spingo(bool) {
    return {type: SPIN, payload: bool}
}
export function stop() {
    return {type: STOP_ALL}
}
export function muteToggle() {
    return {type: MUTE}
}
export function win() {
    return {type: WIN}
}
export function playYouWon() {
    return {type: YOU_WON}
}
export function playYouLose() {
    return {type: YOU_LOSE}
}
