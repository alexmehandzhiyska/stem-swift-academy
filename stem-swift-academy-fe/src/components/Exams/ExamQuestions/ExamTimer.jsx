import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import { useState } from 'react';

const ExamTimer = ({ initialTime }) => {
    const [time, setTime] = useState(initialTime);
    const [duration, setDuration] = useState(initialTime);

    return (
        <section>
            <Timer active={true} duration={duration} onStart={() => console.log('started')} onTimeUpdate={(timeObj) => setTime(timeObj.duration - timeObj.time)} />
            <Timecode time={time} />
        </section>
    );
}

export default ExamTimer;