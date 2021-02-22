import React from 'react';
import "./auth.scss";

const styles = {
    backgroundColor: 'inherit',
    border: '1px solid #FFFFFF',
    borderRadius: '8px',
    height: '40px',
    padding: '10px',
}
const arrow = {
    position: 'absolute',
    fontSize: '24px',
    top: '8px',
    left: '30px',
    cursor: 'pointer'
}
const label = {
    marginRight: 'auto',
    marginBottom: '5px',
    opacity: 0.8
}
const Support = ({history}) => {
    return (
        <div className="blur">
            <form style={{width: '40%'}} className="round-dark win">
                <span onClick={() => history.push('/')} style={arrow} className="back restore-arrow">&larr;</span>
                <div className="win-btn">
                    <h2>Support</h2>
                    <span style={label}>Write your question here </span>
                    <input style={styles} type="text"/>
                    <button onClick={() => history.push('/')} style={{width: '200px', margin: '30px auto'}} className="btn btn-primary">OK
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Support;
