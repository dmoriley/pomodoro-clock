import React from "react";
import styles from "./ClockContainer.module.scss";
import { Clock, ClockActions, ClockSetting } from "../index";
import usePomodoro from "../../hooks/pomodoro/pomodoro.hook";

const ClockContainer: React.FC = () => {
  const [
    { power, time, sessionLength, breakLength, status },
    reset,
    playPause,
    sessionDecrement,
    sessionIncrement,
    breakDecrement,
    breakIncrement,
    finishEarly,
  ] = usePomodoro();

  return (
    <div className={styles.root}>
      <div className={styles.settings}>
        {!power ? (
          <React.Fragment>
            <ClockSetting
              title="break length"
              setting={breakLength}
              handleDecrement={breakDecrement}
              handleIncrement={breakIncrement}
            />
            <ClockSetting
              title="session length"
              setting={sessionLength}
              handleDecrement={sessionDecrement}
              handleIncrement={sessionIncrement}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="button"
              className="icon icon-l"
              onClick={finishEarly}
            >
              <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
            </svg>
          </React.Fragment>
        )}
      </div>
      <Clock time={time} status={status} power={power} />
      <ClockActions handleReset={reset} handlePlayPause={playPause} />
    </div>
  );
};

export default ClockContainer;
