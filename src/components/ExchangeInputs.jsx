import React from "react";
import InputForm from "../components/InputFrom";
import InputTo from "../components/InputTo";

const ExchangeInputs = ({ moneyInput, setMoneyInput, value }) => {
  return (
    <div className="row">

      <InputForm moneyInput={moneyInput} setMoneyInput={setMoneyInput} />

      <InputTo value={value} />

    </div>
  );
};

export default ExchangeInputs;
