import React, { useEffect } from "react";

const LoanCircle = ({ loanSum, total }) => {
  useEffect(() => {
    const PI = 3.14159265;
    const circleRadius = document
      .getElementById("loan-calculator__result-line")
      .getAttribute("r");
    const resultLine = document.getElementById("loan-calculator__result-line");
    const circleLength = circleRadius * PI * 2;
    const strokeLength = (loanSum * circleLength) / total;
    resultLine.setAttribute("stroke-dasharray", `${strokeLength} 882`);
  }, [loanSum, total]);

  return (
    <div className="loan-calculator__result-wrapper">
      <svg
        className="loan-calculator__result loan-calculator__atol-result"
        width="338"
        height="338"
        viewBox="0 0 338 338"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          r="140"
          cx="50%"
          cy="50%"
          stroke="#23319D"
          strokeWidth="50"
        ></circle>
        <circle
          className="loan-calculator__result-line"
          id="loan-calculator__result-line"
          r="140"
          cx="50%"
          cy="50%"
          stroke="#FFA800"
          strokeWidth="50"
          strokeLinecap="round"
        ></circle>
        <text
          x="50%"
          y="160"
          textAnchor="middle"
          className="loan-calculator__result-value"
        >
          {total.toLocaleString()}
        </text>
        <text
          x="50%"
          y="180"
          textAnchor="middle"
          className="loan-calculator__result-text"
        >
          Общая сумма кредита
        </text>
      </svg>
    </div>
  );
};

export default LoanCircle;
