import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";
import { useContext } from "react";
import { TodosContext } from "./store/todos-context";

function App() {
  const todosCtx = useContext(TodosContext);

  return (
    <TodosContextProvider>
      <NewTodo
        items={todosCtx.items}
        addTodo={todosCtx.addTodo}
        removeTodo={todosCtx.removeTodo}
      />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
