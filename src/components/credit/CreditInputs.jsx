import React from "react";

const CreditInputs = ({
  creditSum,
  changeCreditSum,
  changeCreditSumInput,
  changeCreditTermInput,
  changeCreditRateInput,
  creditTerm,
  changeCreditTerm,
  creditRate,
  changeCreditRate,
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
            type="number"
            id="calculator-input-sum"
            className="credit-calculator__input"
            value={creditSum}
            onChange={(e) => {
              changeCreditSumInput(e);
            }}
          />
        </div>
        <input
          id="calculator-range-sum"
          className="range credit-calculator__range"
          type="range"
          name="sum"
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
            type="number"
            id="calculator-input-term"
            className="credit-calculator__input"
            value={creditTerm}
            onChange={(e) => changeCreditTermInput(e)}
            data-bind="calculator-range-term"
          />
        </div>
        <input
          id="calculator-range-term"
          className="range credit-calculator__range"
          type="range"
          name="term"
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
            type="number"
            id="calculator-input-rate"
            className="credit-calculator__input"
            value={creditRate}
            onChange={(e) => changeCreditRateInput(e)}
            data-bind="calculator-range-rate"
          />
        </div>
        <input
          id="calculator-range-rate"
          className="range credit-calculator__range"
          type="range"
          name="rate"
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
