import React from 'react';
import PropTypes from 'prop-types';
import styles from './ClockSetting.module.scss';
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClockSetting = props => {
  return (
    <div className={styles.root}>
      <h3>{props.title}</h3>
      <div>
        <FontAwesomeIcon className="icon" icon={faArrowDown} />
        &nbsp;<span className={styles.setting}>5</span>&nbsp;
        <FontAwesomeIcon icon={faArrowUp} className="icon" />
      </div>
    </div>
  );
};

ClockSetting.propTypes = {
  title: PropTypes.string.isRequired
};

export default ClockSetting;