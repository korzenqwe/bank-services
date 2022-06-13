import React from "react";

const InputTo = ({ value }) => {
  return (
    <div className="col">
      <input
        id="result"
        type="number"
        className="form-control"
        defaultValue={value}
        disabled={true}
      />
    </div>
  );
};

export default InputTo;
