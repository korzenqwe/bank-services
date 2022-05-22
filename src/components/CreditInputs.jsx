import React from "react";
import "../styles/credit.css";

const CreditInputs = ({
  creditSum,
  changeCreditSum,
  creditTerm,
  changeCreditTerm,
  creditRate,
  changeCreditRate
}) => {
  return (
    <div className="credit-calculator__fields">
      <div className="credit-calculator__field">
        <div className="credit-calculator__top">
          <label
            className="credit-calculator__label"
            htmlFor="calculator-input-sum"
          >
            Сумма
          </label>
          <input
            type="text"
            id="calculator-input-sum"
            className="credit-calculator__input"
            name="sum"
            value={creditSum}
            data-bind="calculator-range-sum"
            disabled={true}
          />
        </div>
        <input
          id="calculator-range-sum"
          className="left right range credit-calculator__range"
          type="range"
          data-bind="calculator-input-sum"
          min={0}
          max={30000000}
          step={100}
          value={creditSum}
          onChange={(e) => {
            changeCreditSum(e);
          }}
        />
        <div className="credit-calculator__caption">
          <span>0 ₽</span>
          <span>30 000 000 ₽</span>
        </div>
      </div>
      <div className="credit-calculator__field">
        <div className="credit-calculator__top">
          <label
            className="credit-calculator__label"
            htmlFor="calculator-input-term"
          >
            Срок (мес)
          </label>
          <input
            type="text"
            id="calculator-input-term"
            className="credit-calculator__input"
            name="term"
            value={creditTerm}
            data-bind="calculator-range-term"
            disabled={true}
          />
        </div>
        <input
          id="calculator-range-term"
          className="styled-slider slider-progress range credit-calculator__range"
          type="range"
          data-bind="calculator-input-term"
          min={1}
          max={180}
          step={1}
          value={creditTerm}
          onChange={(e) => changeCreditTerm(e)}
        />
        <div className="credit-calculator__caption">
          <span>1 мес</span>
          <span>180 мес</span>
        </div>
      </div>
      <div className="credit-calculator__field">
        <div className="credit-calculator__top">
          <label
            className="credit-calculator__label"
            htmlFor="calculator-input-rate"
          >
            Ставка
          </label>
          <input
            type="text"
            id="calculator-input-rate"
            className="credit-calculator__input"
            name="rate"
            value={creditRate}
            data-bind="calculator-range-rate"
            disabled={true}
          />
        </div>
        <input
          id="calculator-range-rate"
          className="styled-slider slider-progress range credit-calculator__range"
          type="range"
          data-bind="calculator-input-rate"
          min={0}
          max={40}
          step={0.1}
          value={creditRate}
          onChange={(e) => changeCreditRate(e)}
        />
        <div className="credit-calculator__caption">
          <span>0 %</span>
          <span>40 %</span>
        </div>
      </div>
    </div>
  );
};

export default CreditInputs;
