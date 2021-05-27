import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function TodoItem(props) {
  return (
    <div className="item-div">
      <button className="deleteTodos" onClick={props.click}>X</button>
      <h1 className="todoItems">{props.title}</h1>
    </div>
  );
}

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "dishes" },
      { id: 2, title: "clothes" },
      { id: 3, title: "rags" },
      { id: 4, title: "wash car" },
    ],
    newTodo: "",
  };

  ChangetoDo = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  };

  delitems = (index) => {
    const newItem = [...this.state.todos];
    const updatedList = newItem.filter((item) => item.id !== index);
    this.setState({
      todos: updatedList,
    });
    console.log(index);
  };

  additems = (e) => {
    e.preventDefault();
    const newitem = {
      id: this.state.todos.length + 1,
      title: this.state.newTodo,
    };
    const currList = [...this.state.todos];
    currList.push(newitem);

    this.setState({
      todos: currList,
      newTodo: ""  //reseting form input

    });
  };

  render() {
    const list = this.state.todos.map((item) => {
      return (
        <TodoItem
          key={item.id}
          click={() => this.delitems(item.id)}
          title={item.title}
        />
      );
    });
    console.log(this.state.todos.length + 1);
    console.log(this.state.newTodo);

    return (
      <div className="outer-div">
        <div className="inner-div">
          <h1 className="title">welcome to the TODO list</h1>
        <form  className="Form" onSubmit={(e) => this.additems(e)}>
          <input
            onChange={(e) => this.ChangetoDo(e)}
            placeholder="enter todo"
            value={this.state.newTodo}
          ></input>
          <button>Submit</button>
        </form>
        {list}
        </div>
      </div>
    );
  }
}

export default App;
