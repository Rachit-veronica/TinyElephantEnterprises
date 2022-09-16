import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./componends/Navbar";
import "./componends/navbar.style.css";
import "./componends/home.style.css";
import RentCard from "./componends/RentCard";
import RentFilter from "./componends/RentFilter";
import RentTitleText from "./componends/RentTitleText";
import "./componends/filter.style.css";
import "./componends/card.style.css";

function App() {
  let [filterValue, setFiltreValue] = useState([]);
  const getFilterData = (data) => {
    setFiltreValue(data);
  };
  let [searchValue, setSearchValue] = useState("");
  const getSearchData = (data1) => {
    setSearchValue(data1);
  };
  return (
    <div>
      <Navbar />
      <div className="landingPageBody">
        {<RentTitleText onSubmit={getSearchData} />}
        {<RentFilter onSubmit={getFilterData} />}
        {<RentCard value={filterValue} searchPassValue={searchValue} />}
      </div>
    </div>
  );
}

export default App;
