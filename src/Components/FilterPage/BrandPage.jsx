import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import Form from "react-bootstrap/Form";
import "../FilterPage/FilterPage.css";
import { Link } from "react-router-dom";

const BrandPage = () => {
  return (
    <section className="container brand-page">
      <section className="row bg-white pb-3">
        <div className="pt-3 d-flex justify-content-between align-items-center">
          <Link to="/filters" className="nav-link">
            <ArrowBackIosNewIcon />
          </Link>
          <span className="fw-bold mx-auto">Brand</span>
        </div>
      </section>

      <section className="brandname-part">
        <div className="search-field-main">
          <span className="search-icon-brand">
            <SearchIcon />
          </span>
          <Form.Control
            type="text"
            className="search-filed"
            placeholder="Search"
          />
        </div>

        <ul>
          <li className="d-flex justify-content-between pt-3 pb-2">
            <label>adidas</label>
            <input type="checkbox" />
          </li>
          <li className="d-flex justify-content-between pt-3 pb-2">
            <label>adidas Originals</label>
            <input type="checkbox" />
          </li>
          <li className="d-flex justify-content-between pt-3 pb-2">
            <label>Blend</label>
            <input type="checkbox" />
          </li>
          <li className="d-flex justify-content-between pt-3 pb-2">
            <label>Boutique Moschino</label>
            <input type="checkbox" />
          </li>
          <li className="d-flex justify-content-between pt-3 pb-2">
            <label>Champion</label>
            <input type="checkbox" />
          </li>
          <li className="d-flex justify-content-between pt-3 pb-2">
            <label>Diesel</label>
            <input type="checkbox" />
          </li>
          <li className="d-flex justify-content-between pt-3 pb-2">
            <label>Jack & Jones</label>
            <input type="checkbox" />
          </li>
          <li className="d-flex justify-content-between pt-3 pb-2">
            <label>Red Valentino</label>
            <input type="checkbox" />
          </li>
          <li className="d-flex justify-content-between pt-3 pb-2">
            <label>Green Fiber</label>
            <input type="checkbox" />
          </li>
        </ul>
      </section>

      <section className="row bg-white pt-3 pb-4">
        <div className="d-flex justify-content-between bg-white">
          <button className="discard-btn">Discard</button>
          <button className="apply-btn">Apply</button>
        </div>
      </section>
    </section>
  );
};

export default BrandPage;
