import React from 'react';
import Task from './Task'

function TaskList(props) {
    return (
      <div>
        {props.list[props.currentDate].map((task, index) => (
          <Task
          key={index}
          taskID={index}
          taskDescription={task.taskDescription}
          taskStatus={task.taskStatus}
          updateTaskStatus={props.updateTaskStatus}
          updateTaskDescription={props.updateTaskDescription}
          />

        ))}
        <button onClick={() => props.addTask()} className="addTask">
          +
        </button>
      </div>
    );
}

export default TaskList;