import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Form from "react-bootstrap/Form";
import FilterListIcon from "@mui/icons-material/FilterList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import Rating from "@mui/material/Rating";
import Fab from "@mui/material/Fab";
import "../FavouritePage/FavouritePage.css";
import Footer from "../Footerpart/Footer";
import { Link } from "react-router-dom";

const FavouriteGrid = () => {
  return (
    <section className="container favourite-page">
      <section className="top-part">
        <div class="pt-3 d-flex justify-content-between align-items-center">
          <span class="fw-bold mx-auto">Favourites</span>
          <SearchIcon />
        </div>

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
          <Link to="/favourite" className="nav-link">
            <ViewModuleIcon className="view-icon2" />
          </Link>
        </div>
      </section>

      <section className="row pt-4">
        <div className="col-6 pb-4">
          <div style={{ position: "relative" }}>
            <img
              src="../K.jpg"
              className="product-image2"
              height={"100%"}
              width={"100%"}
            />
            <Fab
              aria-label="like"
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "0px",
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
          <div className="d-flex flex-column">
            <Rating
              name="size-small"
              className="my-1"
              defaultValue={4}
              size="small"
            />
            <span className="color">Mango</span>
            <span className="fs-3 fw-bold">T-Shirt</span>
            <div className="d-flex">
              <span className="me-1 color">Color:</span>
              <span>Blue</span>
              <span className="ms-3 color">Size: </span>
              <span>L</span>
            </div>
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
              aria-label="like"
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "0px",
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
          <div className="d-flex flex-column">
            <Rating
              name="size-small"
              className="my-1"
              defaultValue={4}
              size="small"
            />
            <span className="color">Mango</span>
            <span className="fs-3 fw-bold">T-Shirt</span>
            <div className="d-flex">
              <span className="me-1 color">Color:</span>
              <span>Blue</span>
              <span className="ms-3 color">Size: </span>
              <span>L</span>
            </div>
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
              aria-label="like"
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "0px",
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
          <div className="d-flex flex-column">
            <Rating
              name="size-small"
              className="my-1"
              defaultValue={4}
              size="small"
            />
            <span className="color">Mango</span>
            <span className="fs-3 fw-bold">T-Shirt</span>
            <div className="d-flex">
              <span className="me-1 color">Color:</span>
              <span>Blue</span>
              <span className="ms-3 color">Size: </span>
              <span>L</span>
            </div>
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
              aria-label="like"
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "0px",
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
          <div className="d-flex flex-column">
            <Rating
              name="size-small"
              className="my-1"
              defaultValue={4}
              size="small"
            />
            <span className="color">Mango</span>
            <span className="fs-3 fw-bold">T-Shirt</span>
            <div className="d-flex">
              <span className="me-1 color">Color:</span>
              <span>Blue</span>
              <span className="ms-3 color">Size: </span>
              <span>L</span>
            </div>
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

export default FavouriteGrid;
