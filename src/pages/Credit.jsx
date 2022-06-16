import React from "react";
import CreditTitle from "../components/credit/CreditTitle";
import CreditForm from "../components/credit/CreditForm";
import "../components/credit/credit.css";

const Credit = () => {
  return (
    <>
      <div className="container pt-4 pb-5">
        <div className="row justify-content-center">
          <div className="col-11">
            <div className="card p-3">
              <CreditTitle />
              <CreditForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credit;
