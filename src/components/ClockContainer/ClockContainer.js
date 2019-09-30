import React from 'react';
import PropTypes from 'prop-types';
import styles from './ClockContainer.module.scss';
import Clock from '../Clock';

const ClockContainer = props => {
  return (
    <div className={styles.root}>
      <div className={styles.settings}>
        <div>break length</div>
        <div>session length</div>
      </div>
      <Clock />
      <div>buttons</div>
    </div>
  );
};

// ClockContainer.defaultProps = {

// };

// ClockContainer.propTypes = {

// };

export default ClockContainer;