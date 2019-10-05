import React from 'react';
import PropTypes from 'prop-types';
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClockActions = props => {
  return (
    <div>
      <span onClick={props.handlePlayPause}>
        <FontAwesomeIcon icon={faPlay} className="icon"/>
        <FontAwesomeIcon icon={faPause} className="icon"/>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faRedo} className="icon" onClick={props.handleReset}/>
    </div>
  );
};

ClockActions.propTypes = {
  handlePlayPause: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired
};

export default ClockActions;