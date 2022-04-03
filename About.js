import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Apps.css";
import MainCarousel from "./Carousel";
import { ReactComponent as Award } from "./award.svg";
import { ReactComponent as Shield } from "./shield.svg";
import { ReactComponent as Compass } from "./compass.svg";
import { ReactComponent as Heart } from "./heart.svg";

class About extends Component {
  render() {
    return (
      <div id='about'>
        <MainCarousel />

        <div className="subComponent" id="aboutBody">
          <Container>
            <header className="headerTitle text-center">
              <h1>About Travel</h1>
              <p>Tour Guide & Private Guided Tours</p>
            </header>
            <section className="svg-group text-center subComponent">
              <Row>
                <Col lg="1" md="6" sm="6">
                  <div className="svg-card">
                    <Award width="48" height="48" strokeWidth="1" />
                    <p>Best Price Guarantee</p>
                  </div>
                </Col>
                <Col lg="1" md="6" sm="6">
                  <div className="svg-card">
                    <Shield width="48" height="48" strokeWidth="1" />
                    <p>Trust and Safety</p>
                  </div>
                </Col>
                <Col lg="1" md="6" sm="6">
                  <div className="svg-card">
                    <Heart width="48" height="48" strokeWidth="1" />
                    <p>Best Travel Agent</p>
                  </div>
                </Col>
                <Col lg="1" md="6" sm="6">
                  <div className="svg-card">
                    <Compass width="48" height="48" strokeWidth="1" />
                    <p>Travel Insurance</p>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;