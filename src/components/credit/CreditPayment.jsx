import React from "react";

const CreditPayment = () => {
  return (
    <section className="carlculator__table-result">
      <h3 className="calculator__h2">График платежей</h3>
      <div className="table-wrapper table-wrapper--secondary">
        <table className="credits-offers__table">
          <thead className="credit-offers__thead">
            <tr>
              <th className="th-padding-standart">Дата платежа</th>
              <th className="th-padding-standart">Остаток задолженности</th>
              <th className="th-padding-standart">Начисленные проценты</th>
              <th className="th-padding-standart">Платеж в основной долг</th>
              <th className="th-padding-standart">Сумма платежа</th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
  );
};

export default CreditPayment;
