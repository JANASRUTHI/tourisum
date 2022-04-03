import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./Apps.css";
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Twitter } from "./twitter.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";
import { ReactComponent as Instagram } from "./instagram.svg";

class Footer extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="footerBody">
        <Container>
          <header className="headerTitle text-center">
            <p>
              <b>CAN'T WAIT TO GET INVOLVED</b>
            </p>
            <p>
              <b>CONNECT WITH US NOW</b>
            </p>
          </header>
          <footer className="svg-group text-center">
            <Row>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Facebook width="50" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Twitter width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Linkedin width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Instagram width="55" height="55" strokeWidth="1" />
                  </a>
                </div>
              </Col>
            </Row>
            <hr />
            <br />
            <p>copyright 2019 | Mysore Tourism</p>
          </footer>
        </Container>
      </div>
    );
  }
}

export default Footer;