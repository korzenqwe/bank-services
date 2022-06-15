import React from "react";

const CreditInfo = ({ overpayment, creditSum }) => {
  // function formatDate(date) {
  //   let dd = date.getDate();
  //   if (dd < 10) dd = "0" + dd;
  //   let mm = date.getMonth() + 1;
  //   if (mm < 10) mm = "0" + mm;
  //   let yy = date.getFullYear() % 100;
  //   if (yy < 10) yy = "0" + yy;
  //   return dd + "." + mm + "." + yy;
  // }

  return (
    <div className="credit-calculator-info">
      <ul className="credit-calculator-info__list">
        <li>
          Оплатить до: 
          <span className="credit-calculator-info__value credit-calculator-info__value--date"></span>
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
