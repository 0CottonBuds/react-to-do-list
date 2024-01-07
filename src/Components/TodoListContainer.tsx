import { ToDoItem } from "./MainContent";
import TodoListItem from "./TodoListItem";
interface props {
  ToDos: ToDoItem[];
}

export default function TodoListContainer({ ToDos }: props) {
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
