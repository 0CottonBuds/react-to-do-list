interface props {
  title: string;
}

export default function TodoListItem({ title }: props) {
  return (
    <li>
      <button>{title}</button>
    </li>
  );
}
