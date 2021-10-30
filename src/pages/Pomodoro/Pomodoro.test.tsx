import React from 'react';
import Pomodoro from './Pomodoro';
import { render } from '@testing-library/react';

jest.mock('../../components/ClockContainer/ClockContainer.tsx', () => {
  return {
    __esModule: true,
    default: () => <div>ClockContainerMock</div>,
  };
});

describe('Pomodoro', () => {
  it('renders without error', () => {
    const { container } = render(<Pomodoro />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
