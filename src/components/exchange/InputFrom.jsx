import React from "react";

const InputFrom = ({ moneyInput, setMoneyInput }) => {
  return (
    <div className="col">
      <input
        value={moneyInput}
        onChange={(e) => setMoneyInput(e.target.value)}
        id="input"
        type="number"
        className="form-control"
        autoFocus
      />
    </div>
  );
};

export default InputFrom;
