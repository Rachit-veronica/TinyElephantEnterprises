import React, { useState } from "react";

function RentTitleText(props) {
  let [searchVal, setSearchVal] = useState("");
  const searchValPass = (Event) => {
    Event.preventDefault();
    props.onSubmit(searchVal.toLocaleLowerCase());
  };
  return (
    <>
      <div className="note">
        <div className="noteBody">
          <div className="noteTitle">
            <h2>Note :-</h2>
            <p>Please read note before doing any operations</p>
          </div>
          <div className="noteList">
            <ul>
              <li>Press the button(search/show) to show all cards</li>
              <li>Answer all Filter Bar questions</li>
              <li>The filter bar and search bar filter the card separately</li>
              <li>Thank You</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="landingPageTitle">
        <div className="titleText">
          <h1>Search Propreties To Rent</h1>
        </div>
        <div className="searchbar">
          <form onSubmit={searchValPass}>
            <input
              placeholder="Search Bar"
              value={searchVal}
              onChange={(Event) => setSearchVal(Event.target.value)}
            ></input>
            {/* <button type="submit">search</button> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default RentTitleText;
