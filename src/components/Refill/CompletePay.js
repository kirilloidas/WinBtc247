import React from 'react';
import './refill.scss';
import {Link} from "react-router-dom";
import Header from "../Header/Header";



const CompletePay = (props) => {

    return (
        <div>
            <Header/>
            <div className="refill">
                <div style={{height: "250px"}} className="round-dark">
                    <h2 className="pay-header">Payment complete</h2>
                    <div className="refill-btn">
                        <Link to="/game" className="pay"><span>Bet now</span></Link>
                    </div>
                    <div className="d-flex justify-content-center mt-3"><Link to="/support" className="support-link">Need
                        support?</Link></div>
                </div>
            </div>
        </div>
    );
};

export default CompletePay;
