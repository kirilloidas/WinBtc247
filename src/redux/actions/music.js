import {MUTE, PLAY_BELL, PLAY_CLACK, PLAY_CLICK, PLAY_FIREWORKS, PLAY_MONEY, PLAY_TIC, STOP_ALL} from "../types";

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
export function stop() {
    return {type: STOP_ALL}
}
export function muteToggle() {
    return {type: MUTE}
}
