import React, {useEffect, useRef, useState} from 'react';
import person from "../../images/person.svg";
import bitcoin from "../../images/bitcoin.svg";
import car from "../../images/car.JPG";
import jack from "../../images/jack.JPG";
import {rates} from "../../redux/actions/game";
import {connect} from "react-redux";
import {playYouWon, playYouLose} from '../../redux/actions/music';
import {User} from '../../api/User';
import {userdata} from '../../redux/actions/game';

const Rates = ({playYouWon, playYouLose, userdata}) => {
    const [banner, setBanner] = useState("one");
    const [winNumber, setWinNumber] = useState();
    const [smileTry, setSmileTry] = useState(0);
    const smile1 = useRef(null);
    const smile2 = useRef(null);
    const smile3 = useRef(null);
    const smileTest = '&#8383;';
    
    useEffect(() => {
        const addBanner = setInterval(() => {
            if(banner === "one") {
                setBanner("three");
            } else if(banner === "three") {
                setBanner("one");
            }
        }, 30000)
        return () => clearInterval(addBanner)
    }, [banner])

    const getRandomNumber = () => {
        return setWinNumber(Math.floor(Math.random() * (3 - 1 + 1)) + 1)
    }

    useEffect(() => {
        getRandomNumber()
    }, [])

    const smileGameHandler = e => {
        if(smileTry < 2) {
            if(e.target.id == winNumber) {
                e.target.innerHTML = '&#8383;'
                e.target.style.color = '#F7931A';
                User.getBtc()
                    .then(res => {
                        console.log(res)
                        userdata();
                    }).catch(e => console.log(e))
                playYouWon();
                setTimeout(() => {
                    setSmileTry(0);
                    smile1.current.innerHTML = '&#129297;'
                    smile2.current.innerHTML = '&#129297;'
                    smile3.current.innerHTML = '&#129297;'
                    getRandomNumber()
                }, 2000);
                
            } else {
                e.target.innerHTML = '&#10006;'
                e.target.style.color = 'red'
                if(smileTry == 1)  {
                    playYouLose();
                    setTimeout(() => {
                        setSmileTry(0);
                        smile1.current.innerHTML = '&#129297;'
                        smile2.current.innerHTML = '&#129297;'
                        smile3.current.innerHTML = '&#129297;'
                        getRandomNumber()
                    }, 2000);
                }  
            }
            setSmileTry(smileTry + 1);
            console.log(smileTry)
        }
    }

    return (
        <div style={{overflow: "hidden"}} onClick={() => {
            // window.open('https://bitrxapp.com/?gb', '_blank')
        }} className="round rates smiles">
            <div className='smile-block'>
                <span className='smile' id='1' onClick={smileGameHandler} ref={smile1}>🤑</span>
            </div>
            <div className='smile-block'>
                <span className='smile' id='2' onClick={smileGameHandler} ref={smile2}>🤑</span>
            </div>
            <div className='smile-block'>
                <span className='smile' id='3' onClick={smileGameHandler} ref={smile3}>🤑</span>
            </div>
            {/* <img style={{display: banner !== "one" ? "none" : "block"}} src={car} alt="car"/>
            <img style={{display: banner !== "three" ? "none" : "block"}} src={jack} alt="jack"/>
            <button className="btn btn-primary learn-more">Learn more</button> */}
        </div>
    );
};

const mapDispatchToProps = {
    playYouWon, 
    playYouLose,
    userdata
}

export default connect(null, mapDispatchToProps)(Rates);
