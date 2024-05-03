import TodoList from "./components/TodoList";
import "./styles/global.scss";
function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
          <h1 className="h1Center">To Do App</h1>
        </div>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
