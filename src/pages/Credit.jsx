import React from "react";
import CreditForm from "../components/credit/CreditForm";
import CreditPayment from "../components/credit/CreditPayment";
import "../components/credit/credit.css";

const Credit = () => {
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
