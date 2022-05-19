import React from "react";
import "../styles/credit.css";
import CreditForm from "../components/CreditForm";
import CreditPayment from "../components/CreditPayment";

const Credit = () => {
  for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min === '' ? '0' : e.min);
    e.style.setProperty('--max', e.max === '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }

  return (
    <>
      <div className="workplace1">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-11">
              <div className="card p-3">
                <h1 className="h2 mb-4" id="credit">
                  Кредитный калькулятор
                </h1>
                <CreditForm />
                <CreditPayment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credit;