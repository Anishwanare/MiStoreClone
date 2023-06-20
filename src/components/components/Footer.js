import React from "react";
import "../styles/Footer.css";

const Footer = ({ footer }) => {
  return (
    <>
      <div className="footer">
        <div>
          <p>Support</p>
          {footer.support.map((item, index) => (
            <a href={item.url} key={item.name}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <p>Shop And Learn</p>
          {footer.shopAndLearn.map((item, index) => (
            <a href={item.url} key={item.name}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <p>retailStore</p>
          {footer.retailStore.map((item, index) => (
            <a href={item.url} key={item.name}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <p>aboutUS</p>
          {footer.aboutUS.map((item, index) => (
            <a href={item.url} key={item.name}>
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <p>contactUs</p>
          {footer.contactUs.map((item, index) => (
            <a href={item.url} key={item.name}>
              {item.name}
            </a>
          ))}
        </div>
        <div style={{ margin: "1vmax" }}>
          <div
            style={{
              fontSize: "0.8vmax",
              fontWeight: "lighter",
              color: "white",
              margin: "1vmax 0",
            }}
          >
            Chat with our Visual AI bot <br /> (24/7 Live Agent Support)
          </div>
          <button
            type="button"
            style={{
              width: "45%",
              fontSize: "1vmax",
              padding: "0.4vmax",
              backgroundColor: "rgb(50, 50, 50)",
              border: "2px solid white",
              color: "white",
            }}
          >
            Chat Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
