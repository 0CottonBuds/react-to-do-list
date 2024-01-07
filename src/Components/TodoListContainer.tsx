interface props {
  ToDos: string[];
}

export default function TodoListContainer({ ToDos }: props) {
  return (
    <div className="todo-list-container">
      <ul>
        {ToDos.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
