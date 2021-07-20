import React from 'react';
import './App.css';
import { Pomodoro } from './components/Pomodoro/Pomodoro';

export function App(): JSX.Element {
  return (
    <div className='App'>
      <Pomodoro />
    </div>
  );
}
