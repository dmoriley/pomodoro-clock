import React from 'react';
import PropTypes from 'prop-types';
import styles from './ClockContainer.module.scss';
import Clock from '../Clock';
import ClockActions from '../ClockActions';

const ClockContainer = props => {
  return (
    <div className={styles.root}>
      <div className={styles.settings}>
        <div>break length</div>
        <div>session length</div>
      </div>
      <Clock />
      <ClockActions />
    </div>
  );
};

export default ClockContainer;