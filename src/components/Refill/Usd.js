import React, {useState} from 'react';
import back from "../../images/back.svg";
import visa from "../../images/visa.svg";
import mastercard from "../../images/mastercard.svg";
import dollar from "../../images/dollar.svg";
import Header from "../Header/Header";

const Usd = (props) => {
    const [done, setDone] = useState(false);
    if (!done) {
        return (
            <div>
                <Header/>
                <div className="refill false">
                    <div className="round-dark main-usd">
                        <span onClick={() => props.history.goBack()} className="back"><img src={back} alt="back"/></span>
                        <h2>Payment by USD</h2>
                        <p>Enter your bank card</p>
                        <div className="wrap-img"><img src={visa} alt="visa"/><img src={mastercard} alt="master"/></div>
                        <div className="amount label-payment">Card number</div>
                        <div className="refill-input mb-3">
                            <div className="input-wrap">
                                <input className="card-number" placeholder="_ _ _ _ – _ _ _ _ – _ _ _ _ – _ _ _ _"
                                       type="text"/>
                            </div>
                        </div>
                        <div className="amount"><span>Expiring</span><span className="left">CVC</span></div>
                        <br/>

                        <div className="refill-input">
                            <div className="input-wrap">
                                <input placeholder="_ _ /_ _" type="text"/>
                            </div>
                            <div className="input-wrap">
                                <input placeholder="_ _ _" type="text"/>
                            </div>
                        </div>
                        <div className="refill-input mt-3 mb-3">
                            <div className="input-wrap">
                                <span className="nowrap">Holder’s name</span>
                                <input className="card-number" placeholder="Michael Vasques"
                                       type="text"/>
                            </div>
                        </div>
                        <div className="refill-btn">
                            <button onClick={() => setDone(true)} className="pay">PAY<img src={dollar} width="15"
                                                                                          alt="bit"/></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Header/>
                <div className="refill done">
                    <div className="round-dark main-usd">
                        <h2>Payment completed</h2>
                        <p>Have a luck in your bets</p>
                        <div className="refill-btn">
                            <button onClick={() => props.history.push('/')} className="pay">Go to bets</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Usd;
