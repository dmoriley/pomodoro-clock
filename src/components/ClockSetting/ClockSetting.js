import React from 'react';
import PropTypes from 'prop-types';
import styles from './ClockSetting.module.scss';
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClockSetting = ({breakk, session}) => {

  return (
    <React.Fragment>
      <div>
        <h3 id="break-label">Break Length</h3>
        <div>
          <button onClick={breakk.decrement} id="break-decrement" className="icon">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          &nbsp;<span className={styles.setting} id="break-length">{breakk.length}</span>&nbsp;
          <button onClick={breakk.increment} id="break-increment" className="icon">
            <FontAwesomeIcon icon={faArrowUp}/>
          </button>
        </div>
      </div>
      <div>
        <h3 id="session-label">Session Length</h3>
        <div>
          <button onClick={session.decrement} id="session-decrement" className="icon">
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          &nbsp;<span className={styles.setting} id="session-length">{session.length}</span>&nbsp;
          <button onClick={session.increment} id="session-increment" className="icon">
            <FontAwesomeIcon icon={faArrowUp}/>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

ClockSetting.propTypes = {
  breakk: PropTypes.shape({
    length: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }),
  session: PropTypes.shape({
    length: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }),
};

export default ClockSetting;