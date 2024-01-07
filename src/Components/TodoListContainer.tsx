import { TodoItem } from "./MainContent";
interface TodoListContainerProps {
  ToDos: TodoItem[];
  HandleSetIndex: (index: number) => void;
}

export default function TodoListContainer({
  ToDos,
  HandleSetIndex,
}: TodoListContainerProps) {
  return (
    <div className="todo-list-container">
      <ul>
        {ToDos.map((item, index) => {
          return (
            <TodoListItem
              title={item.title}
              index={index}
              HandleSetIndex={HandleSetIndex}
            ></TodoListItem>
          );
        })}
      </ul>
    </div>
  );
}

interface TodoListItemProps {
  title: string;
  index: number;
  HandleSetIndex: (index: number) => void;
}
function TodoListItem({ title, index, HandleSetIndex }: TodoListItemProps) {
  function HandleClick() {
    HandleSetIndex(index);
  }
  return (
    <li>
      <button onClick={HandleClick}>{title}</button>
    </li>
  );
}
