import React from "react";
import SelectFrom from "../components/SelectFrom";
import SelectTo from "../components/SelectTo";

const Selects = ({changeSelectGive, selectGive, changeSelectTake, selectTake}) => {
  return (
    <div className="row mb-1">
      <SelectFrom changeSelectGive={changeSelectGive} selectGive={selectGive} />

      <SelectTo changeSelectTake={changeSelectTake} selectTake={selectTake} />
    </div>
  );
};

export default Selects;
