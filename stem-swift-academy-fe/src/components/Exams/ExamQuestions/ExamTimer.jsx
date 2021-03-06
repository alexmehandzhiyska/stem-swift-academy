import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import { useState } from 'react';

const ExamTimer = ({ initialTime, setHasEnded }) => {
    const [time, setTime] = useState(initialTime);
    const [duration, setDuration] = useState(initialTime);

    const updateTime = (timeObj) => {
        setTime(timeObj.duration - timeObj.time);

        if (timeObj.duration - timeObj.time <= 0) {
            setHasEnded(true);
        }
    }

    return (
        <section>
            <Timer active={true} duration={duration} onTimeUpdate={(timeObj) => updateTime(timeObj)} />
            <Timecode time={time} />
        </section>
    );
}

export default ExamTimer;