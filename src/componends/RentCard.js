import React, { useState } from "react";
import cardData from "./cardData.json";

function RentCard(props) {
  const likeVal = [];
  let i = 0;
  return (
    <div className="cardBody">
      {cardData
        .filter((item) => {
          if (props.searchPassValue === item.name.toLocaleLowerCase()) {
            return item;
          } else if (
            props.value[0] == "" &&
            props.value[1] == "" &&
            props.value[2] == "" &&
            props.value[3] == "" &&
            props.value[4] == ""
          ) {
            return item;
          } else if (
            props.value[0] === "City" &&
            props.value[1] === "Months" &&
            props.value[2] === "Years" &&
            props.value[3] === "Price" &&
            props.value[4] === "Type"
          ) {
            return item;
          } else if (
            props.value[0] === item.city &&
            props.value[1] === item.dateMonths &&
            props.value[2] == item.dateYears &&
            props.value[3] == item.price &&
            props.value[4] === item.type
          ) {
            return item;
          }
        })
        .map((item) => {
          const likeFunction = (Event) => {
            Event.preventDefault();
            document.documentElement.style.setProperty("--color-text", "red");
            likeVal[i] = item;
            props.onClick(likeVal);
            {
              /* console.log(likeVal); */
            }
            alert("Card Added on Like section page");
            i++;
          };

          return (
            <div className="cardItemBody">
              <div className="cardItem">
                <div className="cardImg">
                  <img src={item.img} />
                </div>
                <div className="cardTextBody">
                  <div className="cardText">
                    <h3>${item.price}/month</h3>
                    <button onClick={likeFunction}>like</button>
                    <h1>{item.name}</h1>
                    <p>
                      {item.address}, {item.city}
                    </p>
                    <p>{item.type}</p>
                    <p>
                      {item.dateMonths}/{item.dateYears}
                    </p>
                  </div>
                  <div className="requred">
                    <ul>
                      <li>{item.beds} Beds</li>
                      <li>{item.bathrooms} Bathrooms</li>
                      <li>{item.area} m²</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default RentCard;
