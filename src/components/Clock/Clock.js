import React from 'react';
import PropTypes from 'prop-types';
import styles from './Clock.module.scss';
import {time as timeFormat} from '../../services';
import { ClockState } from '../ClockContainer';

const Clock = props => {
  
  return (
    <div className={styles.root}>
      <h2>Session</h2>
      <p className={styles.time}>{timeFormat.formatSeconds(props.time)}</p>
    </div>
  );
};

Clock.defaultProps = {

};

Clock.propTypes = {
  time: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired
};

export default Clock;