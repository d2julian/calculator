import React from "react";

function ButtonNumber({ children, buttonClass, onClickHandler, operation }) {
  const onClickButton = () => {
    onClickHandler({ type: operation, value: children });
  };
  return (
    <button onClick={onClickButton} className={buttonClass}>
      {children}
    </button>
  );
}

export default ButtonNumber;
