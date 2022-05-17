import React from "react";

  const SelectTo = ({selectTake, changeSelectTake}) => {
  return (
    <div className="col">
      <label htmlFor="name">Получаю:</label>
      <select
        id="select"
        className="form-control"
        value={selectTake}
        onChange={(e) => changeSelectTake(e)}
      >
        <option value="RUB">RUB — Российский рубль</option>
        <option value="USD">USD — Доллар США</option>
        <option value="EUR">EUR — Евро</option>
        <option value="GBP">GPB — Фунт стерлингов</option>
      </select>
    </div>
  );
};

export default SelectTo;
