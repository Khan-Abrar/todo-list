import React, { Component } from "react";
import Todo from "./Todo";
import NewTodo from "./NewTodo";
import "./TodoList.css";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          removeTodo={this.remove}
          key={todo.id}
          id={todo.id}
          task={todo.task}
          updatedTodo={this.update}
        />
      );
    });
    return (
      <div className="TodoList">
        <h1>Todo List!</h1>
        <ul>{todos}</ul>
        <NewTodo createTodo={this.create} />
      </div>
    );
  }
}
export default TodoList;
