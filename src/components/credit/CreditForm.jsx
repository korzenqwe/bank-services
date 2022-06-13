import React, { useState } from "react";
import CreditInputs from "./CreditInputs";
import CreditCircle from "./CreditCircle";
import CreditInfo from "./CreditInfo";
import "./credit.css";

const CreditForm = () => {
  const [creditSum, setCreditSum] = useState("3000000");
  const [creditTerm, setCreditTerm] = useState("60");
  const [creditRate, setCreditRate] = useState("10");
  const total = document.querySelector("input[name=total]");
  const overpayment = document.querySelector("input[name=overpayment]");
  const chSum = document.querySelector("input[name=sum]");
  const chTerm = document.querySelector("input[name=term]");
  const chRate = document.querySelector("input[name=rate]");

  const changeCreditSumInput = (e) => {
    if (e.target.value >= 30000000) {
      setCreditSum(30000000);
    } else if (e.target.value < 0) {
      setCreditSum(0);
    } else setCreditSum(e.target.value);
    let value = e.target.value;
    let min = chSum.min;
    let max = chSum.max;
    let percentage = ((value - min) / (max - min)) * 100;
    chSum.style = `background: linear-gradient(to right, #ffa800, #ffa800 ${percentage}%, rgba(0, 0, 0, 0.1)  ${percentage}%, rgba(0, 0, 0, 0.1) 100%)`;
  };

  const changeCreditSum = (e) => {
    setCreditSum(e.target.value);
    let value = e.target.value;
    let min = e.target.min;
    let max = e.target.max;
    let percentage = ((value - min) / (max - min)) * 100;
    e.target.style = `background: linear-gradient(to right, #ffa800, #ffa800 ${percentage}%, rgba(0, 0, 0, 0.1)  ${percentage}%, rgba(0, 0, 0, 0.1) 100%)`;
  };

  const changeCreditTermInput = (e) => {
    if (e.target.value >= 180) {
      setCreditTerm(180);
    } else if (e.target.value < 0) {
      setCreditTerm(0);
    } else setCreditTerm(e.target.value);
    let value = e.target.value;
    let min = chTerm.min;
    let max = chTerm.max;
    let percentage = ((value - min) / (max - min)) * 100;
    chTerm.style = `background: linear-gradient(to right, #ffa800, #ffa800 ${percentage}%, rgba(0, 0, 0, 0.1)  ${percentage}%, rgba(0, 0, 0, 0.1) 100%)`;
  };

  const changeCreditTerm = (e) => {
    setCreditTerm(e.target.value);
    let value = e.target.value;
    let min = e.target.min;
    let max = e.target.max;
    let percentage = ((value - min) / (max - min)) * 100;
    e.target.style = `background: linear-gradient(to right, #ffa800, #ffa800 ${percentage}%, rgba(0, 0, 0, 0.1)  ${percentage}%, rgba(0, 0, 0, 0.1) 100%)`;
  };

  const changeCreditRateInput = (e) => {
    if (e.target.value >= 40) {
      setCreditRate(40);
    } else if (e.target.value < 0) {
      setCreditRate(0);
    } else setCreditRate(e.target.value);
    let value = e.target.value;
    let min = chRate.min;
    let max = chRate.max;
    let percentage = ((value - min) / (max - min)) * 100;
    chRate.style = `background: linear-gradient(to right, #ffa800, #ffa800 ${percentage}%, rgba(0, 0, 0, 0.1)  ${percentage}%, rgba(0, 0, 0, 0.1) 100%)`;
  };

  const changeCreditRate = (e) => {
    setCreditRate(e.target.value);
    let value = e.target.value;
    let min = e.target.min;
    let max = e.target.max;
    let percentage = ((value - min) / (max - min)) * 100;
    e.target.style = `background: linear-gradient(to right, #ffa800, #ffa800 ${percentage}%, rgba(0, 0, 0, 0.1)  ${percentage}%, rgba(0, 0, 0, 0.1) 100%)`;
  };

  const percent = creditRate / 100 / 12;
  const monthPayment =
    percent === 0
      ? creditSum / creditTerm
      : creditSum *
        (percent + percent / (Math.pow(1 + percent, creditTerm) - 1));
  const totalSum =
    creditRate === 0
      ? Math.round(Number(creditSum))
      : Math.round(Number(monthPayment * creditTerm));
  const overpaymentSum = String(totalSum - creditSum);

  return (
    <form
      className="credit-calculator__form"
      name="credit-calculator-form"
      data-calculator-type="credit"
    >
      {/* <input type="hidden" name="total" value={totalSum} />
      <input type="hidden" name="overpayment" value={overpaymentSum} /> */}
      <CreditInputs
        changeCreditSumInput={changeCreditSumInput}
        changeCreditTermInput={changeCreditTermInput}
        changeCreditRateInput={changeCreditRateInput}
        changeCreditSum={changeCreditSum}
        creditSum={creditSum}
        creditTerm={creditTerm}
        changeCreditTerm={changeCreditTerm}
        creditRate={creditRate}
        changeCreditRate={changeCreditRate}
      />
      <CreditCircle creditSum={creditSum} total={totalSum} />
      <CreditInfo />
    </form>
  );
};

export default CreditForm;
