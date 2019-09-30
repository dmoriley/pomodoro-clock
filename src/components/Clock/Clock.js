import React from 'react';
import PropTypes from 'prop-types';
import styles from './Clock.module.scss';

const Clock = props => {
  return (
    <div className={styles.root}>
      <h2>Session</h2>
      <p className={styles.time}>25:00</p>
    </div>
  );
};

Clock.defaultProps = {

};

Clock.propTypes = {

};

export default Clock;