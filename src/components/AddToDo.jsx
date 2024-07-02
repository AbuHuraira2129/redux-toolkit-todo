import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../Features/todo/todoSlice";

const AddToDo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addToDo(input));
    setInput("");
  };

  return (
    <div>
      <form
        onSubmit={addTodoHandler}
        className="flex gap-3 items-center justify-center mt-8 "
      >
        <input
          className=" py-4 px-6 rounded-lg"
          type="text"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-orange-700" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
