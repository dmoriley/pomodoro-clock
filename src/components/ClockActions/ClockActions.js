import React from 'react';
import PropTypes from 'prop-types';
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClockActions = props => {
  return (
    <div>
      <button id="start_stop" onClick={props.handlePlayPause} className="icon">
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faPause}/>
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={props.handleReset} id="reset" className="icon">
        <FontAwesomeIcon icon={faRedo} />
      </button>
    </div>
  );
};

ClockActions.propTypes = {
  handlePlayPause: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired
};

export default ClockActions;