import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import './main.scss';
import bitcoin from '../../images/bitcoin.svg';
import times from '../../images/times-solid.svg';
import Graph from "../Graph";
import RightSector from "./RightSector";
import Dashboard from "./Dashboard";
import riches from "../riches";
import {
    closeCongratulation,
    closeYourLose,
    createAd,
    logoutQuestion,
    prohibition, setRichesShow,
    switchView
} from "../../redux/actions";
import {money, stop} from "../../redux/actions/music";
import JS_FIREWORKS from "../fireworks";
import Time from "./Time";
import Preloader from "./Preloader";
import {userdata} from "../../redux/actions/game";
import SelectList from "./SelectList";
import Rates from "./Rates";
import logo from "../../images/logoLeft.svg";

const fire = () => {
    document.getElementById('fireworks-canvas').style.width = '100%'
    document.getElementById('fireworks-canvas').style.height = '100%'
    const firework = JS_FIREWORKS.Fireworks({
        id: 'fireworks-canvas',
        hue: 120,
        particleCount: 100,
        delay: 0,
        minDelay: 5,
        maxDelay: 10,
        boundaries: {
            top: 50,
            bottom: 240,
            left: 50,
            right: 590
        },
        fireworkSpeed: 2,
        fireworkAcceleration: 1.05,
        particleFriction: .95,
        particleGravity: 1.5
    });
    firework.start();
};

const Main = ({history, name, view, showRiches, setRichesShow, switchView, course, lastWin, closeCongratulation, congratulation, yourlose, closeYourLose, currentCourse, money, muteToggle, logout, logoutQuestion, prohibition, userdata, lastWinGame, createAd, createAdProp, widthMode}) => {
    useEffect(() => {
        userdata();
        fire();
    }, [congratulation])
    useEffect(() => {
        fire();
    }, [])
    useEffect(()=> switchView(false), [])
    let flag = course ? course.length : false;
    return (
        <div className={`${widthMode}-bg main`}>
            <Preloader show={flag}/> <div className="riches">
            <h2 style={{display: showRiches ? "block" : "none"}} className="gold">TOP <img src={logo} alt="logo" height="23"/> Accounts</h2>
                <ul style={{display: showRiches ? "block" : "none"}} className='riches-list'>
                    <img onClick={()=>setRichesShow(false)} src={times} width={30} alt=""/>
                    <li className="upper"><span className="head">User</span><span className="head">Wins</span><span className="head">Loses</span><span className="head">Balance</span></li>
                    {riches.map(man => (<li className={name === man.name ? "gold" : "white"}>
                        <span  >{man.name}</span><span >{man.wins}</span><span >{man.loses}</span><span >{man.balance}</span>
                    </li>))}
                </ul>
            </div>
            <div style={{display: congratulation ? "block" : "none"}} className="blur">
                <canvas width="640" height="480" id="fireworks-canvas" style={{background: 'rgba(0,0,0, .2)'}}/>
                <div className="round-dark win">
                    <h2>Congratulations</h2>
                    <div className="text-center">You won {lastWinGame || 1} <img src={bitcoin} width="15" alt="bit"/>
                    </div>
                    <div className="win-btn">
                        <button onClick={() => {
                            closeCongratulation();
                            userdata();
                            document.getElementById('fireworks').pause();
                            money();
                        }} className="btn btn-primary">ADD TO MY WALLET
                        </button>
                        <button disabled onClick={() => {
                            closeCongratulation();
                            userdata();
                            document.getElementById('fireworks').pause();
                            money();
                        }} className="btn btn-primary">WITHDRAW
                        </button>
                    </div>
                </div>
            </div>
            <div style={{display: yourlose ? "block" : "none"}} className="blur">
                <div className="round-dark win">
                    <h2>Your lose</h2>
                    <div className="win-btn">
                        <button onClick={() => {
                            closeYourLose();
                            userdata();
                        }} className="btn btn-primary">Bet again
                        </button>
                    </div>
                </div>
            </div>
            <div style={{display: createAdProp ? "block" : "none"}} className="blur soon">
                <div className="round-dark win">
                    <div className="win-btn">
                        <h2>This feature coming soon</h2>
                        <button onClick={() => {
                            createAd();
                        }} className="btn btn-primary">OK
                        </button>
                    </div>
                </div>
            </div>
            <main style={{display: flag ? 'block' : 'none'}}>
                <div className="row main">
                    <div style={{display: widthMode === "mobile" && view ? "none" : "flex"}} className="left-sector">
                        {widthMode === "mobile" ? <Rates/> : <></>}
                        <div className={`${widthMode} round globe`}>
                            {widthMode === "desktop" ? <Time/> : <></>}
                            <div>
                                <h2 className="text-center"><img src={bitcoin} className="m-2" alt="course"/>
                                    {currentCourse} <span>$</span>
                                </h2>
                                <div>
                                    {widthMode === "desktop" ? <SelectList/> : <></>}
                                </div>
                            </div>
                            <div className="graph-wrapper">
                                <div className="graph">
                                    <Graph gradient1={widthMode === "desktop" ? undefined : 20}
                                           gradient2={widthMode === "desktop" ? undefined : 150}
                                           chartHeight={widthMode === "desktop" ? 250 : 150}/>
                                </div>
                            </div>
                        </div>
                        <Dashboard/>
                    </div>
                    {widthMode === "desktop" ? <RightSector/> : <></>}
                    {widthMode === "mobile" && view ? <RightSector/> : <></>}

                </div>
            </main>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        course: state.courseReducer.course,
        currentCourse: state.courseReducer.currentCourse,
        lastWin: state.balanceReducer.lastWin,
        name: state.balanceReducer.name,
        lastWinGame: state.balanceReducer.lastWinGame,
        congratulation: state.balanceReducer.congratulation,
        yourlose: state.balanceReducer.yourlose,
        logout: state.authReducer.logoutQuestion,
        showRiches: state.authReducer.showRiches,
        createAdProp: state.switchOptions.createAd,
        widthMode: state.switchOptions.widthMode,
        view: state.switchOptions.view
    }
}
const mapDispatchToProps = {
    closeCongratulation,
    closeYourLose,
    money,
    stop,
    logoutQuestion,
    prohibition,
    userdata,
    createAd,
    switchView,
    setRichesShow
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
