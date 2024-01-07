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
  const toDoList = ["dry clothes", "study code", "run"];

  const toDoItems = toDoList.map((item) => {
    return new TodoItem(item, "test description", 1);
  });

  return (
    <div className="main-content">
      <TodoListContainer ToDos={toDoItems}></TodoListContainer>
      <TodoListItemInformationContainer></TodoListItemInformationContainer>
    </div>
  );
}
