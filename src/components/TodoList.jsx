import TodoItem from "./TodoItem";
import {
  setTitle,
  setContent,
  setDone,
  setList,
} from "../redux/slices/todoSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function TodoList() {
  const list = useSelector((state) => state.todos.list);

  return (
    <section>
      <h2>Working...</h2>
      <ul>
        {list
          .filter((item) => !item.isDone)
          .map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
      </ul>
    </section>
  );
}
