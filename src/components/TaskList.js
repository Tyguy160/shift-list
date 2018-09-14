import React from "react";
import Task from "./Task";
import "../styles/TaskList.css";

function TaskList(props) {
  return (
    <div className="taskContainer">
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
            deleteTask={props.deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
