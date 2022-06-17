import React from "react";

const LoanInfo = ({ overpayment, loanSum, loanTerm }) => {
  const date = new Date();
  const paymentDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + Number(loanTerm)
  ).toLocaleString("ru", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  return (
    <div className="loan-calculator-info">
      <ul className="loan-calculator-info__list">
        <li>
          Оплатить до: 
          <span className="loan-calculator-info__value loan-calculator-info__value--date">
            {paymentDate}
          </span>
        </li>
        <li>
          Сумма кредита: 
          <span className="loan-calculator-info__value loan-calculator-info__value--sum">
            {loanSum.toLocaleString()} ₽
          </span>
        </li>
        <li>
          Переплата: 
          <span className="loan-calculator-info__value loan-calculator-info__value--overpayment">
            {overpayment.toLocaleString()} ₽
          </span>
        </li>
      </ul>
      <div className="loan-calculator-info__comission">
        <h3 className="loan-calculator-info__comission-title">Без комиссии</h3>
        <p className="loan-calculator-info__comission-text">
          Дополнительные комиссии могут быть начислены в случае несвоевременного
          погашения задолженности
        </p>
      </div>
    </div>
  );
};

export default LoanInfo;
