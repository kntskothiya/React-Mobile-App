import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import "../ProfilePage/ProfilePage.css";
import Footer from "../Footerpart/Footer";
import { Link } from "react-router-dom";

const MyOrder = () => {
  return (
    <section className="container-fluid order-page">
      <section className="top-part">
        <div className="pt-3 pb-2 d-flex justify-content-between">
          <Link to="/profile" className="nav-link">
            <ArrowBackIosNewIcon />
          </Link>
          <SearchIcon className="fs-1" />
        </div>
        <h1 className="fw-bold mt-3 mb-4">My Orders</h1>

        <div className="d-flex justify-content-between">
          <button className="order-btn">Delivered</button>
          <button className="order-btn">Processing</button>
          <button className="order-btn">Cancelled</button>
        </div>
      </section>

      <section className="order-status">
        <div className="mt-4 order-details">
          <div className="d-flex justify-content-between ps-4 pe-4 pt-3 pb-2">
            <span>Order: 1947034</span>
            <span className="order-number">05-12-2019</span>
          </div>
          <div className="d-flex justify-content-between ps-4 pe-4 pb-2">
            <span className="order-number">
              Qunatity : <span className="text-dark">{3}</span>
            </span>
            <span className="order-number">
              Total Amount : <span className="text-dark">{"110$"}</span>
            </span>
          </div>
          <div className="d-flex justify-content-between ps-4 pe-4 pb-2">
            <Link to="/orderdetails">
              <button className="details-btn">Details</button>
            </Link>
            <span className="text-success fw-bold">Delivered</span>
          </div>
        </div>

        <div className="mt-4 order-details">
          <div className="d-flex justify-content-between ps-4 pe-4 pt-3 pb-2">
            <span>Order: 1947034</span>
            <span className="order-number">05-12-2019</span>
          </div>
          <div className="d-flex justify-content-between ps-4 pe-4 pb-2">
            <span className="order-number">
              Qunatity : <span className="text-dark">{3}</span>
            </span>
            <span className="order-number">
              Total Amount : <span className="text-dark">{"110$"}</span>
            </span>
          </div>
          <div className="d-flex justify-content-between ps-4 pe-4 pb-2">
            <button className="details-btn">Details</button>
            <span className="text-success fw-bold">Delivered</span>
          </div>
        </div>

        <div className="mt-4 order-details">
          <div className="d-flex justify-content-between ps-4 pe-4 pt-3 pb-2">
            <span>Order: 1947034</span>
            <span className="order-number">05-12-2019</span>
          </div>
          <div className="d-flex justify-content-between ps-4 pe-4 pb-2">
            <span className="order-number">
              Qunatity : <span className="text-dark">{3}</span>
            </span>
            <span className="order-number">
              Total Amount : <span className="text-dark">{"110$"}</span>
            </span>
          </div>
          <div className="d-flex justify-content-between ps-4 pe-4 pb-2">
            <button className="details-btn">Details</button>
            <span className="text-success fw-bold">Delivered</span>
          </div>
        </div>

        <div className="mt-4 order-details">
          <div className="d-flex justify-content-between ps-4 pe-4 pt-3 pb-2">
            <span>Order: 1947034</span>
            <span className="order-number">05-12-2019</span>
          </div>
          <div className="d-flex justify-content-between ps-4 pe-4 pb-2">
            <span className="order-number">
              Qunatity : <span className="text-dark">{3}</span>
            </span>
            <span className="order-number">
              Total Amount : <span className="text-dark">{"110$"}</span>
            </span>
          </div>
          <div className="d-flex justify-content-between ps-4 pe-4 pb-2">
            <button className="details-btn">Details</button>
            <span className="text-success fw-bold">Delivered</span>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default MyOrder;
