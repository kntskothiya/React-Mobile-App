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
import Footer from "../Footerpart/Footer";
import { Link } from "react-router-dom";

const CatelogPage2 = () => {
  return (
    <section className="container catalog-page">
      <section className="top-part">
        <div className="pt-3 d-flex justify-content-between">
          <ArrowBackIosNewIcon />
          <span className="fw-bold">Women's tops</span>
          <SearchIcon className="fs-1" />
        </div>

        <div className="category-btn-main mt-2">
          <button className="category-btn">T-shirt</button>
          <button className="category-btn">Crop tops</button>
          <button className="category-btn">Sleeveless</button>
          <button className="category-btn">Jeans</button>
        </div>

        <div class="d-flex mt-3 filter-part">
          <FilterListIcon className="filter-icon2" />
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
          <Link to="/catalog" className="nav-link">
            <ViewModuleIcon className="view-icon2" />
          </Link>
        </div>
      </section>

      <section className="row pt-4 product-part">
        <div className="col-6 pb-4">
          <div style={{ position: "relative" }}>
            <img
              src="../K.jpg"
              className="product-image2"
              height={"100%"}
              width={"100%"}
            />
            <Fab
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "0",
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
          <div className="d-flex flex-column">
            <Rating
              name="size-small"
              className="mt-1 mb-1"
              defaultValue={4}
              size="small"
            />
            <span>Mango</span>
            <span className="fs-3 fw-bold">T-Shirt</span>
            <span className="fs-5 fw-bold">9$</span>
          </div>
        </div>

        <div className="col-6 pb-4">
          <div style={{ position: "relative" }}>
            <img
              src="../K.jpg"
              className="product-image2"
              height={"100%"}
              width={"100%"}
            />
            <Fab
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "0",
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
          <div className="d-flex flex-column">
            <Rating
              name="size-small"
              className="mt-1 mb-1"
              defaultValue={4}
              size="small"
            />
            <span>Mango</span>
            <span className="fs-3 fw-bold">T-Shirt</span>
            <span className="fs-5 fw-bold">9$</span>
          </div>
        </div>

        <div className="col-6 pb-4">
          <div style={{ position: "relative" }}>
            <img
              src="../K.jpg"
              className="product-image2"
              height={"100%"}
              width={"100%"}
            />
            <Fab
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "0",
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
          <div className="d-flex flex-column">
            <Rating
              name="size-small"
              className="mt-1 mb-1"
              defaultValue={4}
              size="small"
            />
            <span>Mango</span>
            <span className="fs-3 fw-bold">T-Shirt</span>
            <span className="fs-5 fw-bold">9$</span>
          </div>
        </div>

        <div className="col-6 pb-4">
          <div style={{ position: "relative" }}>
            <img
              src="../K.jpg"
              className="product-image2"
              height={"100%"}
              width={"100%"}
            />
            <Fab
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "0",
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
          <div className="d-flex flex-column">
            <Rating
              name="size-small"
              className="mt-1 mb-1"
              defaultValue={4}
              size="small"
            />
            <span>Mango</span>
            <span className="fs-3 fw-bold">T-Shirt</span>
            <span className="fs-5 fw-bold">9$</span>
          </div>
        </div>
      </section>

      <Footer />

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
    </section>
  );
};

export default CatelogPage2;
