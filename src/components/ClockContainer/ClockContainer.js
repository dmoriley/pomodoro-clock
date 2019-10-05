import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ClockContainer.module.scss';
import { Clock, ClockActions, ClockSetting } from '../index';

export const ClockState = {
  off: 1,
  pause: 2,
  session: 3,
  break: 4
};

const ClockContainer = props => {

  let interval; // interval to be set and cleared;
  const defaultBreakLength = 5;
  const defaultSessionLength = 20;

  const [breakLength, setBreakLength] = useState(defaultBreakLength);
  const [sessionLength, setSessionLength] = useState(defaultSessionLength);
  const [time, setTime] = useState(defaultSessionLength * 60);
  const [status, setStatus] = useState(ClockState.off);

  // handle play should change the border color of the clock to red
  // create and import function that formats milliseconds into the format mm:ss

  function handleBreakIncrement() {
    if(status === ClockState.off || status === ClockState.pause) {
      setBreakLength(b => b + 1)
    }
  }

  function handleBreakDecrement() {
    if(status === ClockState.off || status === ClockState.pause) {
      setBreakLength(b => b !== 0 ? b - 1 : 0)
    }
  }

  function handleSessionIncrement() {
    if(status === ClockState.off || status === ClockState.pause) {
      setSessionLength(s => s + 1);
      setTime((sessionLength + 1) * 60)
    } 
  }

  function handleSessionDecrement() {
    if(status === ClockState.off || status === ClockState.pause) {
      setSessionLength(s => s !== 1 ? s - 1 : 1)
      setTime((sessionLength !== 1 ? sessionLength - 1 : 1) * 60)
    } 
  }

  function handleReset() {
    clearInterval(interval);
    setStatus(ClockState.off);
    setSessionLength(defaultSessionLength);
    setBreakLength(defaultBreakLength);
    setTime(defaultSessionLength * 60);
  }

  function handlePlayPause() {
    // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
    
    
    // if(status === ClockState.off) {
    //   setStatus(ClockState.session);
    //   setInterval(() => {
    //     console.log('test')
    //     setTime(t => t - 1);
    //   }, 1000);
    // } 
    // else { //pause
    //   // clearInterval(interval);
    // }
  }

  return (
    <div className={styles.root}>
      <div className={styles.settings}>
        <ClockSetting 
          title="break length" 
          setting={breakLength} 
          handleDecrement={handleBreakDecrement}
          handleIncrement={handleBreakIncrement}
        />
        <ClockSetting 
          title="session length"
          setting={sessionLength} 
          handleDecrement={handleSessionDecrement}
          handleIncrement={handleSessionIncrement}
        />
      </div>
      <Clock time={time} status={status}/>
      <ClockActions handleReset={handleReset} handlePlayPause={handlePlayPause}/>
    </div>
  );
};

export default ClockContainer;