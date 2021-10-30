import React from 'react';
import ClockContainer from './ClockContainer';
import { render } from '@testing-library/react';

describe('ClockContainer', () => {
  it('renders without error and match snapshot', () => {
    const { container } = render(<ClockContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
