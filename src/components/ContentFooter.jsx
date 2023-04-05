import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveFilter, clearCompleted } from "../redux/todos/todosSlice";

const ContentFooter = () => {
  const items = useSelector((state) => state.todos.items);
  const itemsLeft = items.filter((item) => !item.completed).length;

  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const dispatch = useDispatch();

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong mv-value="todoLeft">{itemsLeft}</strong> items left
        </span>
        <ul className="filters">
          <li>
            <button 
            className={activeFilter === "all" ? "selected" : ""} 
            onClick={() => dispatch(changeActiveFilter('all'))} >
              All
            </button>
          </li>
          <li>
            <button 
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter('active'))}>
              Active
            </button>
          </li>
          <li>
            <button
              className={activeFilter === "completed" ? "selected" : ""}
              onClick={() => dispatch(changeActiveFilter('completed'))}>
              Completed
            </button>
          </li>
        </ul>
        <button onClick={() => dispatch(clearCompleted())} className="clear-completed">Clear completed</button>
      </footer>
    </>
  );
};

export default ContentFooter;
