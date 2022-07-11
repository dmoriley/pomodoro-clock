import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { Pomodoro } from './pages/index';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<Pomodoro />);
