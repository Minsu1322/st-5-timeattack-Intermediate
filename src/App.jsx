import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { add, minus } from "./redux/slices/calculatorSlice";
import { useState } from "react";
// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const value = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  const handlePlus = () => {
    dispatch(add(Number(number)));
  };

  const handleMinus = () => {
    dispatch(minus(Number(number)));
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        만큼을
        <button onClick={handlePlus}>더할게요</button>
        <button onClick={handleMinus}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default App;
