import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import Header from "./layout/Header";
import Todos from "./Todos";
import axios from "axios";
import Footer from "../store/containers/Footer";

function TodoApp() {
  const [state, setState] = useState({
    todos: [],
  });

  useEffect(() => {
    const config = {
      params: {
        _limit: 5,
      },
    };
    axios
      .get("https://jsonplaceholder.typicode.com/todos", config)
      .then((res) => setState({ todos: res.data }));
  }, []);

  const handleCheckboxChange = (id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        setState({
          todos: [...state.todos.filter((todo) => todo.id !== id)],
        })
      );
  };

  const addTodo = (title) => {
    const newTodo = {
      title: title,
      completed: false,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/todos", newTodo)
      .then((res) => {
        setState({
          todos: [...state.todos, res.data],
        });
      });
  };

  return (
    <div className="container">
      <Header />
      <AddTodo handleAddTodo={addTodo} />
      <Todos
        todos={state.todos}
        handleChange={handleCheckboxChange}
        handleDelete={deleteTodo}
      />
      <Footer />
    </div>
  );
}

export default TodoApp;
