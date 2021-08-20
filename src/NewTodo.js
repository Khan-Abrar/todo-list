import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewTodo.css";

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.task === "") {
      alert("Please enter a todo");
    } else {
      this.props.createTodo({ ...this.state, id: uuidv4() });
    }
    this.setState({ task: "" });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">
          <b>New Todo </b>
        </label>
        <input
          type="text"
          name="task"
          placeholder="New Todo"
          value={this.state.task}
          id="task"
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}
export default NewTodo;
