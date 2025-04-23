import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Heart,
  LogoTwitter,
  LogoFacebook,
  LogoInstagram,
} from "react-ionicons";

const Footer = () => {
  return (
    <footer className="footer-07 bg-danger py-0">
      <Container>
        {/* Main Footer Content */}
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <h2 className="footer-heading mb-4">
              <p href="#" className="logo text-decoration-none text-white mt-1">
                pedarasi peddamma vantillu
              </p>
            </h2>

            {/* Navigation Links */}
            <div className="=d-flex">
              <a href="/home" className="text-decoration-none text-white mx-2">
                Home
              </a>
              <a href="#" className="text-decoration-none text-white mx-2">
                About
              </a>
              <a href="#" className="text-decoration-none text-white mx-2">
                Blog
              </a>
              <a href="#" className="text-decoration-none text-white mx-2">
                Contact
              </a>
            </div>
            {/* Social Icons */}
            <ul className="ftco-footer-social list-unstyled p-0 mt-4">
              <li className="ftco-animate d-inline-block mx-2">
                <a href="#" title="Twitter">
                  <LogoTwitter style={{ width: "24px", height: "24px" }} />
                </a>
              </li>
              <li className="ftco-animate d-inline-block mx-2">
                <a href="#" title="Facebook">
                  <LogoFacebook style={{ width: "24px", height: "24px" }} />
                </a>
              </li>
              <li className="ftco-animate d-inline-block mx-2">
                <a href="#" title="Instagram">
                  <LogoInstagram style={{ width: "24px", height: "24px" }} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-1">
          <Col md={12} className="text-center">
            <p className="copyright text-white">
              Copyright © {new Date().getFullYear()} All rights reserved
              {/* <a
                href="https://colorlib.com"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                Colorlib.com
              </a> */}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
