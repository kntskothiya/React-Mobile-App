import React, { useRef, useState } from "react";
import "../ReviewPart/Review.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Rating from "@mui/material/Rating";
import EditIcon from "@mui/icons-material/Edit";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Review = () => {
  const [value, setValue] = useState(0);
  const fileInputRef = useRef(null);

  const handleLogoClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected File:", selectedFile);
  };
  return (
    <section className="review-part">
      <div className="pt-3 container-fluid">
        <Link to="/productdetails" className="nav-link">
          <ArrowBackIosNewIcon />
        </Link>
      </div>

      <section className="heading">
        <div className="container-fluid">
          <h1>Rating&Reviews</h1>
        </div>
      </section>

      <section className="allover-review">
        <div className="container-fluid d-flex justify-content-between mt-5">
          <div>
            <h1 className="total-rating">4.3</h1>
            <p className="rating-count">23 ratings</p>
          </div>

          <div>
            <div className="d-flex justify-content-end align-items-baseline">
              <img src="../../images/5-stars.png" alt="hlo" className="me-1" />
              <p className="m-0">ratingline</p>
            </div>
            <div className="d-flex justify-content-end align-items-baseline">
              <img src="../../images/4-stars.png" alt="hlo" className="me-1" />
              <p className="m-0">ratingline</p>
            </div>
            <div className="d-flex justify-content-end align-items-baseline">
              <img src="../../images/3-stars.png" alt="hlo" className="me-1" />
              <div></div>
              <p className="m-0">ratingline</p>
            </div>
            <div className="d-flex justify-content-end align-items-baseline">
              <img src="../../images/2-stars.png" alt="hlo" className="me-1" />
              <p className="m-0">ratingline</p>
            </div>
            <div className="d-flex justify-content-end align-items-baseline">
              <img src="../../images/1star.png" alt="hlo" className="me-1" />
              <p className="m-0">ratingline</p>
            </div>
          </div>

          <div>
            <p className="m-0 text-end">12</p>
            <p className="m-0 text-end">10</p>
            <p className="m-0 text-end">8</p>
            <p className="m-0 text-end">6</p>
            <p className="m-0 text-end">4</p>
          </div>
        </div>
      </section>

      <section className="review-count">
        <div className="container-fluid mt-4 d-flex justify-content-between align-items-center">
          <h1>8 reviews</h1>
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="ms-2 form-check-label" for="exampleCheck1">
              With Photo
            </label>
          </div>
        </div>
      </section>

      <section className="container review-comments">
        <div className="container review-content">
          <h6 className="pt-2">Helene Moore</h6>
          <div className="d-flex justify-content-between">
            <Rating name="read-only" value={3} readOnly />
            <p className="review-date">June 5, 2019</p>
          </div>
          <p>
            The dress is great! Very classy and comfortable. It fit perfectly!
            I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too
            long for those who are shorter but could be hemmed. I wouldn't
            recommend it for those big chested as I am smaller chested and it
            fit me perfectly. The underarms were not too wide and the dress was
            made well.
          </p>
        </div>
        <div className="container-fluid review-content">
          <h6 className="pt-2">Helene Moore</h6>
          <div className="d-flex justify-content-between">
            <Rating name="read-only" value={3} readOnly />
            <p className="review-date">June 5, 2019</p>
          </div>
          <p>
            The dress is great! Very classy and comfortable. It fit perfectly!
            I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too
            long for those who are shorter but could be hemmed. I wouldn't
            recommend it for those big chested as I am smaller chested and it
            fit me perfectly. The underarms were not too wide and the dress was
            made well.
          </p>
        </div>
      </section>
      <div className="container-fluid d-flex justify-content-end fixed-bottom">
        <button
          className="border-0 py-2 px-4 review-btn rounded-pill mb-2"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          <EditIcon /> Write a review
        </button>
      </div>

      <div
        className="offcanvas offcanvas-bottom container-fluid"
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
        <div className="offcanvas-body small pb-3 pt-0">
          <div className="text-center">
            <h4>What is you rate?</h4>

            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              className="mt-3"
            />

            <h5 className="mt-3">
              Please share your opinion about the product
            </h5>
            <div className="text-area mt-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your review"
                  className="outline-0"
                />
              </Form.Group>
            </div>
          </div>
          <div className="mt-5">
            <img
              src="../../images/camera.png"
              alt=""
              onClick={handleLogoClick}
              style={{ cursor: "pointer" }}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          <h6 className="mt-2">Add your photos</h6>
          <button className="border-0 rounded-pill send-review-btn p-3 w-100 mt-5">
            SEND REVIEW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Review;
