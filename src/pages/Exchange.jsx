import React from "react";
import ExchangeTitle from "../components/exchange/ExchangeTitle";
import ExchangeForm from "../components/exchange/ExchangeForm";
import "../components/exchange/exchange.css";

const Exchange = () => {
  return (
    <>
      <div className="container pt-4 pb-5">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="card p-3">
              <ExchangeTitle />
              <ExchangeForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exchange;
