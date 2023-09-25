import React from "react";
import heroImg from "./assets/123.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contenful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            praesentium ipsum sequi neque dignissimos, repellendus ratione natus
            nam beatae dolor debitis facilis quisquam expedita aliquid, porro
            accusamus similique magnam! Repellat.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="123" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
