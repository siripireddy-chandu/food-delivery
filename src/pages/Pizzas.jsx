import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";

const Pizzas = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products;

  const productPerPage = 4;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All Pizzas">
      <Container>
        <Row>
          {displayPage.map((item) => (
            <Col
              lg="3"
              md="4"
              sm="6"
              xs="6"
              key={item.id}
              className="mb-4 mt-4"
            >
              <ProductCard item={item} />
            </Col>
          ))}
          <div className="d-flex justify-content-center mt-4 mb-4">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={<i className="ri-arrow-left-s-line"></i>}
              nextLabel={<i className="ri-arrow-right-s-line"></i>}
              containerClassName="pagination pagination-circle justify-content-center mt-4"
              pageClassName="page-item"
              pageLinkClassName="page-link rounded-circle mx-1"
              previousClassName="page-item"
              previousLinkClassName="page-link rounded-circle mx-1"
              nextClassName="page-item"
              nextLinkClassName="page-link  rounded-circle mx-1"
              activeClassName="active"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link rounded-circle mx-1"
            />
          </div>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Pizzas;
