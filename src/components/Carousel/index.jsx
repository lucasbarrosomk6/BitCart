import React, { useRef } from "react";
import "./carousel.css";
import { ReactComponent as Left } from "../../assets/icons/chevron-left.svg";
import { ReactComponent as Right } from "../../assets/icons/chevron-right.svg";

const Carousel = ({ data }) => {
  const carouselContainer = useRef(null);
  const currencyContainer = useRef(null);

  const changeScrollPosition = (left) => {
    const scrollDistance = currencyContainer.current.clientWidth;
    if (left) {
      carouselContainer.current.scrollLeft =
        carouselContainer.current.scrollLeft - scrollDistance;
      console.log("went left");
    } else {
      carouselContainer.current.scrollLeft =
        carouselContainer.current.scrollLeft + scrollDistance;
      console.log("went right");
    }
  };
  return (
    <div className="outer-carousel-container">
      <div
        className="scroll-arrow-left"
        onClick={() => changeScrollPosition(true)}
      >
        <Left />
      </div>

      <div className="carousel-container" id="carousel" ref={carouselContainer}>
        {data.map((item) => (
          <div
            className="currency-container"
            key={item.currency}
            id="currency-container-id"
            ref={currencyContainer}
          >
            <div className="blank-space-left"></div>
            <div className="currency-info">
              <div className="currency-top">
                <div className="name-change-container">
                  <h3 className="currency-name">{item.currency}</h3>
                  <p className="currency-change">+12%</p>
                </div>

                <p>{item.currencyShort}</p>
              </div>
              <div className="currency-bot">
                <p>Price</p>
                <h3>GHC 43,867</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="scroll-arrow-right"
        onClick={() => changeScrollPosition(false)}
      >
        <Right />
      </div>
    </div>
  );
};

export default Carousel;
