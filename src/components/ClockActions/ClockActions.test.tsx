import React from 'react';
import ClockActions from './ClockActions';
import { fireEvent, render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'

describe('ClockActions', () => {
  it('renders without error', () => {
    render(<ClockActions handlePlayPause={() => {}} handleReset={() => {}} />);
  });

  it('should trigger playPause when play pause button is clicked', () => {
    const playPauseSpy = jest.fn();
    const resetSpy = jest.fn();
    const result = render(
      <ClockActions handlePlayPause={playPauseSpy} handleReset={resetSpy} />
    );
    // queryAllByRole wasnt picking up svg elements with a role=button so used dom native
    const buttons = result.container.querySelectorAll('[role="button"]');
    expect(buttons.length).toBe(2);

    fireEvent.click(buttons[0]);
    expect(playPauseSpy).toHaveBeenCalled();
    expect(resetSpy).not.toHaveBeenCalled();
  });

  it('should trigger reset when reset is clicked', () => {
    const playPauseSpy = jest.fn();
    const resetSpy = jest.fn();
    const result = render(
      <ClockActions handlePlayPause={playPauseSpy} handleReset={resetSpy} />
    );
    // queryAllByRole wasnt picking up svg elements with a role=button so used dom native
    const buttons = result.container.querySelectorAll('[role="button"]');
    expect(buttons.length).toBe(2);

    fireEvent.click(buttons[1]);
    expect(resetSpy).toHaveBeenCalled();
    expect(playPauseSpy).not.toHaveBeenCalled();
  });
});
