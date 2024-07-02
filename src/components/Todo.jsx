import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToDo, updateToDo } from "../Features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (todo) => {
    setEditTodo(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = () => {
    dispatch(updateToDo({ id: editTodo, text: editText }));
    setEditTodo(null);
    setEditText("");
  };

  return (
    <div>
      <h3 className="text-xl backdrop m-8">My Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li
            className="border-b-2 w-auto p-5 flex items-center justify-start gap-4"
            key={todo.id}
          >
            {editTodo === todo.id ? (
              <div className="flex gap-3">
                <input
                  className="py-4 px-6 rounded-lg"
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  className="bg-orange-700 outline-none"
                  onClick={handleUpdate}
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                {todo.text}
                <button
                  className="outline-none"
                  onClick={() => handleEditClick(todo)}
                >
                  Edit
                </button>
                <button
                  className="outline-none"
                  onClick={() => {
                    dispatch(removeToDo(todo.id));
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
