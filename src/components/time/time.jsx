import React, {useState} from "react";
import withLayout from "../../hocs/with-layout";
import "./time.scss";
import {ReactComponent as ChevronDownLogo} from "../../img/icons/chevron-down.svg";
import {ReactComponent as UpdateLogo} from "../../img/icons/update.svg";
import {ReactComponent as CloseLogo} from "../../img/icons/close.svg";
import { formatTime } from "../../utils/common";

const Time = ({hours, minutes, seconds}) => {
    const [showTimer, setShowTimer] = useState(true);
    const handleReset = () => {
    }

    return (
        <div className="timer-wrap">
            <div className={`timer-wrap__header ${!showTimer ? 'timer-wrap__header_timer-hiden':''}`}>
                <p>Timer</p>
                <div className="timer-wrap__tools">
                    <ChevronDownLogo className={`timer-wrap__tools_chevron ${!showTimer ? 'timer-wrap__tools_timer-hiden':''}`} onClick={() => setShowTimer(!showTimer)}/>
                    <UpdateLogo onClick={handleReset}/>
                    <CloseLogo/>
                </div>
            </div>
            <div className={`timer ${!showTimer ? 'timer_hiden':''}`}>
                <p className="timer__time">{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</p>
            </div>
        </div>
    )
};

export default withLayout(Time);