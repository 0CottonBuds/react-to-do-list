import { TodoItem } from "./MainContent";
interface TodoListItemInformationContainerProps {
  currentItemSelectedIndex: number;
  Todos: TodoItem[];
  removeItem: (index: number) => void;
}

export default function TodoListItemInformationContainer({
  currentItemSelectedIndex,
  Todos,
  removeItem,
}: TodoListItemInformationContainerProps) {
  return (
    <div className="todo-list-item-infomarion-container">
      <h1>Title: {Todos[currentItemSelectedIndex].title}</h1>
      <button onClick={() => removeItem(currentItemSelectedIndex)}>
        remove
      </button>
      <h3>Description</h3>
      <p>{Todos[currentItemSelectedIndex].description}</p>
    </div>
  );
}
