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

function saveTodoItemsToLocalStorage(todoItems: TodoItem[]) {
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

  // @ts-expect-error
  // get json from local storage
  const jsonString = JSON.parse(localStorage.getItem("todoItems"));
  // @ts-expect-error
  // map it to create an array of todoitems
  let todoItems: TodoItem[] = jsonString.todos.map((todo) => {
    return new TodoItem(todo.title, todo.description, todo.priorityLevel);
  });

  function addTodoItem(todoItem: TodoItem) {
    // add todo item to end and save to local storage
    todoItems.push(todoItem);
    saveTodoItemsToLocalStorage(todoItems);
  }

  function removeTodoItem(index: number) {
    // remove item by index
    const firstHalf = todoItems.slice(0, index);
    const secondHalf = todoItems.slice(index + 1);
    todoItems = firstHalf.concat(secondHalf);

    // shift the current selected index
    setCurrentSelectedItemIndex(todoItems.length - 1);
    saveTodoItemsToLocalStorage(todoItems);
  }

  return (
    <div className="main-content">
      <TodoListContainer
        ToDos={todoItems}
        HandleSetIndex={setCurrentSelectedItemIndex}
        addTodoItem={addTodoItem}
      ></TodoListContainer>
      <TodoListItemInformationContainer
        removeItem={removeTodoItem}
        currentItemSelectedIndex={currentSelectedItemIndex}
        Todos={todoItems}
      ></TodoListItemInformationContainer>
      <div className="clear-float"></div>
    </div>
  );
}
