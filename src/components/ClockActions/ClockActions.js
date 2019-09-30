import React from 'react';
import PropTypes from 'prop-types';
import styles from './ClockActions.module.scss';
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClockActions = props => {
  return (
    <div>
      <span>
        <FontAwesomeIcon icon={faPlay}/>
        <FontAwesomeIcon icon={faPause}/>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faRedo}/>
    </div>
  );
};

ClockActions.defaultProps = {

};

ClockActions.propTypes = {

};

export default ClockActions;