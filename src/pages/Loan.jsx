import React from "react";
import LoanTitle from "../components/loan/LoanTitle";
import LoanForm from "../components/loan/LoanForm";
import "../components/loan/loan.css";

const Deposit = () => {
  return (
    <div className="container pt-4 pb-5">
      <div className="row justify-content-center">
        <div className="col-11">
          <div className="card p-3">
            <LoanTitle />
            <LoanForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
