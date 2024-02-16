import './digital.css'
import React, {useState, useEffect} from 'react';

const DigitalClock = () => {
    const [time , setTime] = useState(new Date());


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        },1000)
    }, [])



    const handleTime = () => {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 || 12;
        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        return `${hours}:${minutes}:${seconds} ${ampm}`;
    }


    return ( 
        <div className="clock-container">
            <h2 id='times'>{handleTime()}</h2>
        </div>
     );
}
 
export default DigitalClock;