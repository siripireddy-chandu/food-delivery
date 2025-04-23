import React, { useEffect, useRef } from 'react';
import { Toast } from 'bootstrap';

const CartToast = ({ show, onClose }) => {
  const toastRef = useRef(null);

  useEffect(() => {
    if (show && toastRef.current) {
      const toast = new Toast(toastRef.current);
      toast.show();
      
      // Handle when toast is hidden
      toastRef.current.addEventListener('hidden.bs.toast', onClose);
      
      return () => {
        toastRef.current?.removeEventListener('hidden.bs.toast', onClose);
      };
    }
  }, [show, onClose]);

  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        ref={toastRef}
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-bs-autohide="true"
        data-bs-delay="3000"
      >
        <div className="toast-body">
          <div className="d-flex gap-4">
            <span>
              <i className="fa-solid fa-circle-check fa-lg text-success"></i>
            </span>
            <div className="d-flex flex-column flex-grow-1 gap-2">
              <div className="d-flex align-items-center">
                <span className="fw-semibold">Item added to cart!</span>
                <button
                  type="button"
                  className="btn-close btn-close-sm ms-auto"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartToast;