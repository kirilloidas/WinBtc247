import React from 'react';
import click from './click.wav';
import money from './money.mp3';
import bell from './bell.mp3';
import tic from './tic.mp3';
import clack from './clack.mp3';
import fireworks from './fireworks.mp3';
import roulette from './roulette.mp3';
import success from './youwon.mp3';
import Sound from "./Sound";
import {connect} from "react-redux";
import youwon from './youwon.mp3';
import you_lose from './you_lose.aac'

const Playlist = ({spin}) => {
    return (
        <div>
            <Sound param={{id: 'click', effect: click}}/>
            <Sound param={{id: 'clack', effect: clack}}/>
            <Sound param={{id: 'money', effect: money}}/>
            <Sound param={{id: 'bell', effect: bell}}/>
            <Sound param={{id: 'tic', effect: tic}}/>
            <Sound param={{id: 'fireworks', effect: fireworks}}/>
            <Sound param={{id: 'success', effect: success}}/>
            <Sound param={{id: 'you_lose', effect: you_lose}}/>
            <Sound param={{id: 'youwon', effect: youwon}}/>
            {spin ? <Sound param={{id: 'roulette', effect: roulette}}/> : false}
        </div>
    );
};
const mapStateToProps = state => {
    return {
        spin: state.soundReducer.spin
    }
}
export default connect(mapStateToProps)(Playlist);
