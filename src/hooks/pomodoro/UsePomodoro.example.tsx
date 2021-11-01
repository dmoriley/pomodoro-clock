import React from 'react';
import usePomodoro from './pomodoro.hook';

// example component used for unit testing
function UsePomodoroExample() {
  const [
    { power, time, sessionLength, breakLength, status },
    reset,
    playPause,
    sessionDecrement,
    sessionIncrement,
    breakDecrement,
    breakIncrement,
  ] = usePomodoro();

  return (
    <div>
      <p>power: {String(power)}</p>
      <p>time: {time}</p>
      <p>sessionLength: {sessionLength}</p>
      <p>breakLength: {breakLength}</p>
      <p>status: {status}</p>
      <br />
      <button onClick={reset}>Reset</button>
      <button onClick={playPause}>playpause</button>
      <button onClick={sessionDecrement}>sessionDecrement</button>
      <button onClick={sessionIncrement}>sessionIncrement</button>
      <button onClick={breakDecrement}>breakDecrement</button>
      <button onClick={breakIncrement}>breakIncrement</button>
    </div>
  );
}

export { UsePomodoroExample };
