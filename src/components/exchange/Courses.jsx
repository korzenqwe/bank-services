import React from "react";
import "./exchange.css";

const Courses = (rates) => {
  return (
    <div className="courses">
      <div className="course-item card card-body">
        <div className="course-item-title">Курс USD</div>
        <div className="course-item-value" data-value="USD">
          {rates.rates.USD}
        </div>
      </div>
      <div className="course-item card card-body">
        <div className="course-item-title">Курс EUR</div>
        <div className="course-item-value" data-value="EUR">
          {rates.rates.EUR}
        </div>
      </div>
      <div className="course-item card card-body">
        <div className="course-item-title">Курс GPB</div>
        <div className="course-item-value" data-value="GBP">
          {rates.rates.GBP}
        </div>
      </div>
    </div>
  );
};

export default Courses;
