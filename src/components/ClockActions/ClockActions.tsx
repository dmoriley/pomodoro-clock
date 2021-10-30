import React from 'react';
import { faPlay, faPause, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IProps = {
  handlePlayPause: () => void;
  handleReset: () => void;
};

const ClockActions: React.FC<IProps> = ({ handlePlayPause, handleReset }) => {
  return (
    <div>
      <span role="button" onClick={handlePlayPause}>
        <FontAwesomeIcon icon={faPlay} className="icon" />
        <FontAwesomeIcon icon={faPause} className="icon" />
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon
        role="button"
        icon={faRedo}
        className="icon"
        onClick={handleReset}
      />
    </div>
  );
};

export default ClockActions;
