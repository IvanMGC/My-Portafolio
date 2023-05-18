import { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const MutateAccountant = ({fun, text}) => {
    return(
        <button className="mbtn" onClick={()=>{fun()}}>{text}</button>
    )
}

const ButtonsAccountant = ({increment,decrement}) => {
    return(
        <div id='buttons-accountant'>
            <MutateAccountant text={"+"} fun={()=>{increment()}}/>
            <MutateAccountant text={"—"} fun={()=>{decrement()}}/>
        </div>
    )
}

const ShowAccountant = ({value}) => {
    return(
        <div className='show-accountant'><span>{value}</span></div>
    )
}

const AppAccountant = () =>{
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if(count !== 0){
            setCount(count-1);
        }
    }

    return(
        <div id='content-accountant'>
            <ShowAccountant value={count}/>
            <ButtonsAccountant increment={()=>{increment()}} decrement={()=>{decrement()}} />
        </div>
    )
}

export default AppAccountant

MutateAccountant.propTypes = {
    fun: PropTypes.func,
    text: PropTypes.string,
}

ButtonsAccountant.propTypes = {
    increment: PropTypes.func,
    decrement: PropTypes.func,
}

ShowAccountant.propTypes = {
    value: PropTypes.number,
}

