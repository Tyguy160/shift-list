import React from "react";
import "../styles/Task.css";
import "pretty-checkbox";
import "../../node_modules/mdi/css/materialdesignicons.css";
import Textarea from "react-textarea-autosize";

function selectText(e) {
  e.target.select();
}

function Task(props) {
  return (
    <form
      className="task"
      onSubmit={e => {
        e.preventDefault();
        props.addTask();
      }}
    >
      <div className="taskStatus">
        <div className="pretty p-icon p-smooth">
          <input
            type="checkbox"
            className="checkbox"
            checked={props.taskStatus ? props.taskStatus : false}
            onChange={e => props.updateTaskStatus(e, props.taskID)}
          />
          <div className="state p-success">
            <i className="icon mdi mdi-check" />
            <label />
          </div>
        </div>
      </div>
      <Textarea
        className="taskDescription"
        // type="text-area"
        rows="1"
        placeholder="Enter task here…"
        value={props.taskDescription}
        onFocus={e => selectText(e)}
        onKeyPress={e => {
          if (e.which == 13) {
            e.preventDefault();
            props.addTask();
          }
        }}
        onChange={e => props.updateTaskDescription(e, props.taskID)}
      />
    </form>
  );
}

export default Task;
