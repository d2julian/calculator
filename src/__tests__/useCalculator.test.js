import { render, renderHook, act } from "@testing-library/react";
import App from "../App";
import useCalculator from "../hooks/useCalculator";
describe("useCalculator Hook", () => {
  test("sum two numbers using hook", () => {
    render(<App />);
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.dispatch({ value: 2, type: "add" });
      result.current.dispatch({ value: "+", type: "select_operation" });
      result.current.dispatch({ value: 2, type: "add" });
      result.current.dispatch({ type: "evaluate" });
    });
    expect(result.current.state.prevValue).toBe(4);
  });
});
