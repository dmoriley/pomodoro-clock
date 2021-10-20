import React from 'react';
import styles from './Clock.module.scss';
import { time as timeFormat } from '../../services';
import { SessionType } from '../../services/pomodoro';

type IProps = {
  time: number;
  status: number;
  power: boolean;
};

const Clock: React.FC<IProps> = ({ time, status, power }) => {
  return (
    <div
      className={`${styles.root} ${
        !power
          ? styles.off
          : status === SessionType.session
          ? styles.session
          : styles.break
      }`}
    >
      {status === SessionType.session ? <h2>Session</h2> : <h2>Break</h2>}

      <p className={styles.time}>{timeFormat.formatSeconds(time)}</p>
    </div>
  );
};

export default Clock;
