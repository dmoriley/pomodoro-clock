import React from 'react';
import styles from './ClockContainer.module.scss';
import { Clock, ClockActions, ClockSetting } from '../index';
import usePomodoro from '../../hooks/pomodoro/pomodoro.hook';

const ClockContainer = (props) => {
  const [
    { power, time, sessionLength, breakLength, status },
    reset,
    playPause,
    sessionDecrement,
    sessionIncrement,
    breakDecrement,
    breakIncrement,
  ] = usePomodoro();

  return (
    <div className={styles.root}>
      <div className={styles.settings}>
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
      </div>
      <Clock time={time} status={status} power={power} />
      <ClockActions handleReset={reset} handlePlayPause={playPause} />
    </div>
  );
};

export default ClockContainer;
