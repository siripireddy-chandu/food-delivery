import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import guyImg from "../assets/images/delivery-guy.png";
import "../styles/hero-section.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favorite food
                </h1>

                <button
                  className="order__btn d-flex align-items-center justify-content-between "
                  onClick={() => navigate("/pizzas")}
                >
                  <img
                    src="assets/assets/menu2.png"
                    alt="Button Image"
                    style={{ width: "30px", height: "auto" }}
                  />
                  <span className="ms-2">Menu</span>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
