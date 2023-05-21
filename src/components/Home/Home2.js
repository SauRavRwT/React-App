import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/experience.svg";
import Tilt from "react-parallax-tilt";
import {
  SiGithub,
  SiTelegram,
  SiInstagram,
} from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> ME
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something....
              <br />
              <br />I am Good in classics like
              <i>
                <b className="blue"> C++, Javascript and Bootstrap5. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="blue">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="blue">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="blue">Node.js</b> and
              <i>
                <b className="blue">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SauRavRwT"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/balbheji"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rawatsensei"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
