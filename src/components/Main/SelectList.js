import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import peoples from '../../images/person.svg';
import {setRichesShow} from "../../redux/actions";



const SelectList = (props) => {
    const [online, setOnline] = useState(7000);
    const [list, setList] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setOnline(Math.round(7000 + +props.online + Math.random() * 2000))
        }, 2000);
    }, [])

    return (
        <div onClick={()=>props.setRichesShow(true)} className="peoples">
            <img width="20" src={peoples} alt="peoples"/> <span>Online: {online}</span>

        </div>

    );

}

const mapStateToProps = state => {
    return {
        online: state.balanceReducer.online,
    }
}
const mapDispatchToProps = {
    setRichesShow
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectList);
