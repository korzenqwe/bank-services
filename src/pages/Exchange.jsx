import React from "react";
import ExchangeForm from "../components/ExchangeForm";
import "../styles/exchange.css";

const Exchange = () => {
  return (
    <>
      <div className="workplace">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="card p-3">
                <ExchangeForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exchange;
