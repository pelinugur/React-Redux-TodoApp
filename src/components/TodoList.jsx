import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { destroy, toggle } from "../redux/todos/todosSlice";

let filtered = [];
const TodoList = () => {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.todos.activeFilter);

  filtered = items;
  if (activeFilter !== "all") {
    filtered = items.filter((todo) =>
      activeFilter === "active"
        ? todo.completed === false && todo
        : todo.completed === true && todo
    );
  }
  return (
    <ul className="todo-list">
      { filtered
        .slice(0)
        .reverse()
        .map((item) => (
          <li key={item.id} className={item.completed ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.completed}
                onChange={() => dispatch(toggle({ id: item.id }))}
              />
              <label>{item.title}</label>
              <button
                onClick={() => dispatch(destroy(item.id))}
                className="destroy"
              ></button>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
