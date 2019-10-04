import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ClockContainer.module.scss';
import { Clock, ClockActions, ClockSetting } from '../index';

const ClockContainer = props => {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(20);

  // handle play should change the border color of the clock to red
  // create and import function that formats milliseconds into the format mm:ss
  return (
    <div className={styles.root}>
      <div className={styles.settings}>
        <ClockSetting 
          title="break length" 
          setting={breakLength} 
          handleDecrement={() => setBreakLength(breakLength !== 0 ? breakLength - 1 : 0)}
          handleIncrement={() => setBreakLength(breakLength + 1)}
        />
        <ClockSetting 
          title="session length"
          setting={sessionLength} 
          handleDecrement={() => setSessionLength(sessionLength !== 0 ? sessionLength - 1 : 0)}
          handleIncrement={() => setSessionLength(sessionLength + 1)}
        />
      </div>
      <Clock />
      <ClockActions />
    </div>
  );
};

export default ClockContainer;