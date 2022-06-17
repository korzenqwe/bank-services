import React from "react";

const CreditInfo = ({ overpayment, creditSum, creditTerm }) => {
  const date = new Date();
  const paymentDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + Number(creditTerm)
  ).toLocaleString("ru", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  return (
    <div className="credit-calculator-info">
      <ul className="credit-calculator-info__list">
        <li>
          Оплатить до: 
          <span className="credit-calculator-info__value credit-calculator-info__value--date">
            {paymentDate}
          </span>
        </li>
        <li>
          Сумма кредита: 
          <span className="credit-calculator-info__value credit-calculator-info__value--sum">
            {creditSum.toLocaleString()} ₽
          </span>
        </li>
        <li>
          Переплата: 
          <span className="credit-calculator-info__value credit-calculator-info__value--overpayment">
            {overpayment.toLocaleString()} ₽
          </span>
        </li>
      </ul>
      <div className="credit-calculator-info__comission">
        <h3 className="credit-calculator-info__comission-title">
          Без комиссии
        </h3>
        <p className="credit-calculator-info__comission-text">
          Дополнительные комиссии могут быть начислены в случае несвоевременного
          погашения задолженности
        </p>
      </div>
    </div>
  );
};

export default CreditInfo;
