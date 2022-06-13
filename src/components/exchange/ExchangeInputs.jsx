import React from "react";
import InputForm from "./InputFrom";
import InputTo from "./InputTo";

const ExchangeInputs = ({ moneyInput, setMoneyInput, value }) => {
  return (
    <div className="row">
      <InputForm moneyInput={moneyInput} setMoneyInput={setMoneyInput} />

      <InputTo value={value} />
    </div>
  );
};

export default ExchangeInputs;
