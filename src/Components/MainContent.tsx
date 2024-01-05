import TodoListContainer from "./TodoListContainer";
import TodoListItemInformationContainer from "./TodoListItemInformationContainer";

export default function MainContent() {
  return (
    <div className="main-content">
      <TodoListContainer></TodoListContainer>
      <TodoListItemInformationContainer></TodoListItemInformationContainer>
    </div>
  );
}
