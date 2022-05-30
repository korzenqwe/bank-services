import React, { useState } from "react";
import CreditInputs from "./CreditInputs";
import CreditCircle from "./CreditCircle";
import "../styles/credit.css";

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
    if (e.target.value > 30000000) {
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
    console.log(chSum);
    let value = e.target.value;
    let min = e.target.min;
    let max = e.target.max;
    let percentage = ((value - min) / (max - min)) * 100;
    e.target.style = `background: linear-gradient(to right, #ffa800, #ffa800 ${percentage}%, rgba(0, 0, 0, 0.1)  ${percentage}%, rgba(0, 0, 0, 0.1) 100%)`;
  };

  const changeCreditTermInput = (e) => {
    if (e.target.value > 180) {
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
    if (e.target.value > 40) {
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

  return (
    <form
      className="credit-calculator__form"
      name="credit-calculator-form"
      data-calculator-type="credit"
    >
      <input type="hidden" name="total" value={creditSum * creditRate} />
      <input type="hidden" name="overpayment" value="0" />
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
      <CreditCircle
        creditSum={creditSum}
        creditTerm={creditTerm}
        creditRate={creditRate}
        total={total}
        overpayment={overpayment}
      />
      <div className="credit-calculator-info">
        <ul className="credit-calculator-info__list">
          <li>
            Оплатить до: 
            <span className="credit-calculator-info__value credit-calculator-info__value--date"></span>
          </li>
          <li>
            Сумма кредита: 
            <span className="credit-calculator-info__value credit-calculator-info__value--sum">
              0 ₽
            </span>
          </li>
          <li>
            Переплата: 
            <span className="credit-calculator-info__value credit-calculator-info__value--overpayment">
              0 ₽
            </span>
          </li>
        </ul>
        <div className="credit-calculator-info__comission">
          <h3 className="credit-calculator-info__comission-title">
            Без комиссии
          </h3>
          <p className="credit-calculator-info__comission-text">
            Дополнительные комиссии могут быть начислены в случае
            несвоевременного погашения задолженности
          </p>
        </div>
      </div>
    </form>
  );
};

export default CreditForm;
