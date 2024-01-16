import { useState } from "react";
import TodoListContainer from "./TodoListContainer";
import TodoListItemInformationContainer from "./TodoListItemInformationContainer";
import todoJson from "./TodoList.json";
import { arrayBuffer } from "stream/consumers";

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

async function readJsonFile(filePath: string): Promise<String> {
  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${filePath}. Status: ${response.status}`
      );
    }

    const fileContent = await response.text();
    return fileContent;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return "";
  }
}

export default function MainContent() {
  const [currentSelectedItemIndex, setCurrentSelectedItemIndex] = useState(-1);

  const jsonString = todoJson;
  let toDoItems: TodoItem[] = jsonString.todos.map((todo, index) => {
    return new TodoItem(todo.title, todo.description, todo.priorityLevel);
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
