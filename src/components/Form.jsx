import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo} from "../redux/todos/todosSlice";



const Form = () => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    
  };
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({id:nanoid(), title, completed:false}))
    setTitle("")
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={title}
        property="newTodo"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  );
};

export default Form;
