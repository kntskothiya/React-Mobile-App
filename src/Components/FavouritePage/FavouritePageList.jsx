import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Form from "react-bootstrap/Form";
import FilterListIcon from "@mui/icons-material/FilterList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import Rating from "@mui/material/Rating";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";
import "../FavouritePage/FavouritePage.css";
import Footer from "../Footerpart/Footer";
import { Link } from "react-router-dom";

const FavouritePageList = () => {
  return (
    <section className="container catalog-page">
      <section className="top-part">
        <div className="pt-3 d-flex justify-content-end">
          <SearchIcon className="fs-1" />
        </div>
        <h1 className="mt-4 fw-bold">Favourites</h1>

        <div className="favourite-btn-main mt-2">
          <button className="favourite-btn">T-shirt</button>
          <button className="favourite-btn">Crop tops</button>
          <button className="favourite-btn">Sleeveless</button>
          <button className="favourite-btn">Jeans</button>
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
          <Link to="/Favouritegrid" className="nav-link">
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
                <div className="d-flex justify-content-between">
                  <span className="mt-2 color">Lime</span>
                  <CloseIcon className="mt-2 me-2 color" />
                </div>
                <span className="fs-3 fw-bold">Shirt</span>
                <div className="d-flex">
                  <span className="me-1 color">Color :</span>
                  <span>Blue</span>
                  <span className="ms-3 me-1 color">Size :</span>
                  <span>L</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span className="fs-6 fw-bold">51$</span>
                  <Rating
                    name="size-small"
                    className="mt-1 mb-1 me-5"
                    defaultValue={2}
                    size="small"
                  />
                </div>
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
              <img
                src="../cart.svg"
                style={{ height: "56px", width: "56px", marginTop: "11px" }}
              />
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
                <div className="d-flex justify-content-between">
                  <span className="mt-2 color">Lime</span>
                  <CloseIcon className="mt-2 me-2 color" />
                </div>
                <span className="fs-3 fw-bold">Shirt</span>
                <div className="d-flex">
                  <span className="me-1 color">Color :</span>
                  <span>Blue</span>
                  <span className="ms-3 me-1 color">Size :</span>
                  <span>L</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span className="fs-6 fw-bold">51$</span>
                  <Rating
                    name="size-small"
                    className="mt-1 mb-1 me-5"
                    defaultValue={2}
                    size="small"
                  />
                </div>
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
              <img
                src="../cart.svg"
                style={{ height: "56px", width: "56px", marginTop: "11px" }}
              />
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
                <div className="d-flex justify-content-between">
                  <span className="mt-2 color">Lime</span>
                  <CloseIcon className="mt-2 me-2 color" />
                </div>
                <span className="fs-3 fw-bold">Shirt</span>
                <div className="d-flex">
                  <span className="me-1 color">Color :</span>
                  <span>Blue</span>
                  <span className="ms-3 me-1 color">Size :</span>
                  <span>L</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span className="fs-6 fw-bold">51$</span>
                  <Rating
                    name="size-small"
                    className="mt-1 mb-1 me-5"
                    defaultValue={2}
                    size="small"
                  />
                </div>
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
              <img
                src="../cart.svg"
                style={{ height: "56px", width: "56px", marginTop: "11px" }}
              />
            </Fab>
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

export default FavouritePageList;
