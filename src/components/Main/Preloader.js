import React from 'react';
import coin from '../../images/coin.svg';
import bitsybets from '../../images/BITCYBETS.svg';

const Preloader = ({show}) => {
    // const [hide, setHide] = useState(0)
    // const timerOpacity = setInterval(() => {
    //     setHide(hide + 700 > 2800 ? 700 : hide + 700)
    //     return clearInterval(timerOpacity);
    //
    // }, 500)
    if (!show) {
        return (
            <div  className="load">
                <img className="text" src={bitsybets} alt=""/>
                <div className="wrap-img-preload">
                    <img className="coin1"  src={coin} alt=""/>
                    <img className="coin2"  src={coin} alt=""/>
                    <img className="coin3"  src={coin} alt=""/>
                    <img className="coin4"  src={coin} alt=""/>
                </div>
            </div>
        );
    } else {
        return <div/>
    }
};

export default Preloader;
