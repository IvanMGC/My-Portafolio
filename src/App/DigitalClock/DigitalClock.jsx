import { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';


const ButtonClock = ({classs,fun}) => {
    return(
        <button className={classs} onClick={()=>{fun()}}/>
    )
}
const ShowCurrentDay=({day})=>{
    const weekDay = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    return(
        <div className='show-current-day'>
            {weekDay.map((e,i)=>(day!==i)?<span key={e}>{e}</span>:<span key={e} className='day-red'><span className='spot'/>{e}</span>)}
        </div>
    )
}

const ShowCurrentDate=({date})=>{
    const cDate = date.split("/").map(e=>e.toString().padStart(2,0));
    return(
        <div className='show-current-date'>
            <span className='dc-number'>{cDate[0]}</span>
            <span className='dc-chart'>DAY</span>
            <span className='dc-number'>{cDate[1]}</span>
            <span className='dc-chart'>MONTH</span>
            <span className='dc-number'>{cDate[2]}</span>
            <span className='dc-chart'>YEAR</span>
        </div>
    )
}

const ShowCurrentTime=({time})=>{
    let dayArr = [];
    for(let i =0; i < time.length;i++){
        if(time[i]===":"){
            dayArr.push(time[i]);
        }else{
            dayArr.push(time[i]+""+time[i+1]);
            i++;
        }
    }
    return(
        <div className="show-current-time">
            {dayArr.map((e,i)=>(e!==":")?<span key={i} className='number'>{e}</span>:<span key={i}>{e}</span>)}
        </div>
    )
}

const AppDigitalClock = () =>{
    const [time, setTime] = useState("00:00:00");
    const [date, setDate] = useState("00/00/0000");
    const [day, setDay] = useState(null);
    const [intervalC, setIntervalC] = useState(0);
    const [isActive,setIsActive] = useState(true);

    const startClockDigital = () => {
        let newI = setInterval(()=>{
            let currentDate = new Date();
            let time = currentDate.toLocaleTimeString();
            let date = currentDate.toLocaleDateString();
            let day = currentDate.getDay();
            setDay(day);
            setDate(date);
            setTime(time);
        },100)
        setIntervalC(newI);
    }

    const stopDigitalClock = () => {
        clearInterval(intervalC);
        setTime("00:00:00");
        setDate("00/00/0000");
        setDay(7);
    }

    function controlClock(){
        if(isActive){
            startClockDigital();
        }else{
            stopDigitalClock();
        }
    }

    return(
        <div id='content-g-dc'>
            <ButtonClock classs={"btn-clock on"} fun={()=>{setIsActive(!isActive),controlClock()}}  />
            <div id='content-digital-clock'>
                <div id='digital-clock'>
                    <div id='window-digital-clock'>
                        <ShowCurrentTime time={time} />
                        <div className='dc-window-second'>
                            <ShowCurrentDate date={date} />
                            <ShowCurrentDay day={day} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDigitalClock;

ButtonClock.propTypes = {
	classs: PropTypes.string,
	fun: PropTypes.func,
}

ShowCurrentDay.propTypes = {
	day: PropTypes.number,
}

ShowCurrentDate.propTypes = {
	date: PropTypes.string,
}

ShowCurrentTime.propTypes = {
	time: PropTypes.string,
}
