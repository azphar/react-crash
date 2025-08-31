import React from "react";
import "./Todo.css";

export default function Todo({ title, onTodoDelete }) {
  function deleteTodo() {
    console.log("deleteTodo()", title.toUpperCase());
    onTodoDelete?.(title); 
  }

  return (
    <div className="todo">
      <p>{title}</p>
      <button type="button" onClick={deleteTodo}>Delete</button>
    </div>
  );
}
