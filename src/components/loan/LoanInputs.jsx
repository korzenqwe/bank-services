import React from "react";

const loanInputs = ({
  loanSum,
  changeloanSum,
  changeloanSumInput,
  changeloanTermInput,
  changeloanRateInput,
  loanTerm,
  changeloanTerm,
  loanRate,
  changeloanRate,
}) => {
  return (
    <div className="loan-calculator__fields">
      <div className="loan-calculator__field">
        <div className="loan-calculator__top">
          <label
            className="loan-calculator__label"
            htmlFor="calculator-input-sum"
          >
            Сумма
          </label>
          <input
            type="number"
            id="calculator-input-sum"
            className="loan-calculator__input"
            value={loanSum}
            onChange={(e) => {
              changeloanSumInput(e);
            }}
          />
        </div>
        <input
          id="calculator-range-sumZ"
          className="range loan-calculator__range"
          type="range"
          name="sum"
          data-bind="calculator-input-sum"
          min={0}
          max={100000}
          step={100}
          value={loanSum}
          onChange={(e) => {
            changeloanSum(e);
          }}
        />
        <div className="loan-calculator__caption">
          <span>0 ₽</span>
          <span>100 000 ₽</span>
        </div>
      </div>
      <div className="loan-calculator__field">
        <div className="loan-calculator__top">
          <label
            className="loan-calculator__label"
            htmlFor="calculator-input-term"
          >
            Срок (мес)
          </label>
          <input
            type="number"
            id="calculator-input-term"
            className="loan-calculator__input"
            value={loanTerm}
            onChange={(e) => changeloanTermInput(e)}
            data-bind="calculator-range-term"
          />
        </div>
        <input
          id="calculator-range-termZ"
          className="styled-slider slider-progress range loan-calculator__range"
          type="range"
          name="term"
          data-bind="calculator-input-term"
          min={1}
          max={365}
          step={1}
          value={loanTerm}
          onChange={(e) => changeloanTerm(e)}
        />
        <div className="loan-calculator__caption">
          <span>1 дн</span>
          <span>365 дн</span>
        </div>
      </div>
      <div className="loan-calculator__field">
        <div className="loan-calculator__top">
          <label
            className="loan-calculator__label"
            htmlFor="calculator-input-rate"
          >
            Ставка
          </label>
          <input
            type="number"
            id="calculator-input-rate"
            className="loan-calculator__input"
            value={loanRate}
            onChange={(e) => changeloanRateInput(e)}
            data-bind="calculator-range-rate"
          />
        </div>
        <input
          id="calculator-range-rateZ"
          className="styled-slider slider-progress range loan-calculator__range"
          type="range"
          name="rate"
          min={0}
          max={5}
          step={0.1}
          value={loanRate}
          onChange={(e) => changeloanRate(e)}
        />
        <div className="loan-calculator__caption">
          <span>0 %</span>
          <span>5 %</span>
        </div>
      </div>
    </div>
  );
};

export default loanInputs;
