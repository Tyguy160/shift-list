import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPrint,
  faStepForward,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faPrint,
  faStepForward,
  faDownload,
);
function ControlPanel(props) {
  return (
    <div>
      <button className="controlPanelButton" onClick={e => console.log(e)}>
        <FontAwesomeIcon icon="step-forward" />
      </button>
      <button className="controlPanelButton" onClick={e => console.log(e)}>
        <FontAwesomeIcon icon="print" />
      </button>
      <button className="controlPanelButton" onClick={e => console.log(e)}>
        <FontAwesomeIcon icon="download" />
      </button>
    </div>
  );
}

export default ControlPanel;