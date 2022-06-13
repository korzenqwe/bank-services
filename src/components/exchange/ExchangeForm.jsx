import React, { useState, useEffect } from "react";
import ExchangeTitle from "./ExchangeTitle";
import Courses from "./Courses";
import Selects from "./Selects";
import ExchangeInputs from "./ExchangeInputs";

const ExchangeForm = () => {
  const [moneyInput, setMoneyInput] = useState("");
  const [value, setValue] = useState("");
  const [selectGive, setSelectGive] = useState("RUB");
  const [selectTake, setSelectTake] = useState("USD");
  const [rates, setRates] = useState({});

  useEffect(() => {
    (async () => {
      const responce = await fetch(
        "https://www.cbr-xml-daily.ru/daily_json.js"
      );
      const data = await responce.json();
      const dataObj = {
        USD: data.Valute.USD.Value.toFixed(2),
        EUR: data.Valute.EUR.Value.toFixed(2),
        GBP: data.Valute.GBP.Value.toFixed(2),
        RUB: "1",
      };
      setRates(dataObj);
    })();
  }, []);

  useEffect(() => {
    Object.entries(rates).map((el) => {
      if (selectGive === el[0]) {
        let zero = (
          (moneyInput * rates[selectGive]) /
          rates[selectTake]
        ).toFixed(4);
        if (zero % 1 === 0) {
          setValue(Math.round(zero));
        } else {
          setValue(zero);
        }
      }
      return [moneyInput, rates, selectGive, selectTake];
    });
  });

  const changeSelectGive = (e) => {
    setSelectGive(e.target.value);
  };
  const changeSelectTake = (e) => {
    setSelectTake(e.target.value);
  };

  return (
    <>
      <ExchangeTitle />

      <Courses rates={rates} />

      <Selects
        changeSelectGive={changeSelectGive}
        selectGive={selectGive}
        changeSelectTake={changeSelectTake}
        selectTake={selectTake}
      />

      <ExchangeInputs
        moneyInput={moneyInput}
        setMoneyInput={setMoneyInput}
        value={value}
      />
    </>
  );
};

export default ExchangeForm;
