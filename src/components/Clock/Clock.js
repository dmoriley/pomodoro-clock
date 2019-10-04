import React from 'react';
import PropTypes from 'prop-types';
import styles from './Clock.module.scss';
import {time} from '../../services';

const Clock = props => {
  
  return (
    <div className={styles.root}>
      <h2>Session</h2>
      <p className={styles.time}>{time.formatSeconds(25 * 60)}</p>
    </div>
  );
};

Clock.defaultProps = {

};

Clock.propTypes = {

};

export default Clock;