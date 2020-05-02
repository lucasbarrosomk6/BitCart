import React from "react";
import "./tableItems.css";
import { ReactComponent as Flashcoin } from "../../assets/icons/image 16.svg";
import { ReactComponent as Ethereum } from "../../assets/icons/ethereum.svg";
import { ReactComponent as Bitcoin } from "../../assets/icons/Frame.svg";

//this component relies on the data being entered to have 7 keys. (in the order listed on the label in dashboard.)
//changes must be made if that is not the case

const TableItems = ({ data }) => {
  return (
    <div className="table-container">
      {data.map((item) => (
        <div className="table-item">
          {Object.values(item).map((itemValue) => (
            <div
              className={`item-value 
                ${
                  itemValue === "Processed"
                    ? "processed"
                    : itemValue === "Processing"
                    ? "processing"
                    : itemValue === "Canceled"
                    ? "canceled"
                    : ""
                }
             `}
            >
              {itemValue === "Bitcoin" ? (
                <Bitcoin
                  style={{
                    height: "50px",
                    width: "auto",
                    marginRight: "-15px",
                    position: "relative",
                    top: "3px",
                  }}
                />
              ) : itemValue === "Ethereum" ? (
                <Ethereum
                  style={{ height: "18px", width: "auto", marginRight: "3px" }}
                />
              ) : itemValue === "Flashcoin" ? (
                <Flashcoin
                  style={{ height: "18px", width: "auto", marginRight: "3px" }}
                />
              ) : null}
              {itemValue}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default TableItems;
