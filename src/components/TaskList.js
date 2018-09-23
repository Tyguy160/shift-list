import React from "react";
import Task from "./Task";
import "../styles/TaskList.css";
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
function TaskList(props) {
  const options = {
    suppressScrollX: true,
  }
  return (
    <div className="taskContainer">
      <div className="taskList">
      <PerfectScrollbar option={options} supressScrollY={true}>
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
    </PerfectScrollbar>
      </div>
    </div>
  );
}

export default TaskList;
