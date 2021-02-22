import React from 'react';
import {connect} from "react-redux";
import './ads.scss';

const Ads = () => {
    return (
        <div className="round-dark ads">
            <h2>Ad creative</h2>
            <div className="wrapper-input-file">
                <div className="label-file">Select a banner to add
                    <div>275 x 170 px</div>
                </div>
                <div className="wrap-input">
                    <label className="dashed" htmlFor="ad-file">
                        <input type="file" id="ad-file"/>
                        <span className="description">Drag and drop file here or</span>
                    </label>
                    <label htmlFor="ad-file" className="btn-file">Choose file</label>

                </div>
            </div>
        </div>
    );
};

export default connect(null, null)(Ads);
