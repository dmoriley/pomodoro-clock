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
        <FontAwesomeIcon className="icon" icon={faArrowDown} onClick={props.handleDecrement}/>
        &nbsp;<span className={styles.setting}>{props.setting}</span>&nbsp;
        <FontAwesomeIcon icon={faArrowUp} className="icon" onClick={props.handleIncrement}/>
      </div>
    </div>
  );
};

ClockSetting.propTypes = {
  title: PropTypes.string.isRequired,
  setting: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

export default ClockSetting;