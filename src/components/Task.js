import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
    };
  }

  selectText(e) {
    e.target.select();
  }

  render() {
    return (
      <form className="task" id={this.props.taskID}>
        <input type="checkbox"  className="checkbox" onChange={(e) =>this.props.updateTaskStatus(e,this.props.taskID)}/>
        <input
          type="text-field"
          defaultValue="Enter task here..."
          onFocus={this.selectText}
          className="taskDescription"
          onChange={(e) =>this.props.updateTaskDescription(e, this.props.taskID)}
        />
      </form>
    );
  }
}

export default Task;