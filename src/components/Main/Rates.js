import React, {useEffect, useState} from 'react';
import person from "../../images/person.svg";
import bitcoin from "../../images/bitcoin.svg";
import car from "../../images/car.JPG";
import jack from "../../images/jack.JPG";
import {rates} from "../../redux/actions/game";
import {connect} from "react-redux";

const Rates = () => {
    const [banner, setBanner] = useState("one");
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
    return (
        <div style={{overflow: "hidden"}} onClick={() => {
            window.open('https://bitrxapp.com/?gb', '_blank')
        }} className="round rates">
            <img style={{display: banner !== "one" ? "none" : "block"}} src={car} alt="car"/>
            <img style={{display: banner !== "three" ? "none" : "block"}} src={jack} alt="jack"/>
            <button className="btn btn-primary learn-more">Learn more</button>
        </div>
    );
};

export default Rates;
