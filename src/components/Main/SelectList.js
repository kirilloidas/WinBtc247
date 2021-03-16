import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import peoples from '../../images/person.svg';


const SelectList = (props) => {
    const [online, setOnline] = useState(7000)
    useEffect(() => {
        const interval = setInterval(() => {
            setOnline(Math.round(7000 + +props.online + Math.random() * 2000))
        }, 2000);
    }, [])

    return (
        <div className="peoples">
            <img width="20" src={peoples} alt="peoples"/> <span>Online: {online}</span>
        </div>

    );

}

const mapStateToProps = state => {
    return {
        online: state.balanceReducer.online,
    }
}
export default connect(mapStateToProps, null)(SelectList);
