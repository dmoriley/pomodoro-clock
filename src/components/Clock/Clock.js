import React from 'react';
import PropTypes from 'prop-types';
import styles from './Clock.module.scss';
import {time as timeFormat} from '../../services';
import { ClockState } from '../ClockContainer';

const Clock = ({time, status, power}) => {
  
  return (
    <div className={`${styles.root} ${!power ? styles.off : status === ClockState.session ? styles.session : styles.break }`}>
      {
        status === ClockState.session 
        ? <h2>Session</h2>
        : <h2>Break</h2>
      }
      
      <p className={styles.time}>{timeFormat.formatSeconds(time)}</p>
    </div>
  );
};

Clock.propTypes = {
  time: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
  power: PropTypes.bool.isRequired
};

export default Clock;