import React from "react";

function PriceCard(props) {
  // console.log(props);
  const { title, price, pricePer, currency, features } = props;
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {title}
            </h5>
            <h6 className="card-price text-center">
              {currency}
              {price}
              <span className="period">/{pricePer}</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {features[0].strong ? (
                  <strong>{features[0].name}</strong>
                ) : (
                  features[0].name
                )}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {features[1].name}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {features[2].name}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {features[3].name}
              </li>
              <li className={features[4].access ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      features[4].access ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {features[4].name}
              </li>
              <li className={features[5].access ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      features[5].access ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {features[5].name}
              </li>
              <li className={features[6].access ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      features[6].access ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {features[6].strong ? (
                  <>
                    <strong>Unlimited </strong>
                    {features[6].name}
                  </>
                ) : (
                  features[6].name
                )}
              </li>
              <li className={features[7].access ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      features[7].access ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {features[7].name}
              </li>
            </ul>
            <div className="d-grid">
              <a href="/" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceCard;