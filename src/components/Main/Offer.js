import React from 'react';
import bitcoin from "../../images/bitcoin.svg";

const Offer = () => {
    return (
        <div style={{display: winnings ? "block" : "none"}} className="blur">
            <div className="round-dark win">
                <h2>Great job</h2>
                <div className="text-center">You have won 3 times in a row <br/> Your winnings are {sumWIns} <img src={bitcoin} width="15" alt="bit"/></div>
                <div className="win-btn">
                    <button onClick={() => {
                    }} className="btn btn-primary">INVEST in crypto
                    </button>
                    <button disabled onClick={() => {
                        document.getElementById('fireworks').pause();
                    }} className="btn btn-primary">TRAIN WITH US
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Offer;
