

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, deleteTodo } from './todoSlice';

const App = () => {
  const [todoText, setTodoText] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim() === '') return;
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  const handleEditTodo = (id, text) => {
    setEditId(id)
;
    setEditText(text);
  };

  const handleSaveEdit = () => {
    if (editText.trim() === '') return;
    dispatch(editTodo({ id: editId, newText: editText }));
    setEditId(null);
    setEditText('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">ToDo App</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          className="border rounded px-2 py-1 w-64"
          placeholder="Add a todo..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <div className="w-full max-w-md">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-white p-3 mb-2 shadow rounded flex justify-between items-center"
          >
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  className="border rounded px-2 py-1 w-64"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <div className="space-x-2">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    onClick={() => handleEditTodo(todo.id, todo.text)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;