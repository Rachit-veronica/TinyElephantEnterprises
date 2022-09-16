import React from "react";

const LikeCard = (props) => {
  const item = props.CardlikeValue[0];
  if (item == null) {
    return (
      <h1>
        There are no (like cards), Please hit the like button on the card in the
        Rent page
      </h1>
    );
  } else {
    return (
      <div className="cardItemBody">
        <div className="cardItem">
          <div className="cardImg">
            <img src={item.img} />
          </div>
          <div className="cardTextBody">
            <div className="cardText">
              <h3>${item.price}/month</h3>

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
  }
};

export default LikeCard;
