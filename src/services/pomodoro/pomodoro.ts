import { BehaviorSubject } from 'rxjs';

export const SessionType = {
  session: 1,
  break: 2,
};

export const defaultBreakLength = 5; // minutes
export const defaultSessionLength = 20; //minutes
export const defaultTime = defaultSessionLength * 60;
export const defaultType = SessionType.session;

const createPomodoro = () => {
  let interval;

  const isOn = new BehaviorSubject(false);
  const type = new BehaviorSubject(defaultType);
  const sessionLength = new BehaviorSubject(defaultSessionLength);
  const breakLength = new BehaviorSubject(defaultBreakLength);
  const time = new BehaviorSubject(defaultTime); // time displayed on the clock

  const start = (callback, delay = 1000) => {
    isOn.next(true);
    interval = setInterval(callback, delay);
  };

  const pause = () => {
    isOn.next(false);
    clearInterval(interval);
  };

  const reset = () => {
    pause();
    type.next(defaultType);
    sessionLength.next(defaultSessionLength);
    breakLength.next(defaultBreakLength);
    time.next(defaultTime);
  };

  const playPause = () => {
    if (!isOn.value) {
      isOn.next(true);
      start(() => {
        if (time.value !== 0) {
          time.next(time.value - 1);
        } else if (type.value === SessionType.session) {
          new Audio('./sounds/success.mp3').play();
          type.next(SessionType.break);
          time.next(breakLength.value * 60);
        } else {
          new Audio('./sounds/doubleBeep.mp3').play();
          type.next(SessionType.session);
          time.next(sessionLength.value * 60);
        }
      });
    } else {
      // pause and turn off timer
      pause();
    }
  };

  const breakIncrement = () => {
    if (!isOn.value && breakLength.value < 60) {
      breakLength.next(breakLength.value + 1);
    }
  };

  const breakDecrement = () => {
    if (!isOn.value && breakLength.value > 1) {
      breakLength.next(breakLength.value - 1);
    }
  };

  const sessionIncrement = () => {
    if (!isOn.value && sessionLength.value < 60) {
      sessionLength.next(sessionLength.value + 1);
      time.next(sessionLength.value * 60);
    }
  };

  const sessionDecrement = () => {
    if (!isOn.value && sessionLength.value > 1) {
      sessionLength.next(sessionLength.value - 1);
      time.next(sessionLength.value * 60);
    }
  };

  return {
    isOn$: isOn.asObservable(),
    getIsOn() {
      return isOn.value;
    },
    type$: type.asObservable(),
    getType() {
      return type.value;
    },
    sessionLength$: sessionLength.asObservable(),
    getSessionLength() {
      return sessionLength.value;
    },
    breakLength$: breakLength.asObservable(),
    getBreakLength() {
      return breakLength.value;
    },
    time$: time.asObservable(),
    getTime() {
      return time.value;
    },
    reset,
    playPause,
    breakIncrement,
    breakDecrement,
    sessionIncrement,
    sessionDecrement,
  };
};

const singleton = createPomodoro();
Object.freeze(singleton);

export default singleton;
