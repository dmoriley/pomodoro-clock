import { useState, useEffect } from 'react';
import { pomodoro } from '../../services';

const usePomodoro = (): any[] => {
  const [power, setPower] = useState(false);
  const [time, setTime] = useState(0);
  const [sessionLength, setSessionLength] = useState(0);
  const [breakLength, setBreakLength] = useState(0);
  const [status, setStatus] = useState<number>(0);

  useEffect(() => {
    const subscriptions = [
      pomodoro.time$.subscribe((t) => setTime(t)),
      pomodoro.type$.subscribe((t) => setStatus(t)),
      pomodoro.isOn$.subscribe((p) => setPower(p)),
      pomodoro.sessionLength$.subscribe((sl) => setSessionLength(sl)),
      pomodoro.breakLength$.subscribe((bl) => setBreakLength(bl)),
    ];

    return () => {
      subscriptions.forEach((it) => it.unsubscribe());
    };
  }, []);

  return [
    { power, time, sessionLength, breakLength, status },
    pomodoro.reset,
    pomodoro.playPause,
    pomodoro.sessionDecrement,
    pomodoro.sessionIncrement,
    pomodoro.breakDecrement,
    pomodoro.breakIncrement,
  ];
};

export default usePomodoro;
