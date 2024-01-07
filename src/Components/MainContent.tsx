import { useState } from "react";
import TodoListContainer from "./TodoListContainer";
import TodoListItemInformationContainer from "./TodoListItemInformationContainer";

export class TodoItem {
  title: string;
  description: string;
  priorityLevel: number;

  constructor(title: string, description: string, priorityLevel: number) {
    this.title = title;
    this.description = description;
    this.priorityLevel = priorityLevel;
  }
}

export default function MainContent() {
  const [currentSelectedItemIndex, setCurrentSelectedItemIndex] = useState(-1);
  const toDoList = [
    "dry clothes",
    "study code",
    "run",
    "item 2",
    "item 3",
    "Item 4",
  ];
  const toDoItems = toDoList.map((item) => {
    return new TodoItem(item, "test description", 1);
  });

  function HandleSetIndex(index: number) {
    setCurrentSelectedItemIndex(index);
  }

  return (
    <div className="main-content">
      <TodoListContainer
        ToDos={toDoItems}
        HandleSetIndex={HandleSetIndex}
      ></TodoListContainer>
      <TodoListItemInformationContainer
        currentItemSelectedIndex={currentSelectedItemIndex}
        Todos={toDoItems}
      ></TodoListItemInformationContainer>
    </div>
  );
}
