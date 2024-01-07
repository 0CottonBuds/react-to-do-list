import TodoListContainer from "./TodoListContainer";
import TodoListItemInformationContainer from "./TodoListItemInformationContainer";

class ToDoItem {
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
  const toDoList = ["dry clothes", "study code", "run"];

  return (
    <div className="main-content">
      <TodoListContainer ToDos={toDoList}></TodoListContainer>
      <TodoListItemInformationContainer></TodoListItemInformationContainer>
    </div>
  );
}
