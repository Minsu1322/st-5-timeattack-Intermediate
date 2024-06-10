import {
  setTitle,
  setContent,
  setDone,
  setList,
} from "../redux/slices/todoSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function TodoForm() {
  const title = useSelector((state) => state.todos.title);
  const content = useSelector((state) => state.todos.content);
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const handleContent = (e) => {
    dispatch(setContent(e.target.value));
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(setList({ title, content, id: Date.now() }));
  };

  return (
    <form>
      <label>제목: </label>
      <input type="text" value={title} onChange={handleTitle} />

      <label>내용: </label>
      <input type="text" value={content} onChange={handleContent} />

      <button onClick={handleSave}>추가</button>
    </form>
  );
}
