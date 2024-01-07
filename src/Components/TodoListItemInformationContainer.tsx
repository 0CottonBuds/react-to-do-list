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
      {currentItemSelectedIndex}
    </div>
  );
}
