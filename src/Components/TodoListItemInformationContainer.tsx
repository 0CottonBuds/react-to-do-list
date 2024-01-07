import { TodoItem } from "./MainContent";
interface TodoListItemInformationContainerProps {
  currentItemSelectedIndex: number;
  Todos: TodoItem[];
}

export default function TodoListItemInformationContainer({
  currentItemSelectedIndex,
  Todos,
}: TodoListItemInformationContainerProps) {
  return (
    <div className="todo-list-item-infomarion-container">
      <h1>Title: {Todos[currentItemSelectedIndex].title}</h1>
      <h3>Description</h3>
      <p>{Todos[currentItemSelectedIndex].description}</p>
    </div>
  );
}
