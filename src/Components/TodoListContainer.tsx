import { ToDoItem } from "./MainContent";
interface props {
  ToDos: ToDoItem[];
}

export default function TodoListContainer({ ToDos }: props) {
  return (
    <div className="todo-list-container">
      <ul>
        {ToDos.map((item) => {
          return <li>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
