import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ShareIcon from "@mui/icons-material/Share";
import Form from "react-bootstrap/Form";
import Rating from "@mui/material/Rating";
import "../ProductDetail/ProductDetail.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <section className="productdetails-part">
      <section className="top-part container-fluid">
        <div className="pt-3 pb-3 d-flex justify-content-between">
          <Link to="/mainpage" className="nav-link">
            <ArrowBackIosNewIcon />
          </Link>
          <span className="fw-bold">Short Dress</span>
          <ShareIcon />
        </div>
      </section>

      <section className="productdetails">
        <div className="image-part">
          <img src="../../images/banner.png" alt="" width="100%" />
        </div>

        <div className="content-part d-flex justify-content-between align-items-center container-fluid mt-3">
          <div>
            <Form.Select size="md">
              <option>Large select</option>
              <option>Large select</option>
              <option>Large select</option>
              <option>hello select</option>
              <option>Large select</option>
              <option>Large select</option>
              <option>Large select</option>
            </Form.Select>
          </div>
          <div>
            <Form.Select size="md">
              <option>Large select</option>
              <option>Large select</option>
              <option>Large select</option>
              <option>hello select</option>
              <option>Large select</option>
              <option>Large select</option>
              <option>Large select</option>
            </Form.Select>
          </div>

          <div>Fav Logo</div>
        </div>

        <div className="details mt-3 container-fluid">
          <div className="d-flex justify-content-between">
            <div>
              <h1>H&M</h1>
              <p className="productname">Short black dress</p>
              <Rating name="read-only" value={3} readOnly />
            </div>
            <h1>$19.99</h1>
          </div>
          <p>
            Short dress in soft cotton jersey with decorative buttons down the
            front and a wide, frill-trimmed square neckline with concealed
            elastication. Elasticated seam under the bust and short puff sleeves
            with a small frill trim.
          </p>

          <button
            className="border-0 rounded-pill w-100 p-3 addtocart-btn"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
          >
            ADD TO CART
          </button>

          <div
            className="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="offcanvasBottom"
            aria-labelledby="offcanvasBottomLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body small pt-0">
              <h5 className="text-center">Select size</h5>

              <div className="button-container pb-3 mt-4">
                <button className="XS w-100">
                  <b>XS</b>
                </button>
                <button className="S w-100">
                  <b>S</b>
                </button>
                <button className="M w-100">
                  <b>M</b>
                </button>
                <button className="L w-100">
                  <b>L</b>
                </button>
                <button className="XL w-100">
                  <b>XL</b>
                </button>
              </div>

              <hr />
              <div className="d-flex justify-content-between">
                <a href="" className="text-dark text-decoration-none">
                  Size info
                </a>
                <ChevronRightIcon />
              </div>
              <hr />
            </div>
            <div className="pb-3">
              <button className="border-0 rounded-pill w-100 p-3 addtocart-btn">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="">
          <div className="shiping-support d-flex justify-content-between container-fluid">
            <a href="" className="text-dark text-decoration-none">
              Shipping info
            </a>
            <a href="" className="text-dark">
              <ChevronRightIcon />
            </a>
          </div>
          <hr />
          <div className="shiping-support d-flex justify-content-between container-fluid">
            <a href="" className="text-dark text-decoration-none">
              Shipping info
            </a>
            <a href="" className="text-dark">
              <ChevronRightIcon />
            </a>
          </div>
          <hr />
        </div>
      </section>

      <section className="similar-product">
        <div className="heading d-flex justify-content-between align-items-baseline container-fluid mt-4">
          <h1>You can also like this</h1>
          <p>12 item</p>
        </div>
        <div className="new-catalogue container-fluid">
          <Card className="w-100 h-100">
            <Card.Img variant="top" src="../../images/Facebook.png" />
            <Card.Body>
              <Card.Title>
                <Rating name="read-only" value={3} readOnly />
              </Card.Title>
              <Card.Text>
                <p className="cloth-brand">{"Brand"}</p>
                <p className="cloth-type">{"Cloth type"}</p>
                <div className="d-flex">
                  <p className="strike">350₹</p>
                  <p className="ms-2 price">250₹</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
    </section>
  );
};

export default ProductDetails;
