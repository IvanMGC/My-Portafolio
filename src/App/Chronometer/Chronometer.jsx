import PropTypes from 'prop-types';

import { useState } from 'react'
import './styles.scss'

const ButtonCronometer = ({classs,fun}) => {
    return(
        <button className={classs} onClick={()=>{fun()}}/>
    )
}

const ShowCount = ({mil,sec,min}) => {
    return(
        <div className='cro-show-numbers'>
            <span id="cro">
                <span className='sec-min'>{`${min}:${sec}.`}</span>
                <span className='mil'>{mil}</span>
            </span>
        </div>
    )
}

const AppChronometer = () => {
    const [intervalM, setIntervalM] = useState(0);
    const [intervalS, setIntervalS] = useState(0);
    const [intervalMinutes, setIntervalMinutes] = useState(0);

    const [milliseconds, setMilliseconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const [isActivate, setIsActivate] = useState(true);

    const startCount = () => {
        setMilliseconds(0);
        let newI = setInterval(()=>{
            setMilliseconds((milliseconds)=>(milliseconds!==99)?milliseconds +1:0);
        },10)
        setIntervalM(newI);
    }

    const startSecond = () => {
        setSeconds(0);
        let newSeconds = setInterval(()=>{
            setSeconds((seconds)=>(seconds!==59)?seconds+1:0);
        },1000);
        setIntervalS(newSeconds);
    }

    const startMinute = () =>{
        setMinutes(0);
        let newMinutes = setInterval(()=>{
            setMinutes((minutes)=>minutes+1)
        },60000);
        setIntervalMinutes(newMinutes);
    }

    const stopCount = () => {
        clearInterval(intervalM);
        clearInterval(intervalS);
        clearInterval(intervalMinutes);
    }
    
    function controlChrometer(){
        if(isActivate){
            setMilliseconds(0),setSeconds(0), setMinutes(0)
            startCount(),startSecond(),startMinute()
        }else{
            stopCount();
        }
    }

    return(
        <div id='content-chronometer'>
            <div className='cro-deco1' /> <div className='cro-deco2'/>
            
            <ButtonCronometer classs={"btn-cro start-stop"} fun={()=>{setIsActivate(!isActivate),controlChrometer()}} />
            <div className='cro-circle'>
                <ShowCount mil={milliseconds.toString().padStart(2,0)} sec={seconds.toString().padStart(2,0)} min={minutes.toString().padStart(2,0)} />
            </div>
        </div>
    )
}

export default AppChronometer;


ButtonCronometer.propTypes = {
    classs: PropTypes.string,
    fun: PropTypes.func,
}
ShowCount.propTypes = {
    mil: PropTypes.string,
    sec: PropTypes.string,
    min: PropTypes.string,
}