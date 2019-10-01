import React from 'react';
import PropTypes from 'prop-types';
import styles from './ClockContainer.module.scss';
import { Clock, ClockActions, ClockSetting } from '../index';

const ClockContainer = props => {
  return (
    <div className={styles.root}>
      <div className={styles.settings}>
        <ClockSetting title="break length"/>
        <ClockSetting title="session length"/>
      </div>
      <Clock />
      <ClockActions />
    </div>
  );
};

export default ClockContainer;