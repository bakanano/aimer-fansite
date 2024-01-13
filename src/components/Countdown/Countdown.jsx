import React, { useEffect, useState } from 'react';
import TimeDisplay from "../TimeDisplay/TimeDisplay";
import "./Countdown.css";

export default function Countdown() {
    const releaseDate = new Date(new Date().getFullYear(), 8, 7);
    const [timeSince, setTimeSince] = useState(getTimeSince);

    function getTimeSince() {
        const currentDate = new Date();
        const difference = (releaseDate - currentDate);

        //one day,hour,minutes,seconds in milliseconds
        const dayInMilliseconds = 24 * 60 * 60 * 1000;
        const hourInMilliseconds = 60 * 60 * 1000;
        const minInMilliseconds = 60 * 1000;

        const days = Math.floor(difference / dayInMilliseconds);
        const hours = Math.floor((difference % dayInMilliseconds) / hourInMilliseconds);
        const minutes = Math.floor((difference % hourInMilliseconds) / minInMilliseconds);
        const seconds = Math.floor((difference % minInMilliseconds) / 1000);

        return {days, hours, minutes, seconds};
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setTimeSince(getTimeSince());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [getTimeSince])

    return (
        <div className=" countdownDisplay info-card">
            <h4>Days until Aimer's birthday...</h4>
            <div className="countdown">
                <TimeDisplay value={timeSince.days} type={'Days'}/>
                <TimeDisplay value={timeSince.hours} type={'Hours'}/>
                <TimeDisplay value={timeSince.minutes} type={'Mins'}/>
                <TimeDisplay value={timeSince.seconds} type={'Seconds'}/>
            </div>
        </div>
    );
}
