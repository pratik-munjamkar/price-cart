import React, { Component } from "react";
import "./Price.css";
import PriceCard from "./priceCard";
import priceData from "./PricingData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { priceData };
  }
  render() {
    // console.log(this.state);
    return (
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {this.state.priceData.map(
              ({ title, price, pricePer, currency, features, strong }) => {
                return (
                  <PriceCard
                    title={title}
                    price={price}
                    pricePer={pricePer}
                    currency={currency}
                    features={features}
                    strong={strong}
                    key={price}
                  />
                );
              }
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default App;