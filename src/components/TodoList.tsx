import React, { useState } from "react";
import TodoService from "../TodoService";
import TodoTypes from "../todo";
import TodoForm from "./TodoForm";
import "../styles/global.scss";
const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());

  const handleDeleteTodo = (id: number) => {
    TodoService.deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todoContainer">
      <div>
        <TodoForm setTodos={setTodos} />
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <div>
            <div className="todos">
              <div className="todo">
                <p>{todo.text}</p>
                <button
                  className="butDelete"
                  onClick={() =>
                    confirm("Are you sure delete this one")
                      ? handleDeleteTodo(todo.id)
                      : ""
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          // <div className="table table-hover">
          //   <table>
          //     <tbody>
          //       <tr>
          //         {/* <th scope="row">1</th> */}
          //         <td>
          //           {" "}
          //           <h2 className="tableP">{todo.text}</h2>
          //         </td>
          //         <td>
          //           {" "}
          //           <button
          //             className="butDelete"
          //             onClick={() => handleDeleteTodo(todo.id)}
          //           >
          //             Delete
          //           </button>
          //         </td>
          //       </tr>
          //     </tbody>
          //   </table>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
