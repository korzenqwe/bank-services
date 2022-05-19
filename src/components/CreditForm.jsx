import React from "react";
import CreditInputs from "./CreditInputs";
import CreditCircle from "./CreditCircle";

const CreditForm = () => {
  return (
      <form
        className="credit-calculator__form"
        name="credit-calculator-form"
        data-calculator-type="credit"
      >
        <input type="hidden" name="total" value="0" />
        <input type="hidden" name="overpayment" value="0" />
        <CreditInputs />
        <CreditCircle />
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
