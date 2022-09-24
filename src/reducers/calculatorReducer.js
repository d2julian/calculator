import { OPERATIONS } from "../constants/constants";

const calculatorReducer = (state, action) => {
  if (action.type === OPERATIONS.ADD) {
    if (state.decimal) {
      return { ...state, currentValue: state.currentValue + OPERATIONS.DECIMAL + action.value, decimal: false };
    }
    if (state.operation !== "" && state.prevValue === "") {
      return { ...state, prevValue: state.currentValue, currentValue: action.value };
    }

    return { ...state, currentValue: `${state.currentValue || ""}${action.value}` };
  }
  if (action.type === OPERATIONS.SELECT_OPERATION) {
    if (action.value === "." && state.currentValue.toString().includes(".")) {
      return { ...state, decimal: false };
    }
    if (action.value === ".") {
      return { ...state, decimal: true };
    }
    if (state.operation !== "" && action.value !== "." && state.prevValue !== "" && state.currentValue !== "") {
      return { ...state, prevValue: calc(state), currentValue: "", operation: action.value };
    }
    return { ...state, operation: action.value };
  }
  if (action.type === OPERATIONS.EVALUATE) {
    if (state.operation !== "" && state.prevValue !== "" && state.currentValue !== "") {
      return { ...state, prevValue: calc(state), currentValue: "", operation: "" };
    } else {
      return state;
    }
  }
  if (action.type === OPERATIONS.DELETE_PREVIOUS) {
    console.log(state);
    if (state.currentValue !== "" && state.prevValue === "") {
      return { prevValue: "", currentValue: "", operation: "" };
    }
    if (state.currentValue !== "") {
      return { ...state, currentValue: "" };
    } else {
      return { prevValue: "", currentValue: "", operation: "" };
    }
  }

  if (action.type === OPERATIONS.DELETE_ALL) {
    return { prevValue: "", currentValue: "", operation: "" };
  }
};

const calc = ({ prevValue, operation, currentValue }) => {
  let total;
  try {
    switch (operation) {
      case "+":
        total = +prevValue + +currentValue;
        break;
      case "-":
        total = +prevValue - +currentValue;
        break;
      case "*":
        total = +prevValue * +currentValue;
        break;
      case "/":
        total = +prevValue / +currentValue;
        break;
      default:
        break;
    }
    if (isNaN(total)) {
      return 0;
    }
    return Math.round(total * 1000) / 1000;
  } catch (error) {
    return 0;
  }
};

export default calculatorReducer;
