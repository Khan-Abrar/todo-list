import React, { Component } from "react";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = { isEditing: false, task: this.props.task };
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  toggleForm(evt) {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updatedTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li className="Todo-task">{this.props.task}</li>

          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i class="fas fa-pen" />
            </button>
            <button onClick={this.handleRemove}>
              <i class="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
