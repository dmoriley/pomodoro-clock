import React from 'react';
import styles from './ClockSetting.module.scss';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IProps = {
  title: string;
  setting: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
};

const ClockSetting: React.FC<IProps> = ({
  title,
  setting,
  handleDecrement,
  handleIncrement,
}) => {
  return (
    <div className={styles.root}>
      <h3>{title}</h3>
      <div>
        <FontAwesomeIcon
          className="icon"
          icon={faArrowDown}
          onClick={handleDecrement}
        />
        &nbsp;<span className={styles.setting}>{setting}</span>&nbsp;
        <FontAwesomeIcon
          icon={faArrowUp}
          className="icon"
          onClick={handleIncrement}
        />
      </div>
    </div>
  );
};

export default ClockSetting;
