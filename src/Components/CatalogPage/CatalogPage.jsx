import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import Form from "react-bootstrap/Form";
import FilterListIcon from "@mui/icons-material/FilterList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Fab from "@mui/material/Fab";
import "../CatalogPage/CatalogPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import Footer from "../Footerpart/Footer";

const CatalogPage = () => {
  return (
    <>
      <section className="container catalog-page">
        <section className="top-part">
          <div className="pt-3 d-flex justify-content-between">
            <Link to="/subcategory" className="nav-link">
              <ArrowBackIosNewIcon />
            </Link>
            <SearchIcon className="fs-1" />
          </div>
          <h1 className="mt-4 fw-bold">Women's tops</h1>

          <div className="category-btn-main">
            <button className="category-btn">T-shirt</button>
            <button className="category-btn">Crop tops</button>
            <button className="category-btn">Sleeveless</button>
            <button className="category-btn">Jeans</button>
          </div>

          <div class="d-flex mt-3 filter-part">
            <Link to="/filters" className="nav-link">
              <FilterListIcon className="filter-icon2" />
            </Link>
            <Form.Control
              type="text"
              className="w-25 filter"
              placeholder="Filters"
            />
            <SwapVertIcon
              className="swap-icon2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
            />
            <Form.Control
              type="text"
              className="w-75 price-view"
              placeholder="Price: lowest to high"
            />
            <Link to="/Catalog2" className="nav-link">
              <ViewModuleIcon className="view-icon2" />
            </Link>
          </div>
        </section>

        <section>
          <div className="product mt-4">
            <div className="row mb-4" style={{ position: "relative" }}>
              <div className="col-3">
                <img
                  src="../K.jpg"
                  className="product-image"
                  height={"100%"}
                  width={"100px"}
                />
              </div>
              <div className="col-9 ps-5">
                <div className="d-flex flex-column">
                  <span className="mt-2 fs-3 fw-bold">Pullover</span>
                  <span>Mango</span>
                  <Rating
                    name="size-small"
                    className="mt-1 mb-1"
                    defaultValue={2}
                    size="small"
                  />
                  <span className="fs-6 fw-bold">51$</span>
                </div>
              </div>
              <Fab
                aria-label="like"
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "13px",
                  zIndex: "1",
                  color: "orange",
                  backgroundColor: "white",
                  height: "45px",
                  width: "45px",
                }}
              >
                <FavoriteIcon />
              </Fab>
            </div>

            <div className="row mb-4" style={{ position: "relative" }}>
              <div className="col-3">
                <img
                  src="../K.jpg"
                  className="product-image"
                  height={"100%"}
                  width={"100px"}
                />
              </div>
              <div className="col-9 ps-5">
                <div className="d-flex flex-column">
                  <span className="mt-2 fs-3 fw-bold">Pullover</span>
                  <span>Mango</span>
                  <Rating
                    name="size-small"
                    className="mt-1 mb-1"
                    defaultValue={2}
                    size="small"
                  />
                  <span className="fs-6 fw-bold">51$</span>
                </div>
              </div>
              <Fab
                aria-label="like"
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "13px",
                  zIndex: "1",
                  color: "orange",
                  backgroundColor: "white",
                  height: "45px",
                  width: "45px",
                }}
              >
                <FavoriteIcon />
              </Fab>
            </div>

            <div className="row mb-4" style={{ position: "relative" }}>
              <div className="col-3">
                <img
                  src="../K.jpg"
                  className="product-image"
                  height={"100%"}
                  width={"100px"}
                />
              </div>
              <div className="col-9 ps-5">
                <div className="d-flex flex-column">
                  <span className="mt-2 fs-3 fw-bold">Pullover</span>
                  <span>Mango</span>
                  <Rating
                    name="size-small"
                    className="mt-1 mb-1"
                    defaultValue={2}
                    size="small"
                  />
                  <span className="fs-6 fw-bold">51$</span>
                </div>
              </div>
              <Fab
                aria-label="like"
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "13px",
                  zIndex: "1",
                  color: "orange",
                  backgroundColor: "white",
                  height: "45px",
                  width: "45px",
                }}
              >
                <FavoriteIcon />
              </Fab>
            </div>
          </div>
        </section>
        <Footer />
      </section>

      <div className="container-fluid d-flex justify-content-end fixed-bottom">
        <div
          className="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title text-center"
              id="offcanvasBottomLabel"
            ></h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="small mb-3">
            <p className="d-flex justify-content-center fw-bold">Sort by</p>
            <p className="ps-4 py-3 m-0">Popular</p>
            <p className="ps-4 py-3 m-0">Newest</p>
            <p className="ps-4 py-3 m-0">Customer review</p>
            <p className="ps-4 py-3 m-0">Price: lowest to high</p>
            <p className="ps-4 py-3 m-0">Price: highest to low</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
