import { useState } from "react";
import TodoListContainer from "./TodoListContainer";
import TodoListItemInformationContainer from "./TodoListItemInformationContainer";
import todoJson from "./TodoList.json";

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

function saveTodoItemToJson(todoItems: TodoItem[]) {}

export default function MainContent() {
  const [currentSelectedItemIndex, setCurrentSelectedItemIndex] = useState(0);

  // get json and add map it to create an array of todoitems
  const jsonString = todoJson;
  let todoItems: TodoItem[] = jsonString.todos.map((todo) => {
    return new TodoItem(todo.title, todo.description, todo.priorityLevel);
  });

  function addTodoItem() {
    saveTodoItemToJson([new TodoItem("", "", 1)]);
  }

  function HandleSetIndex(index: number) {
    setCurrentSelectedItemIndex(index);
  }

  return (
    <div className="main-content">
      <TodoListContainer
        ToDos={todoItems}
        HandleSetIndex={HandleSetIndex}
        addTodoItem={addTodoItem}
      ></TodoListContainer>
      <TodoListItemInformationContainer
        currentItemSelectedIndex={currentSelectedItemIndex}
        Todos={todoItems}
      ></TodoListItemInformationContainer>
      <div className="clear-float"></div>
    </div>
  );
}
