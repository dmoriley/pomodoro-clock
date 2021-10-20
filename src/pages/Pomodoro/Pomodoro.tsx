import React from 'react';
import styles from './Pomodoro.module.scss';
import { ClockContainer } from '../../components/index';

const Pomodoro: React.FC = () => {
  return (
    <div className={styles.root}>
      <section className={styles.box}>
        <header>
          <h1>Pomodoro Clock</h1>
        </header>
        <ClockContainer />
        <footer>
          <p>
            Designed and Coded by
            <br />
            <span>David O'Riley</span>
          </p>
        </footer>
      </section>
    </div>
  );
};

export default Pomodoro;
