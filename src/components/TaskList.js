import React from "react";
import Task from "./Task";

function TaskList(props) {
  return (
    <div className="taskList">
      {props.list[props.currentDate].map((task, index) => (
        <Task
          key={index}
          taskID={index}
          taskDescription={task.task}
          taskStatus={task.status}
          updateTaskStatus={props.updateTaskStatus}
          updateTaskDescription={props.updateTaskDescription}
          addTask={props.addTask}
        />
      ))}
      <button onClick={() => props.addTask()} className="addTask">
        +
      </button>
    </div>
  );
}

export default TaskList;
