import React from 'react';
import ClockSetting from './ClockSetting';
import { render, screen, fireEvent } from '@testing-library/react';

describe('ClockSetting', () => {
  it('renders without error', () => {
    render(
      <ClockSetting
        title="My title"
        setting={1}
        handleDecrement={() => {}}
        handleIncrement={() => {}}
      />
    );
  });

  it('should render the title correctly', () => {
    render(
      <ClockSetting
        title="My title"
        setting={1}
        handleDecrement={() => {}}
        handleIncrement={() => {}}
      />
    );
    expect(screen.getByText(/my title/i)).toBeTruthy();
  });

  it('should render the setting number correctly', () => {
    render(
      <ClockSetting
        title="My title"
        setting={300}
        handleDecrement={() => {}}
        handleIncrement={() => {}}
      />
    );
    expect(screen.getByText('300')).toBeTruthy();
  });

  it('should call decrement when clicked', () => {
    const decrementSpy = jest.fn();
    const incrementSpy = jest.fn();
    const { container } = render(
      <ClockSetting
        title="My title"
        setting={1}
        handleDecrement={decrementSpy}
        handleIncrement={incrementSpy}
      />
    );

    const buttons = container.querySelectorAll('[role="button"]');
    expect(buttons.length).toBe(2);

    fireEvent.click(buttons[0]);
    expect(decrementSpy).toHaveBeenCalled();
    expect(incrementSpy).not.toHaveBeenCalled();
  });

  it('should call increment when clicked', () => {
    const decrementSpy = jest.fn();
    const incrementSpy = jest.fn();
    const { container } = render(
      <ClockSetting
        title="My title"
        setting={1}
        handleDecrement={decrementSpy}
        handleIncrement={incrementSpy}
      />
    );

    const buttons = container.querySelectorAll('[role="button"]');
    expect(buttons.length).toBe(2);

    fireEvent.click(buttons[1]);
    expect(incrementSpy).toHaveBeenCalled();
    expect(decrementSpy).not.toHaveBeenCalled();
  });
});
