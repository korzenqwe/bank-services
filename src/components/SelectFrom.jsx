import React from "react";

const SelectFrom = ({selectGive, changeSelectGive}) => {
  return (
    <div className="col">
      <label htmlFor="name">Отдаю:</label>
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        value={selectGive}
        onChange={(e) => changeSelectGive(e)}
      >
        <option value="RUB">RUB — Российский рубль</option>
        <option value="USD">USD — Доллар США</option>
        <option value="EUR">EUR — Евро</option>
        <option value="GBP">GPB — Фунт стерлингов</option>
      </select>
    </div>
  );
};

export default SelectFrom;
