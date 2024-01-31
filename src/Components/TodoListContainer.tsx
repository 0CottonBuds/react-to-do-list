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
        <div className="blur-backdrop clear-float "></div>
        <div className="add-todo-popup-container">
          <div className="add-todo-form">
            <text className="popup-text">Title</text>
            <input type="text" className="title-text-input"></input>
            <text className="popup-text">Description</text>
            <textarea className="description-text-area"></textarea>
            <input type="submit" className="submit-button"></input>
          </div>
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
