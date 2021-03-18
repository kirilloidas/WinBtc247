import React from 'react';
import click from './click.wav';
import money from './money.mp3';
import bell from './bell.mp3';
import tic from './tic.mp3';
import clack from './clack.mp3';
import fireworks from './fireworks.mp3';
import roulette from './roulette.mp3';
import Sound from "./Sound";
import {connect} from "react-redux";

const Playlist = ({spin}) => {
    return (
        <div>
            <Sound param={{id: 'click', effect: click}}/>
            <Sound param={{id: 'clack', effect: clack}}/>
            <Sound param={{id: 'money', effect: money}}/>
            <Sound param={{id: 'bell', effect: bell}}/>
            <Sound param={{id: 'tic', effect: tic}}/>
            <Sound param={{id: 'fireworks', effect: fireworks}}/>
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
