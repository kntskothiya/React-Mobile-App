import React, { useEffect } from "react";
import "../MainPage/MainPage.css";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import Footer from "../Footerpart/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewCollection, fetchSaleCollection } from "../../toolkit/slice";

const MainPage = () => {
  const dispatch = useDispatch();
  const saleCollectionData = useSelector(
    (state) => state.data.saleCollectionData
  );

  const newCollectionData = useSelector(
    (state) => state.data.newCollectionData
  );

  useEffect(() => {
    dispatch(fetchSaleCollection());
    dispatch(fetchNewCollection());
  }, [dispatch]);

  return (
    <section className="main-page">
      <section className="fashion-sale-part">
        <div className="image-content-part">
          <div className="container-fluid">
            <h1 className="text-white banner-text">
              Fashion
              <br />
              sale
            </h1>

            <Link to="/sale">
              <button className="Check-button btn rounded-pill w-50 p-2">
                Check
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="all-collection">
        <div className="college-items mt-3">
          <div>
            <Link to="/category">
              <img src="../../images/main.png" alt="" width="100%" />
            </Link>
          </div>
          <div className="row">
            <div className="col col-sm-6 d-flex flex-column">
              <Link
                to="/sale"
                className="d-flex justify-content-center mt-auto summersale"
              >
                <h1 className="summersale-text">
                  Summer <br /> sale
                </h1>
              </Link>
              <div className="mt-auto">
                <Link to="/black">
                  <img
                    src="../../images/black.png"
                    alt=""
                    className="w-100 h-100"
                  />
                </Link>
              </div>
            </div>
            <div className="col col-sm-6 hoodie-part">
              <Link to="/hoodies">
                <img src="../../images/hoodie.png" alt="" width="100%" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sale-part">
        <div className="container-fluid new-collection mt-3 d-flex justify-content-between align-items-center">
          <div className="new-leftpart">
            <h1 className="page-title">Sale</h1>
            <p className="sub-title">Super summer sale</p>
          </div>
          <div className="new-rightpart">
            <Link to="/sale" className="text-decoration-none text-dark ">
              <p className="sale-viewall">View all</p>
            </Link>
          </div>
        </div>

        <section className="pt-3 product-part d-flex pe-2 ps-2">
          <Link
            to="/productdetails"
            className="nav-link d-flex justify-content-between"
          >
            {saleCollectionData
              ? saleCollectionData.map((item) => (
                  <div key={item.id}>
                    <div className="pb-4 mx-2">
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <img
                          src={item.image}
                          className="product-image2"
                          height={"160px"}
                          width={"130px"}
                        />
                        <Fab
                          style={{
                            position: "absolute",
                            bottom: "-15px",
                            right: 0,
                            zIndex: "1",
                            color: "orange",
                            backgroundColor: "white",
                            height: "35px",
                            width: "35px",
                          }}
                        >
                          <FavoriteIcon className="favourite-icon" />
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
                          <div className=" strike">{item.price}₹</div>
                          <div className="mx-2 price">{item.discount}₹</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </Link>
        </section>
      </section>

      <section className="new-collection-part">
        <div className="container-fluid new-collection mt-3 d-flex justify-content-between align-items-center">
          <div className="new-leftpart">
            <h1 className="page-title">New</h1>
            <p className="sub-title">You've never seen it before!</p>
          </div>
          <div className="new-rightpart">
            <Link to="/newitems" className="text-decoration-none text-dark">
              <p className="new-viewall"> View all</p>
            </Link>
          </div>
        </div>

        <section className="pt-3 product-part pe-2 ps-2">
          {newCollectionData
            ? newCollectionData.map((newitem) => (
                <div className="pb-4 mx-2" key={newitem.id}>
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <img
                      src={newitem.image}
                      className="product-image2"
                      height={"160px"}
                      width={"130px"}
                    />
                    <Fab
                      style={{
                        position: "absolute",
                        bottom: "-15px",
                        right: 0,
                        zIndex: "1",
                        color: "orange",
                        backgroundColor: "white",
                        height: "35px",
                        width: "35px",
                      }}
                    >
                      <FavoriteIcon className="favourite-icon" />
                    </Fab>
                  </div>
                  <div className="d-flex flex-column">
                    <Rating
                      name="size-small"
                      className="mt-1 mb-1"
                      defaultValue={newitem.rating}
                      size="small"
                    />
                    <span>{newitem.brand}</span>
                    <span className="fs-3 fw-bold">{newitem.type}</span>
                    <span>{newitem.price}₹</span>
                  </div>
                </div>
              ))
            : "Loding.."}

          {/* <div className="pb-4 mx-2">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src="../K.jpg"
                className="product-image2"
                height={"160px"}
                width={"130px"}
              />
              <Fab
                style={{
                  position: "absolute",
                  bottom: "-15px",
                  right: 0,
                  zIndex: "1",
                  color: "orange",
                  backgroundColor: "white",
                  height: "35px",
                  width: "35px",
                }}
              >
                <FavoriteIcon className="favourite-icon" />
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

          <div className="pb-4 mx-2">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src="../K.jpg"
                className="product-image2"
                height={"160px"}
                width={"130px"}
              />
              <Fab
                style={{
                  position: "absolute",
                  bottom: "-15px",
                  right: 0,
                  zIndex: "1",
                  color: "orange",
                  backgroundColor: "white",
                  height: "35px",
                  width: "35px",
                }}
              >
                <FavoriteIcon className="favourite-icon" />
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

          <div className="pb-4 mx-2">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src="../K.jpg"
                className="product-image2"
                height={"160px"}
                width={"130px"}
              />
              <Fab
                style={{
                  position: "absolute",
                  bottom: "-15px",
                  right: 0,
                  zIndex: "1",
                  color: "orange",
                  backgroundColor: "white",
                  height: "35px",
                  width: "35px",
                }}
              >
                <FavoriteIcon className="favourite-icon" />
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

          <div className="pb-4 mx-2">
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src="../K.jpg"
                className="product-image2"
                height={"160px"}
                width={"130px"}
              />
              <Fab
                style={{
                  position: "absolute",
                  bottom: "-15px",
                  right: 0,
                  zIndex: "1",
                  color: "orange",
                  backgroundColor: "white",
                  height: "35px",
                  width: "35px",
                }}
              >
                <FavoriteIcon className="favourite-icon" />
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
          </div> */}
        </section>
      </section>

      <Footer />
    </section>
  );
};

export default MainPage;
