import { TodoItem } from "./MainContent";
import Popup from "reactjs-popup";

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
      <ul key={"todo-list-container"}>
        {ToDos.map((item, index) => {
          return (
            <TodoListItem
              key={index}
              title={item.title}
              index={index}
              HandleSetIndex={HandleSetIndex}
            ></TodoListItem>
          );
        })}
      </ul>
      <Popup
        trigger={<button className="add-todo-button">+</button>}
        modal
        nested
      >
        <div className="blur-backdrop"></div>
        <div className="add-todo-popup-container">
          <form className="todo-form">
            <text>Title</text>
            <input type="text" className="title-text-input"></input>
            <text>Description</text>
            <textarea className="description-text-area"></textarea>
            <input type="submit" className="submit-button"></input>
          </form>
        </div>
      </Popup>
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
