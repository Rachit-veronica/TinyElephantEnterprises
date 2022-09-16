import "./App.css";
import { useState } from "react";
import Navbar from "./componends/Navbar";
import "./componends/navbar.style.css";
import RentTitleText from "./componends/RentTitleText";
import "./componends/home.style.css";
import RentCard from "./componends/RentCard";
import "./componends/card.style.css";
import RentFilter from "./componends/RentFilter";
import "./componends/filter.style.css";
import LikeCard from "./componends/LikeCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [filterValue, setFiltreValue] = useState([]);
  const getFilterData = (data) => {
    setFiltreValue(data);
  };
  let [searchValue, setSearchValue] = useState("");
  const getSearchData = (data1) => {
    setSearchValue(data1);
  };
  let [likeValue, setLikeValue] = useState([]);
  const likePassValue = (data2) => {
    setLikeValue(data2);
    // console.log(data2);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="landingPageBody">
                <RentTitleText onSubmit={getSearchData} />
                <RentFilter onSubmit={getFilterData} />
                <RentCard
                  value={filterValue}
                  searchPassValue={searchValue}
                  onClick={likePassValue}
                />
              </div>
            }
          ></Route>
          <Route
            path="like"
            element={
              <div className="landingPageBody">
                <LikeCard CardlikeValue={likeValue} />
              </div>
            }
          ></Route>
          <Route
            path="buy"
            element={
              <div className="appBuy">
                <h1>
                  This buys page does not contain any specified content by
                  assignment
                </h1>
              </div>
            }
          ></Route>
          <Route
            path="sell"
            element={
              <div className="appSell">
                <h1>
                  This sell page does not contain any specified content by
                  assignment
                </h1>
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <LikeCard CardlikeValue={likeValue} /> */}
    </>
  );
}

export default App;
