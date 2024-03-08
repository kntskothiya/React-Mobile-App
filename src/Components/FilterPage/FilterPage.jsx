import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../FilterPage/FilterPage.css";
import { Link } from "react-router-dom";

const FilterPage = () => {
  return (
    <section className="container filter-page">
      <section className="top-part">
        <div className="pt-3 d-flex justify-content-between align-items-center">
          <Link to="/catalog" className="nav-link">
            <ArrowBackIosNewIcon />
          </Link>
          <span className="fw-bold mx-auto">Filters</span>
        </div>
      </section>

      <section className="filter-part row">
        <p className="fw-bold mt-3 gray-title p-3">Price range</p>

        <p className="fw-bold gray-title p-3 mt-3">Colors</p>

        <div className="color-button py-3">
          <button className="yellow"></button>
          <button className="blue"></button>
          <button className="white"></button>
          <button className="black"></button>
          <button className="green"></button>
          <button className="red"></button>
        </div>

        <p className="fw-bold gray-title p-3">Sizes</p>

        <div className="size-button-container py-3">
          <button className="XS">XS</button>
          <button className="S">S</button>
          <button className="M">M</button>
          <button className="L">L</button>
          <button className="XL">XL</button>
        </div>

        <p className="fw-bold gray-title p-3">Category</p>

        <div class="button-container py-3">
          <button class="All">All</button>
          <button class="Women">Women</button>
          <button class="Men">Men</button>
          <button class="Boys">Boys</button>
          <button class="Girls">Girls</button>
        </div>

        <Link to="/brand" className="fw-bold gray-title p-3 nav-link">
          Brand
        </Link>

        <div className="d-flex justify-content-between my-4">
          <button className="discard-btn w-50 me-2">Discard</button>
          <button className="apply-btn w-50 ms-2">Apply</button>
        </div>
      </section>
    </section>
  );
};

export default FilterPage;
