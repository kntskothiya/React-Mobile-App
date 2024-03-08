import React, { useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import Form from "react-bootstrap/Form";
import FilterListIcon from "@mui/icons-material/FilterList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Fab from "@mui/material/Fab";
import "../Salepage/Sale.css";
import Footer from "../Footerpart/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSaleCollection } from "../../toolkit/slice";

const Sale = () => {
  const dispatch = useDispatch();
  const saleCollectionData = useSelector(
    (state) => state.data.saleCollectionData
  );

  useEffect(() => {
    dispatch(fetchSaleCollection());
  }, [dispatch]);

  return (
    <section className="container sale-page">
      <section className="top-part">
        <div className="pt-3 d-flex justify-content-between">
          <ArrowBackIosNewIcon />
          <span className="fw-bold">Sale items</span>
          <SearchIcon className="fs-1" />
        </div>
        <div class="d-flex mt-3 filter-part">
          <Link to="/filters" className="nav-link">
            <FilterListIcon className="filter-icon2" />
          </Link>
          <Form.Control
            type="text"
            className="w-50 filter"
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
            className="w-50 price-view"
            placeholder="Price: lowest to high"
          />
        </div>
      </section>

      <section className="row pt-4">
        {saleCollectionData
          ? saleCollectionData.map((item) => (
              <div className="col-6 pb-4" key={item.id}>
                <div style={{ position: "relative" }}>
                  <img
                    src={item.image}
                    className="product-image2"
                    height={"230px"}
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
                    defaultValue={item.rating}
                    size="small"
                  />
                  <span>{item.brand}</span>
                  <span className="fs-3 fw-bold">{item.type}</span>
                  <div className="d-flex">
                    <div className="strike">{item.price}₹</div>
                    <div className="mx-2 price">{item.discount}₹</div>
                  </div>
                </div>
              </div>
            ))
          : "Loading..."}
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

export default Sale;
