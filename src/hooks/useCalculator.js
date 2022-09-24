import { useReducer } from "react";
import calculatorReducer from "../reducers/calculatorReducer";
function useCalculator() {
  const initialValue = { prevValue: "", currentValue: "", operation: "", decimals: false };
  const [state, dispatch] = useReducer(calculatorReducer, initialValue);
  return { state, dispatch };
}

export default useCalculator;
