import "./App.css";
import AddToDo from "./components/AddToDo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div>
        <p>Muhammad Abu Huraira</p>
        <h1>Learning about Redux Toolkit</h1>
        <AddToDo />
        <Todo />
      </div>
    </>
  );
}

export default App;
