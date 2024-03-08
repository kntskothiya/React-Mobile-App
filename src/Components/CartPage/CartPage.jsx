import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "../CartPage/CartPage.css";
import Form from "react-bootstrap/Form";
import Footer from "../Footerpart/Footer";

const CartPage = () => {
  return (
    <section className="container-fluid cart-page">
      <section className="top-part">
        <div className="d-flex justify-content-end">
          <SearchIcon className="search-icon" />
        </div>
        <h1 className="fw-bold mt-3 mb-4">My Bag</h1>
      </section>
      <section className="cartprouct-part">
        <div className="product">
          <div className="row mb-4">
            <div className="col-3">
              <img
                src="../K.jpg"
                className="cartproduct-image"
                height={"100%"}
                width={"100px"}
              />
            </div>
            <div className="col-9 ps-5">
              <div className="d-flex justify-content-between">
                <h3 className="mt-2">Pullover</h3>
                <MoreVertIcon className="more-icon" />
              </div>
              <div className="d-flex">
                <p className="me-1 color">Color :</p>
                <p>Black</p>
                <p className="ms-3 me-1 size">Size :</p>
                <p>L</p>
              </div>
              <div className="d-flex justify-content-between align-items-baseline">
                <div>
                  <img src="../minus.svg" alt="minus not found" /> 1
                  <img src="../plus.svg" alt="plus not found" />
                </div>
                <div className="fw-bold product-price me-3"> 51$ </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-3">
              <img
                src="../K.jpg"
                className="cartproduct-image"
                height={"100%"}
                width={"100px"}
              />
            </div>
            <div className="col-9 ps-5">
              <div className="d-flex justify-content-between">
                <h3 className="mt-2">Pullover</h3>
                <MoreVertIcon className="more-icon" />
              </div>
              <div className="d-flex">
                <p className="me-1 color">Color :</p>
                <p>Black</p>
                <p className="ms-3 me-1 size">Size :</p>
                <p>L</p>
              </div>
              <div className="d-flex justify-content-between align-items-baseline">
                <div>
                  <img src="../minus.svg" alt="minus not found" /> 1
                  <img src="../plus.svg" alt="plus not found" />
                </div>
                <div className="fw-bold product-price me-3"> 51$ </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-3">
              <img
                src="../K.jpg"
                className="cartproduct-image"
                height={"100%"}
                width={"100px"}
              />
            </div>
            <div className="col-9 ps-5">
              <div className="d-flex justify-content-between">
                <h3 className="mt-2">Pullover</h3>
                <MoreVertIcon className="more-icon" />
              </div>
              <div className="d-flex">
                <p className="me-1 color">Color :</p>
                <p>Black</p>
                <p className="ms-3 me-1 size">Size :</p>
                <p>L</p>
              </div>
              <div className="d-flex justify-content-between align-items-baseline">
                <div>
                  <img src="../minus.svg" alt="minus not found" /> 1
                  <img src="../plus.svg" alt="plus not found" />
                </div>
                <div className="fw-bold product-price me-3"> 51$ </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", width: "100%" }}>
          <Form.Control
            type="text"
            className="promocode-field mb-4"
            placeholder="Enter your promo code"
          />
          <ArrowCircleRightIcon className="right-arrow" />
        </div>

        <div className="d-flex justify-content-between">
          <h6 className="color">Total amount:</h6>
          <h5 className="me-2">{"124$"}</h5>
        </div>

        <button className="w-100 checkout-btn p-2 mb-4 rounded-pill border-0 mt-3">
          CHECK OUT
        </button>
      </section>
      <Footer />
    </section>
  );
};

export default CartPage;
