import React, { useState, useEffect } from 'react';
import styles from './ClockContainer.module.scss';
import { Clock, ClockActions, ClockSetting } from '../index';
import { pomodoro } from '../../services';

const ClockContainer = (props) => {
  const [power, setPower] = useState(false);
  const [time, setTime] = useState(0);
  const [sessionLength, setSessionLength] = useState(0);
  const [breakLength, setBreakLength] = useState(0);
  const [status, setStatus] = useState(undefined);

  useEffect(() => {
    const subscriptions = [
      pomodoro.time$.subscribe((t) => setTime(t)),
      pomodoro.type$.subscribe((t) => setStatus(t)),
      pomodoro.isOn$.subscribe((p) => setPower(p)),
      pomodoro.sessionLength$.subscribe((sl) => setSessionLength(sl)),
      pomodoro.breakLength$.subscribe((bl) => setBreakLength(bl)),
    ];

    return () => {
      subscriptions.forEach((it) => it.unsubscribe());
    };
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.settings}>
        <ClockSetting
          title="break length"
          setting={breakLength}
          handleDecrement={pomodoro.breakDecrement}
          handleIncrement={pomodoro.breakIncrement}
        />
        <ClockSetting
          title="session length"
          setting={sessionLength}
          handleDecrement={pomodoro.sessionDecrement}
          handleIncrement={pomodoro.sessionIncrement}
        />
      </div>
      <Clock time={time} status={status} power={power} />
      <ClockActions
        handleReset={pomodoro.reset}
        handlePlayPause={pomodoro.playPause}
      />
    </div>
  );
};

export default ClockContainer;
