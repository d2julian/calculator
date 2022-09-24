import "./App.css";
import ButtonNumber from "./components/ButtonNumber";
import useCalculator from "./hooks/useCalculator";
import { calcButtons } from "./constants/constants";
function App() {
  const { state, dispatch } = useCalculator();
  return (
    <div className="container">
      <div className="screen">
        <div className="previous">{state.prevValue + " " + state.operation + " " + state.currentValue}</div>
        <div className="current">{state.currentValue || state.prevValue || 0}</div>
      </div>
      {calcButtons.map((b) => (
        <ButtonNumber key={b.value} onClickHandler={dispatch} operation={b.operation} buttonClass={b.buttonClass}>
          {b.value}
        </ButtonNumber>
      ))}
    </div>
  );
}

export default App;
