import React, {useEffect, useState} from 'react';
import deposit from '../../images/deposit.svg';
import withdraw from '../../images/withdraw.svg';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {click, roulette, spingo} from "../../redux/actions/music";
import switchWallet from "../../images/switch_wallet.svg";
import wheel from "../../images/wheel.svg";
import spin from "../../images/spin.png";
import pointer from "../../images/pointer.png";
import {changeDemo, userdata} from "../../redux/actions/game";
import {createAd} from "../../redux/actions";
import {User} from "../../api/User";

const RightSector = ({balance, roulette, spingo, lastWinGame, lastgame, wins, colorBlalance, click, userdata, name, isDemo, threewins, changeDemo, createAd, predict}) => {
    const [switcher, setSwitcher] = useState(false);
    const [chance, setChance] = useState(0);
    const [go, setGo] = useState(false);
    const [banner, setBanner] = useState("banner one round-dark");
    const balanceColor = {color: colorBlalance === 'green' ? '#32D74B' : colorBlalance === 'red' ? '#FF453A' : '#FFFFFF'}

    useEffect(() => {
        const addBanner = setInterval(() => {
            if(banner === "banner one round-dark") {
                setBanner("banner three round-dark");
            // } else if (banner === "banner two round-dark") {
            //     setBanner("banner three round-dark");
            } else if(banner === "banner three round-dark") {
                setBanner("banner one round-dark");
            }
        }, 30000)
        return () => clearInterval(addBanner)
    }, [banner])
    useEffect(() => {
        userdata();
    }, [])

    return (
        <div className="right-sector">
            <div style={{display: switcher ? "block" : "none"}} className="blur">
                <div className="round-dark win">
                    <h2>My bitcoin wallet</h2>
                    {/*<div className="text-center">You are going to play on real <br/> money. Are you sure? </div>*/}
                    <div className="win-btn">
                        <button onClick={() => {
                            changeDemo();
                            setSwitcher(false);
                        }}
                                className="btn btn-primary">{isDemo ? 'Bet real bitcoin' : 'Demo wallet'}
                        </button>
                        <button onClick={() => {
                            userdata();
                            setSwitcher(false);
                        }} className="btn btn-primary">{!isDemo ? 'Stay my wallet' : 'Continue demo'}
                        </button>
                    </div>
                </div>
            </div>
            <div className="score-wrap round-dark">
                <h2>{isDemo ? "Demo wallet" : "My wallet"}
                    <span onClick={() => {
                        if(!predict) {
                            setSwitcher(true)
                        }
                    }} className={isDemo ? "switch-wrapper demo" : "switch-wrapper real"}
                    style={predict ? {filter: 'grayscale(1)', opacity: .5} : null}>
                    <img src={switchWallet} alt=""/>
                </span></h2>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <div className="label">Name</div>
                            <div className="score" id="name">{name}</div>
                        </td>
                        <td>
                            <div className="label">Wins</div>
                            <div className="score" id="wins">{wins}</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="label">Balance</div>
                            <div style={balanceColor} className="score" id="balance">{balance} BTC</div>
                        </td>
                        <td>
                            <div className="label">Last Win</div>
                            <div className="score" id="lastWin">{lastWinGame || '0.000'} BTC</div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                {!isDemo
                    ? <div>
                    <Link to="/refill" style={{pointerEvents: predict ? "none" : "auto"}} className="btn money-btn green">DEPOSIT
                    <img src={deposit} alt="deposit"/>
                    </Link>
                    <Link to="/withdraw" style={{pointerEvents: predict ? "none" : "auto"}} className="btn money-btn red">WITHDRAW
                    <img src={withdraw} alt="withdraw"/>
                    </Link>
                    </div>
                    : <div>
                        <button disabled={predict} onClick={() => {setSwitcher(true)}}  className="btn money-btn green">BET REAL BITCOIN
                            {/*<img src={withdraw} alt="withdraw"/>*/}
                        </button>
                        <Link to="/invite" style={{pointerEvents: predict ? "none" : "auto"}} className="btn money-btn friends">BETS WITH FRIENDS
                            {/*<img src={deposit} alt="deposit"/>*/}
                        </Link>

                    </div>}
            </div>
            <div  className="banner">
                <img style={{transform: `rotate(-${chance}deg)`}} className={ + go ? "wheel go" : "wheel"} src={wheel} alt="wheel"/>
                {console.log(go)}
                <span className='span-spin' style={{display: !go ? 'block' : 'none'}}>Spin</span>
                <img onClick={() => {
                    setChance(0);
                    spingo(true);
                    User.wheelSPeen()
                        .then(res => {
                            setChance((+res.data.data - 3) * 45 + 720);
                            roulette();
                            setGo(true);
                            setTimeout(() => {
                                setGo(false);
                                spingo(false);
                            }, 5000)
                        })}} style={{display: go ? "none" : "inline"}} className="spin" src={spin} width={65} alt="spin"/>
                <img  className="pointer" src={pointer} alt="pointer"/>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        balance: state.balanceReducer.balance,
        lastWinGame: state.balanceReducer.lastWinGame,
        lastgame: state.balanceReducer.lastgame,
        colorBlalance: state.balanceReducer.colorBlalance,
        wins: state.balanceReducer.wins,
        name: state.balanceReducer.name,
        threewins: state.balanceReducer['3wins'],
        isDemo: state.balanceReducer.isDemo,
        predict: state.balanceReducer.predict,
    }
}
const mapDispatchToProps = {
    click,
    userdata,
    changeDemo,
    createAd,
    roulette,
    spingo
}
export default connect(mapStateToProps, mapDispatchToProps)(RightSector);
