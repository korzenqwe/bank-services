import React, { useState } from "react";
import LoanInputs from "./LoanInputs";
import LoanCircle from "./LoanCircle";
import LoanInfo from "./LoanInfo";

const LoanForm = () => {
  const [loanSum, setloanSum] = useState(50000);
  const [loanTerm, setloanTerm] = useState(90);
  const [loanRate, setloanRate] = useState(2.5);
  const chSum = document.querySelector("input[name=sum]");
  const chTerm = document.querySelector("input[name=term]");
  const chRate = document.querySelector("input[name=rate]");

  const changeloanSumInput = (e) => {
    if (e.target.value >= 100000) {
      setloanSum(100000);
    } else if (e.target.value < 0) {
      setloanSum(0);
    } else setloanSum(Number(e.target.value));
    let value = e.target.value;
    let min = chSum.min;
    let max = chSum.max;
    let percentage = ((value - min) / (max - min)) * 100;
    chSum.style = `background: linear-gradient(to right, #ffa800, #ffa800 ${percentage}%, rgba(0, 0, 0, 0.1)  ${percentage}%, rgba(0, 0, 0, 0.1) 100%)`;
  };

  const changeloanSum = (e) => {
    setloanSum(Number(e.target.value));
    let value = e.target.value;
    let min = e.target.min;
    let max = e.target.max;
    let percentage = ((value - min) / (max - min)) * 100;
    e.target.style = `background: linear-gradient(to right, #ffa800, #ffa800 ${percentage}%, rgba(0, 0, 0, 0.1)  ${percentage}%, rgba(0, 0, 0, 0.1) 100%)`;
  };

  const changeloanTermInput = (e) => {
    if (e.target.value >= 365) {
      setloanTerm(365);
    } else if (e.target.value < 1) {
      setloanTerm(1);
    } else setloanTerm(Number(e.target.value));
    let value = e.target.value;
    let min = chTerm.min;
    let max = chTerm.max;
    let percentage = ((value - min) / (max - min)) * 100;
    chTerm.style = `background: linear-gradient(to right, #ffa800, #ffa800 ${percentage}%, rgba(0, 0, 0, 0.1)  ${percentage}%, rgba(0, 0, 0, 0.1) 100%)`;
  };

  const changeloanTerm = (e) => {
    setloanTerm(Number(e.target.value));
    let value = e.target.value;
    let min = e.target.min;
    let max = e.target.max;
    let percentage = ((value - min) / (max - min)) * 100;
    e.target.style = `background: linear-gradient(to right, #ffa800, #ffa800 ${percentage}%, rgba(0, 0, 0, 0.1)  ${percentage}%, rgba(0, 0, 0, 0.1) 100%)`;
  };

  const changeloanRateInput = (e) => {
    if (e.target.value >= 5) {
      setloanRate(5);
    } else if (e.target.value < 0) {
      setloanRate(0);
    } else setloanRate(Number(e.target.value));
    let value = e.target.value;
    let min = chRate.min;
    let max = chRate.max;
    let percentage = ((value - min) / (max - min)) * 100;
    chRate.style = `background: linear-gradient(to right, #ffa800, #ffa800 ${percentage}%, rgba(0, 0, 0, 0.1)  ${percentage}%, rgba(0, 0, 0, 0.1) 100%)`;
  };

  const changeloanRate = (e) => {
    setloanRate(Number(e.target.value));
    let value = e.target.value;
    let min = e.target.min;
    let max = e.target.max;
    let percentage = ((value - min) / (max - min)) * 100;
    e.target.style = `background: linear-gradient(to right, #ffa800, #ffa800 ${percentage}%, rgba(0, 0, 0, 0.1)  ${percentage}%, rgba(0, 0, 0, 0.1) 100%)`;
  };

  const totalSum =
    loanRate === 0
      ? Math.round(Number(loanSum))
      : Math.round(Number(loanSum) + (loanRate / 100) * loanSum * loanTerm);
  const overpaymentSum = totalSum - loanSum;

  return (
    <>
      <form
        className="loan-calculator__form"
        name="loan-calculator-form"
        data-calculator-type="loan"
      >
        <LoanInputs
          changeloanSumInput={changeloanSumInput}
          changeloanTermInput={changeloanTermInput}
          changeloanRateInput={changeloanRateInput}
          changeloanSum={changeloanSum}
          loanSum={loanSum}
          loanTerm={loanTerm}
          changeloanTerm={changeloanTerm}
          loanRate={loanRate}
          changeloanRate={changeloanRate}
        />
        <LoanCircle loanSum={loanSum} total={totalSum} />
        <LoanInfo
          overpayment={overpaymentSum}
          loanSum={loanSum}
          loanTerm={loanTerm}
        />
      </form>
    </>
  );
};

export default LoanForm;
