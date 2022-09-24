export const OPERATIONS = {
  SELECT_OPERATION: "select_operation",
  EVALUATE: "evaluate",
  ADD: "add",
  DELETE_PREVIOUS: "delete_digit",
  DELETE_ALL: "delete_all",
  DECIMAL: ".",
};

export const calcButtons = [
  { value: "CE", operation: OPERATIONS.DELETE_ALL, buttonClass: "two-blocks" },
  { value: "DEL", operation: OPERATIONS.DELETE_PREVIOUS },
  { value: "/", operation: OPERATIONS.SELECT_OPERATION },
  { value: 7, operation: OPERATIONS.ADD },
  { value: 8, operation: OPERATIONS.ADD },
  { value: 9, operation: OPERATIONS.ADD },
  { value: "*", operation: OPERATIONS.SELECT_OPERATION },
  { value: 4, operation: OPERATIONS.ADD },
  { value: 5, operation: OPERATIONS.ADD },
  { value: 6, operation: OPERATIONS.ADD },
  { value: "-", operation: OPERATIONS.SELECT_OPERATION },
  { value: 1, operation: OPERATIONS.ADD },
  { value: 2, operation: OPERATIONS.ADD },
  { value: 3, operation: OPERATIONS.ADD },
  { value: "+", operation: OPERATIONS.SELECT_OPERATION },
  { value: ".", operation: OPERATIONS.SELECT_OPERATION },
  { value: 0, operation: OPERATIONS.ADD },
  { value: "=", operation: OPERATIONS.EVALUATE, buttonClass: "two-blocks " },
];
