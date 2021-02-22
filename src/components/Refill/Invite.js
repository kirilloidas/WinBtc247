import React, {useState} from 'react';
import "./refill.scss";
import back from "../../images/back.svg";
import gplus from "../../images/social/gplus.svg";
import telegram from "../../images/social/telegram.svg";
import sms from "../../images/social/sms.svg";
import viber from "../../images/social/viber.svg";
import twitter from "../../images/social/twitter.svg";
import {Link} from "react-router-dom";

const Invite = ({history}) => {
    const [copied, setCopied] = useState(false);
    const copy = (e) => {
        setCopied(true);
        document.getElementById('link').select();
        document.execCommand('copy');
        return setInterval(() => setCopied(false), 5000);
    }
    return (
        <div className="invite">
            {/*<Header />*/}
            <div className="round-dark">
                <span onClick={() => history.goBack()} className="back"><img src={back} alt="back"/></span>
                <div className="text">
                    <h2>Invite friends</h2>
                    <span className="gold">You will take 1 BTC on your demo wallet for every registration of your friend</span>
                </div>
                <div className="social">
                    <span className="label ">Send invitation</span>
                    <div className="wrap">
                        <div className="wrap-image"><img width="28" src={telegram} alt="telegram"/></div>
                        <div className="wrap-image"><img width="24" src={sms} alt="sms"/></div>
                        <div className="wrap-image"><img width="28" src={viber} alt="viber"/></div>
                        <div className="wrap-image"><img width="28" src={gplus} alt="gplus"/></div>
                        <div className="wrap-image"><img width="28" src={twitter} alt="twitter"/></div>
                    </div>
                    <input type="email" placeholder="hi@gmail.com"/>
                    <button className="invite-btn">SEND INVITE</button>
                </div>
                <div className="share-link">
                    <span className="label ">Share link <span
                        style={{display: copied ? "block" : "none"}} className="green">Link is copied</span></span>
                    <input type="text" id="link" readOnly defaultValue="bitcybets.com/inviting"/>
                    <button onClick={copy} className="invite-btn">COPY LINK</button>
                </div>
                <div className="d-flex justify-content-center mt-3"><Link to="/support" className="support-link">Need
                    support?</Link></div>
            </div>
        </div>
    );
};

export default Invite;
