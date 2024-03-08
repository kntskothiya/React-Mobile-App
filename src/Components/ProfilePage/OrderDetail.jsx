import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import "../ProfilePage/ProfilePage.css";
import Footer from "../Footerpart/Footer";
import { Link } from "react-router-dom";

const OrderDetail = () => {
  return (
    <div className="order-details-page">
      <section className="container">
        <section className="top-part">
          <div className="pt-3 pb-2 d-flex justify-content-between">
            <Link to="/myorder" className="nav-link">
              <ArrowBackIosNewIcon />
            </Link>
            <h5 className="fw-bold">Order Details</h5>
            <SearchIcon className="fs-1" />
          </div>
        </section>

        <section className="order-status">
          <div>
            <div className="d-flex justify-content-between ps-2 pe-2 pt-3 pb-2">
              <span className="fw-bold">Order: 1947034</span>
              <span className="order-number">05-12-2019</span>
            </div>
            <div className="d-flex justify-content-between ps-2 pe-2 pb-2">
              <span className="order-number">
                Tracking number:{" "}
                <span className="text-dark fw-bold">IW3475453455</span>
              </span>
              <span className="text-success fw-bold">Delivered</span>
            </div>
          </div>

          <p className="ms-2 fw-bold">3 items</p>

          <div className="product">
            <div className="row mb-4 bg-white">
              <div className="col-3">
                <img
                  src="../K.jpg"
                  className="cartproduct-image"
                  height={"100%"}
                  width={"100px"}
                />
              </div>
              <div className="col-9 ps-5">
                <div>
                  <h5 className="mt-2">Pullover</h5>
                  <span className="mt-2 color">Mango</span>
                </div>
                <div className="d-flex">
                  <span className="me-1 color">Color :</span>
                  <span>Black</span>
                  <span className="ms-3 me-1 color">Size :</span>
                  <span>L</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span className="color">Units : {"1"}</span>
                  <span className="fw-bold product-price me-3"> 51$ </span>
                </div>
              </div>
            </div>

            <div className="row mb-4 bg-white">
              <div className="col-3">
                <img
                  src="../K.jpg"
                  className="cartproduct-image"
                  height={"100%"}
                  width={"100px"}
                />
              </div>
              <div className="col-9 ps-5">
                <div>
                  <h5 className="mt-2">Pullover</h5>
                  <span className="mt-2 color">Mango</span>
                </div>
                <div className="d-flex">
                  <span className="me-1 color">Color :</span>
                  <span>Black</span>
                  <span className="ms-3 me-1 color">Size :</span>
                  <span>L</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span className="color">Units : {"1"}</span>
                  <span className="fw-bold product-price me-3"> 51$ </span>
                </div>
              </div>
            </div>

            <div className="row mb-4 bg-white">
              <div className="col-3">
                <img
                  src="../K.jpg"
                  className="cartproduct-image"
                  height={"100%"}
                  width={"100px"}
                />
              </div>
              <div className="col-9 ps-5">
                <div>
                  <h5 className="mt-2">Pullover</h5>
                  <span className="mt-2 color">Mango</span>
                </div>
                <div className="d-flex">
                  <span className="me-1 color">Color :</span>
                  <span>Black</span>
                  <span className="ms-3 me-1 color">Size :</span>
                  <span>L</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span className="color">Units : {"1"}</span>
                  <span className="fw-bold product-price me-3"> 51$ </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default OrderDetail;
