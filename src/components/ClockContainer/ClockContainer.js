import React, { useState, useRef } from 'react';
import styles from './ClockContainer.module.scss';
import { Clock, ClockActions, ClockSetting } from '../index';
import { timer } from '../../services';

export const ClockState = {
  session: 1,
  break: 2,
};

const ClockContainer = props => {

  const defaultBreakLength = 5;
  const defaultSessionLength = 20;

  const [breakLength, setBreakLength] = useState(defaultBreakLength);
  const [sessionLength, setSessionLength] = useState(defaultSessionLength);
  const [time, setTime] = useState(defaultSessionLength * 60); // time displayed on the clock
  const [power, setPower] = useState(false);
  
  // when passing state to functions the lastest isnt always available because of javascript closures
  // which is why I used a ref for this one, the state is accessible through the current property
  const status = useRef(ClockState.session); 

  function handleBreakIncrement() {
    if(!timer.isOn() && breakLength < 60) {
      setBreakLength(b => b + 1)
    }
  }

  function handleBreakDecrement() {
    if(!timer.isOn() && breakLength > 1) {
      setBreakLength(b => b !== 0 ? b - 1 : 0)
    }
  }

  function handleSessionIncrement() {
    if(!timer.isOn() && sessionLength < 60) {
      setSessionLength(s => s + 1);
      setTime((sessionLength + 1) * 60)
    } 
  }

  function handleSessionDecrement() {
    if(!timer.isOn() && sessionLength > 1) {
      setSessionLength(s => s - 1)
      setTime((sessionLength - 1) * 60)
    } 
  }

  function handleReset() {
    timer.pause();
    setPower(false);
    status.current = ClockState.session;
    setSessionLength(defaultSessionLength);
    setBreakLength(defaultBreakLength);
    setTime(defaultSessionLength * 60);
  }

  function handlePlayPause() {
    if(!timer.isOn()) {
      setPower(true);
      timer.start(() => setTime(t => {
        // if its not 0 decrement like normal
        if(t !== 0 ) {
          return t - 1;
        } else if (status.current === ClockState.session) {
          // at this point we know its 0, so determine were status is was in the change it accordingly
          new Audio('./sounds/success.mp3').play();
          status.current = ClockState.break;
          return breakLength * 60;
        } else {
          new Audio('./sounds/doubleBeep.mp3').play();
          status.current = ClockState.session;
          return sessionLength * 60;
        }
      }));
    } 
    else { //pause, so turn off and pause timer
      setPower(false);
      timer.pause();
    }
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
      <Clock time={time} status={status.current} power={power}/>
      <ClockActions handleReset={handleReset} handlePlayPause={handlePlayPause}/>
    </div>
  );
};

export default ClockContainer;