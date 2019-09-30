import React from 'react';
import Pomodoro from './Pomodoro';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Pomodoro', () => {
   it('renders without error', () => {
      const {container} = render(<Pomodoro/>);
      expect(container.firstChild).toMatchSnapshot();
   });
});