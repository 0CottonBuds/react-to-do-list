import { TodoItem } from "./MainContent";
interface TodoListContainerProps {
  ToDos: TodoItem[];
}

export default function TodoListContainer({ ToDos }: TodoListContainerProps) {
  return (
    <div className="todo-list-container">
      <ul>
        {ToDos.map((item) => {
          return <TodoListItem title={item.title}></TodoListItem>;
        })}
      </ul>
    </div>
  );
}

interface TodoListItemProps {
  title: string;
}
function TodoListItem({ title }: TodoListItemProps) {
  return (
    <li>
      <button>{title}</button>
    </li>
  );
}
