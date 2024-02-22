import React from "react";
import styles from "./ClockSetting.module.scss";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="icon"
          role="button"
          onClick={handleDecrement}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
        &nbsp;<span className={styles.setting}>{setting}</span>&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="icon"
          role="button"
          onClick={handleIncrement}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </div>
    </div>
  );
};

export default ClockSetting;
