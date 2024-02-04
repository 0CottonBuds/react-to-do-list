import { useState } from "react";
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
  const [titleTextInputValue, setTitleTextInputValue] = useState("");
  const [descriptionTextInputValue, setDescriptionTextInputValue] = useState("");

  function onTitleTextInputChange(event: Event) {
    // @ts-expect-error
    setTitleTextInputValue(event.target.value);
  }
 
  function onDescriptionTextInputChange(event: Event) {
    // @ts-expect-error
    setDescriptionTextInputValue(event.target.value);
  }

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
          <div className="popup-text-container">
            <text className="popup-text">Title</text>
          </div>
          <input
            type="text"
            className="title-text-input"
            value={titleTextInputValue}
            // @ts-expect-error
            onChange={onTitleTextInputChange}
          ></input>
          <div className="popup-text-container">
            <text className="popup-text">Description</text>
          </div>
          <textarea
            className="description-text-area"
            value={descriptionTextInputValue}
            // @ts-expect-error
            onChange={onDescriptionTextInputChange}
          ></textarea>
          <input type="submit" className="submit-button"></input>
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
