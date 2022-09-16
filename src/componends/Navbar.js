import React from "react";

function Navbar() {
  return (
    <div className="navbarbody">
      <div className="navbarLeftSide">
        <div className="navbarList">
          <div className="logo">
            <h1>Estatery</h1>
          </div>
          <div>
            <ul>
              <li>Rent</li>
              <li>Buy</li>
              <li>Sell</li>
              <li>
                <select>
                  <option>Manage Property</option>
                  <option>Manage Property</option>
                </select>
              </li>
              <li>
                <select>
                  <option>Resources</option>
                  <option>Resources</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbarRightSide">
        <button id="loginBtn">Login</button>
        <button id="signBtn">Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
