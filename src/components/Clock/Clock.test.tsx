import React from 'react';
import Clock from './Clock';
import { render, screen } from '@testing-library/react';
import { SessionType } from '../../services/pomodoro';

describe('Clock', () => {
  it('renders without error', () => {
    render(<Clock time={120} status={SessionType.session} power={false} />);
  });

  it('should match snapshot when off', () => {
    const { container } = render(
      <Clock time={120} status={SessionType.session} power={false} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot when on', () => {
    const { container } = render(
      <Clock time={120} status={SessionType.session} power={true} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot when status is break', () => {
    const { container } = render(
      <Clock time={120} status={SessionType.break} power={true} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
