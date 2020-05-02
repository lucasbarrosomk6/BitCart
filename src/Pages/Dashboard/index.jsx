import React, { Component } from "react";
import "./dashboard.css";
import Carousel from "../../components/Carousel";
import TableItems from "../../components/TableItems";
import Popup from "../../components/Popup";

class DashBoard extends Component {
  state = {
    currencies: [
      {
        currency: "Bitcoin",
        currencyShort: "BTC",
      },
      {
        currency: "Flashcoin",
        currencyShort: "Flash",
      },
      {
        currency: "Ethereum",
        currencyShort: "ETH",
      },
      {
        currency: "invented",
        currencyShort: "ETH",
      },
    ],
    transactionLabels: [
      "ID",
      "Type",
      "Product",
      "Date",
      "Amount (from)",
      "Amount (to)",
      "Status",
    ],
    transactionData: [
      {
        ID: "#154584",
        Type: "Exchange",
        Product: "Ethereum",
        date: "27th April 2020",
        "Amount(from)": "0.005674 BTC",
        "Amount(to)": "10,000 GHC",
        status: "Processing",
      },
      {
        ID: "#154584",
        Type: "Exchange",
        Product: "Flashcoin",
        date: "27th April 2020",
        "Amount(from)": "0.005674 BTC",
        "Amount(to)": "10,000 GHC",
        status: "Processed",
      },
      {
        ID: "#154584",
        Type: "Exchange",
        Product: "Ethereum",
        date: "27th April 2020",
        "Amount(from)": "0.005674 BTC",
        "Amount(to)": "10,000 GHC",
        status: "Canceled",
      },
      {
        ID: "#154584",
        Type: "Exchange",
        Product: "Flashcoin",
        date: "27th April 2020",
        "Amount(from)": "0.005674 BTC",
        "Amount(to)": "10,000 GHC",
        status: "Processed",
      },
      {
        ID: "#154584",
        Type: "Exchange",
        Product: "Bitcoin",
        date: "27th April 2020",
        "Amount(from)": "0.005674 BTC",
        "Amount(to)": "10,000 GHC",
        status: "Processed",
      },
    ],
    open: false,
  };
  toggleOpen = () => this.setState({ open: !this.state.open });
  render() {
    const { currencies, transactionLabels, transactionData, open } = this.state;
    return (
      <>
        <Carousel data={currencies} />
        <div className="recent-transations">
          <div className="rt-title">
            <h1>Recent Transactions</h1>
            <div className="view-all" onClick={this.toggleOpen}>
              <p>View All</p>
              <Popup open={open} toggleOpen={this.toggleOpen}>
                <h1>Suhhhh dude?</h1>
              </Popup>
            </div>
          </div>
          <div className="rt-labels">
            {transactionLabels.map((item, index) => (
              <div key={index} className="label">
                {item}
              </div>
            ))}
          </div>
          <div className="rt-map">
            <TableItems data={transactionData} />
          </div>
        </div>
      </>
    );
  }
}

export default DashBoard;
