import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import "../CategoryPage/CategoryPage.css";
import { Link } from "react-router-dom";
import Footer from "../Footerpart/Footer";

const CategoryPage = () => {
  return (
    <section className="container category-page">
      <section className="top-part">
        <div className="pt-3 d-flex justify-content-between">
          <Link to="/mainpage" className="nav-link">
            <ArrowBackIosNewIcon />
          </Link>
          <h5 className="fw-bold">Categories</h5>
          <SearchIcon className="fs-1" />
        </div>
      </section>

      <section className="categoryname-part row">
        <div className="mt-3">
          <button className="summer-sales-btn w-100">
            <span>SUMMER SALES</span>
            <br /> Up to 50% off
          </button>
        </div>

        <div>
          <Link to="/newcategory" className="nav-link">
            <div className="bg-white d-flex mt-2 categories-name">
              <div class="col-5 py-2">
                <div className="d-flex justify-content-center align-items-center h-100 fw-bold">
                  New
                </div>
              </div>
              <div class="col-7">
                <img
                  src="../K.jpg"
                  className="categories-image"
                  alt="Product Image"
                  style={{ height: "100px", width: "100%" }}
                />
              </div>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/subcategory" className="nav-link">
            <div className="bg-white d-flex mt-2 categories-name">
              <div class="col-5 py-2">
                <span className="d-flex justify-content-center align-items-center h-100 fw-bold">
                  Clothes
                </span>
              </div>
              <div class="col-7">
                <img
                  src="../K.jpg"
                  className="categories-image"
                  alt="Product Image"
                  style={{ height: "100px", width: "100%" }}
                />
              </div>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/shoescategory" className="nav-link">
            <div className="bg-white d-flex mt-2 categories-name">
              <div class="col-5 py-2">
                <span className="d-flex justify-content-center align-items-center h-100 fw-bold">
                  Shoes
                </span>
              </div>
              <div class="col-7">
                <img
                  src="../K.jpg"
                  className="categories-image"
                  alt="Product Image"
                  style={{ height: "100px", width: "100%" }}
                />
              </div>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/accessoriescategory" className="nav-link">
            <div className="bg-white d-flex mt-2 categories-name mb-3">
              <div class="col-5 py-2">
                <span className="d-flex justify-content-center align-items-center h-100 fw-bold">
                  Accesories
                </span>
              </div>
              <div class="col-7">
                <img
                  src="../K.jpg"
                  className="categories-image"
                  alt="Product Image"
                  style={{ height: "100px", width: "100%" }}
                />
              </div>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default CategoryPage;
