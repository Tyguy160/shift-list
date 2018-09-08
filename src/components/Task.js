import React, { Component } from 'react';

function selectText(e) {
  e.target.select();
}

function Task(props) {
    return (
      <form className="task" onSubmit={(e) => e.preventDefault()}>
        <input
          type="checkbox"
          className="checkbox"
          checked={(props.taskStatus) ? props.taskStatus : false}
          onChange={(e) => props.updateTaskStatus(e,props.taskID)}/>
        <input
          type="text-field"
          value={(props.taskDescription) ? props.taskDescription : `Enter task here...`}
          defaultValue={`Enter task here...`}
          onFocus={(e) => selectText(e)}
          className="taskDescription"
          onChange={(e) => props.updateTaskDescription(e, props.taskID)}
        />
      </form>
    );
}

export default Task;