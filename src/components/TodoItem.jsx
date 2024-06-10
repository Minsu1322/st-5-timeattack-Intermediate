// Hint: TodoItem 컴포넌트는 props 를 받습니다.
import {
  setTitle,
  setContent,
  setDone,
  setList,
  setDelete,
} from "../redux/slices/todoSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function TodoItem({ item }) {
  const dispatch = useDispatch();

  const handleDone = () => {
    dispatch(setDone(item.id));
  };

  const handleDelete = () => {
    dispatch(setDelete(item.id));
  };
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {item.title}</p>
        <p>내용: {item.content}</p>
      </section>
      <section>
        <button onClick={handleDone}>완료</button>
        <button onClick={handleDelete}>삭제</button>
      </section>
    </li>
  );
}
