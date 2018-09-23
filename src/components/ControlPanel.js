import React from "react";
import "../../node_modules/mdi/css/materialdesignicons.css";
import "../styles/ControlPanel.css";

function ControlPanel(props) {
  return (
    <div className="controlPanel">
      <button
        onClick={e => props.addTask(e)}
        className="addTask controlPanelButton"
      >
        <i className="icon mdi mdi-plus mdi-24px" />
      </button>
      <button
        className="controlPanelButton shiftTasks"
        onClick={() => props.shiftIncomplete()}
      >
        <i className="icon mdi mdi-arrow-collapse-right mdi-24px" />
      </button>
      {/* Future improvement: Add button to print all tasks and
      button to download a .txt file with list of tasks */}
      {/* <button
        className="controlPanelButton printTasks"
        onClick={e => console.log(e)}
      >
        <i className="icon mdi mdi-printer mdi-24px" />
      </button>
      <button
        className="controlPanelButton downloadTasks"
        onClick={e => console.log(e)}
      >
        <i className="icon mdi mdi-download mdi-24px" />
      </button> */}
    </div>
  );
}

export default ControlPanel;
