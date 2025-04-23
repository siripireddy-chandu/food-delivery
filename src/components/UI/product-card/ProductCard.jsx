import React, { useRef } from "react";
import "../../../styles/product-card.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, title, image01, price, extraIngredients } = props.item;
  const dispatch = useDispatch();
  const toastRef = useRef(null);

  const handleAddToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
        extraIngredients
      })
    );
    
    // Initialize and show toast
    if (window.bootstrap && window.bootstrap.Toast) {
      const toast = new window.bootstrap.Toast(toastRef.current);
      toast.show();
    }
  };

  return (
    <div className="product__item d-flex flex-column justify-content-between">
      <div className="product__content">
        <img className="product__img w-50" src={image01} alt="Pizza" />
        <h5>
          <Link to={`/pizzas/${id}`}>{title}</Link>
        </h5>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between">
        <span className="product__price mb-2">₹ {price} </span>
        <button className="addTOCART__btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
      
      {/* Toast Notification */}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <div
          ref={toastRef}
          className="toast align-items-center text-white bg-success border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              <i className="fas fa-check-circle me-2"></i>
              {title} added to cart!
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;