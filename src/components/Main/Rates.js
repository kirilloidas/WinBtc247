import React, {useEffect, useState} from 'react';
import person from "../../images/person.svg";
import bitcoin from "../../images/bitcoin.svg";
import car from "../../images/car.JPG";
import jack from "../../images/jack.JPG";
import {rates} from "../../redux/actions/game";
import {connect} from "react-redux";

const Rates = () => {
    const [banner, setBanner] = useState("one");
    const [winNumber, setWinNumber] = useState();
    useEffect(() => {
        const addBanner = setInterval(() => {
            if(banner === "one") {
                setBanner("three");
            // } else if(banner === "two") {
            //     setBanner("three");
            } else if(banner === "three") {
                setBanner("one");
            }
        }, 30000)
        return () => clearInterval(addBanner)
    }, [banner])

    useEffect(() => {
        setWinNumber(Math.floor(Math.random() * (3 - 1 + 1)) + 1)
        console.log(winNumber)
    }, [])

    const smileGameHandler = e => {
        console.log(winNumber, e.target)
        if(e.target.id == winNumber) {
            e.target.innerHTML = '&#8383;'
            e.target.style.color = '#F7931A';
        } else {
            e.target.innerHTML = '&#10006;'
            e.target.style.color = 'red'
        }
    }

    return (
        <div style={{overflow: "hidden"}} onClick={() => {
            // window.open('https://bitrxapp.com/?gb', '_blank')
        }} className="round rates smiles">
            <div className='smile-block'>
                <span className='smile' id='1' onClick={smileGameHandler}>🤑</span>
            </div>
            <div className='smile-block'>
                <span className='smile' id='2' onClick={smileGameHandler}>🤑</span>
            </div>
            <div className='smile-block'>
                <span className='smile' id='3' onClick={smileGameHandler}>🤑</span>
            </div>
            {/* <img style={{display: banner !== "one" ? "none" : "block"}} src={car} alt="car"/>
            <img style={{display: banner !== "three" ? "none" : "block"}} src={jack} alt="jack"/>
            <button className="btn btn-primary learn-more">Learn more</button> */}
        </div>
    );
};

export default Rates;
