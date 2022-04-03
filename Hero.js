import React from "react";
import { Button } from "reactstrap";
import "./Apps.css";
const Hero = () => (
  <div>
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>Mysore Tourism</h1>
          <h3>Tours | Travel | Guide</h3>
          <Button outline color="warning" href="#about">
            Explore More
          </Button>
        </div>
      </section>
    </main>
  </div>
);

export default Hero;