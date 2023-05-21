import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiGithub,
  SiTelegram,
  SiInstagram,
} from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Made with ❤️ by Saurav Rawat</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} balbheji</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SauRavRwT"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/balbheji"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTelegram />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/rawatsensei"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
