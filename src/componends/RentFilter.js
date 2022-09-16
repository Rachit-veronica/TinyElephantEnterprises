import React, { Component, useState } from "react";
import RentCard from "./RentCard";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function RentFilter(props) {
  const [locationValue, setLocationValue] = useState("");
  const [monthsValue, setMonthsValue] = useState("");
  const [yearsValue, setYearsValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [btnpress, setBtnpress] = useState(true);
  const press = false;
  let passvalue = [
    locationValue,
    monthsValue,
    yearsValue,
    priceValue,
    typeValue,
    press,
  ];
  const valuePassFunction = (Event) => {
    Event.preventDefault();
    props.onSubmit(passvalue);
  };
  return (
    <>
      <form onSubmit={valuePassFunction}>
        <div className="filter">
          <div className="firstCol">
            <div className="location">
              <div className="locationText">
                <p>Location</p>
                <h1>*</h1>
              </div>
              <select
                value={locationValue}
                onChange={(Event) => setLocationValue(Event.target.value)}
              >
                <option>City</option>
                <option>Kanpur</option>
                <option>Lucknow</option>
                <option>Pune</option>
              </select>
            </div>
            <div className="line1"></div>
            <div className="date">
              <div className="dateText">
                <p>When</p>
                <h1>*</h1>
              </div>
              <p id="moveText">Select Move-in Date </p>
              <div className="dateInput">
                <div className="months">
                  <select
                    value={monthsValue}
                    onChange={(Event) => setMonthsValue(Event.target.value)}
                  >
                    <option>Months</option>
                    <option>January</option>
                    <option>February</option>
                    {/* <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option> */}
                  </select>
                </div>
                <div className="years">
                  <select
                    value={yearsValue}
                    onChange={(Event) => setYearsValue(Event.target.value)}
                  >
                    <option>Years</option>
                    <option>2022</option>
                  </select>
                </div>

                {/* <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              dateFormat="yyyy/mm/dd"
              minDate={new Date()}
              showMonthDropdown
            /> */}
              </div>
            </div>
          </div>
          <div className="line2"></div>
          <div className="secondCol">
            <div className="price">
              <div className="priceText">
                <p>Price</p>
                <h1>*</h1>
              </div>
              <select
                value={priceValue}
                onChange={(e) => setPriceValue(e.target.value)}
              >
                <option>Price</option>
                <option>500</option>
                <option>2500</option>
                {/* <option>4500</option> */}
                {/* <option>6500</option> */}
              </select>
            </div>
            <div className="line3"></div>
            <div className="property">
              <div className="propertyText">
                <p>Property Type</p>
                <h1>*</h1>
              </div>
              <select
                value={typeValue}
                onChange={(e) => setTypeValue(e.target.value)}
              >
                <option>Type</option>
                <option>Houses</option>
                <option>Rooms</option>
              </select>
            </div>
          </div>
          <div className="thirdCol">
            <div className="line4"></div>
            <div className="searchBtn">
              <button type="submit">Search / Show</button>
            </div>
          </div>
        </div>
      </form>
      {/* <RentCard value={passvalue} /> */}
    </>
  );
}

export default RentFilter;
