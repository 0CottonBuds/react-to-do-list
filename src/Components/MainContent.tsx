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

function saveTodoItemToJson(todoItems: TodoItem[]) {
  let jsonToSave = { todos: [{}] };

  for (let i = 0; i < todoItems.length; i++) {
    jsonToSave.todos.push({
      title: todoItems[i].title,
      description: todoItems[i].description,
      priorityLevel: 1,
    });
  }

  jsonToSave.todos.splice(0, 1);
  console.log(jsonToSave);

  localStorage.setItem("todoItems", JSON.stringify(jsonToSave, null, 2));
}

export default function MainContent() {
  const [currentSelectedItemIndex, setCurrentSelectedItemIndex] = useState(0);

  // get json and add map it to create an array of todoitems
  // @ts-expect-error
  const jsonString = JSON.parse(localStorage.getItem("todoItems"));
  // @ts-expect-error
  let todoItems: TodoItem[] = jsonString.todos.map((todo) => {
    return new TodoItem(todo.title, todo.description, todo.priorityLevel);
  });

  function addTodoItem(todoItem: TodoItem) {
    todoItems.push(todoItem);
    console.log(todoItems);
    saveTodoItemToJson(todoItems);
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
