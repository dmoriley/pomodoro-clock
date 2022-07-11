import { render, screen, fireEvent, act } from '@testing-library/react';
import { UsePomodoroExample } from './UsePomodoro.example';
import {
  defaultBreakLength,
  defaultSessionLength,
  defaultTime,
  defaultType,
} from '../../services/pomodoro/pomodoro';

describe('usePomodoro', () => {
  it('should allow you to play, pause and reset', () => {
    jest.useFakeTimers();
    render(<UsePomodoroExample />);
    const power = screen.getByText(/power/i);
    const time = screen.getByText(/time/i);
    const sessionLength = screen.getByText(/sessionLength/i);
    const breakLength = screen.getByText(/breakLength/i);
    const status = screen.getByText(/status/i);
    const reset = screen.getByText<HTMLButtonElement>(/reset/i);
    const playPause = screen.getByText<HTMLButtonElement>(/playpause/i);

    // expect initial state
    expect(power).toHaveTextContent('power: false');
    expect(time).toHaveTextContent(`time: ${defaultTime}`);
    expect(sessionLength).toHaveTextContent(
      `sessionLength: ${defaultSessionLength}`
    );
    expect(breakLength).toHaveTextContent(`breakLength: ${defaultBreakLength}`);
    expect(status).toHaveTextContent(`status: ${defaultType}`);

    // expect power to be on when play
    fireEvent.click(playPause);
    expect(power).toHaveTextContent('power: true');

    // simulate the advance of time
    act(() => {
      // need act cause it will update the component
      jest.advanceTimersByTime(10 * 1000);
    });
    // time should have changed and not be the default anymore
    expect(time).not.toHaveTextContent(`time: ${defaultTime}`);

    // should pause the timer
    const timeBeforePause = time.innerHTML;
    fireEvent.click(playPause);
    expect(power).toHaveTextContent('power: false');
    // simulate advance of time
    act(() => {
      jest.advanceTimersByTime(10 * 1000);
    });
    expect(time).toHaveTextContent(timeBeforePause);

    // hit reset and expect default values;
    fireEvent.click(reset);
    expect(power).toHaveTextContent('power: false');
    expect(time).toHaveTextContent(`time: ${defaultTime}`);
    expect(sessionLength).toHaveTextContent(
      `sessionLength: ${defaultSessionLength}`
    );
    expect(breakLength).toHaveTextContent(`breakLength: ${defaultBreakLength}`);
    expect(status).toHaveTextContent(`status: ${defaultType}`);

    jest.useRealTimers();
  });

  it('should increment and decrement session and break', () => {
    render(<UsePomodoroExample />);
    const sessionLength = screen.getByText(/sessionLength/i);
    const breakLength = screen.getByText(/breakLength/i);
    const sessionDecrement =
      screen.getByText<HTMLButtonElement>(/sessionDecrement/i);
    const sessionIncrement =
      screen.getByText<HTMLButtonElement>(/sessionIncrement/i);
    const breakDecrement =
      screen.getByText<HTMLButtonElement>(/breakDecrement/i);
    const breakIncrement =
      screen.getByText<HTMLButtonElement>(/breakIncrement/i);

    // session
    fireEvent.click(sessionDecrement);
    expect(sessionLength).toHaveTextContent(
      `sessionLength: ${defaultSessionLength - 1}`
    );
    fireEvent.click(sessionIncrement);
    expect(sessionLength).toHaveTextContent(
      `sessionLength: ${defaultSessionLength}`
    );

    // break
    fireEvent.click(breakDecrement);
    expect(breakLength).toHaveTextContent(
      `breakLength: ${defaultBreakLength - 1}`
    );
    fireEvent.click(breakIncrement);
    expect(breakLength).toHaveTextContent(`breakLength: ${defaultBreakLength}`);
  });
});
