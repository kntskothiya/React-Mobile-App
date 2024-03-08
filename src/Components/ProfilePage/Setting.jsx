import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import Form from "react-bootstrap/Form";
import TextField from "@mui/material/TextField";
import "../ProfilePage/Setting.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <section className="setting top-part">
      <div className="container-fluid">
        <div className="pt-3 pb-2 d-flex justify-content-between">
          <Link to="/profile" className="nav-link">
            <ArrowBackIosNewIcon />
          </Link>
          <SearchIcon className="fs-1" />
        </div>
        <h1 className="fw-bold mt-3 mb-3">Settings</h1>
        <h6>Personal Information</h6>
      </div>

      <section className="form-part">
        <div className="container-fluid">
          <Form>
            <Form.Group className="mb-3">
              <TextField
                className="input-field bg-white w-100"
                label="Full name"
                variant="outlined"
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <TextField
                className="input-field bg-white w-100"
                variant="outlined"
                type="date"
              />
            </Form.Group>
          </Form>
        </div>

        <section className="container-fluid">
          <div className="d-flex justify-content-between align-items-baseline mt-5">
            <h6>Password</h6>
            <a
              href=""
              className="text-decoration-none text-dark"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
            >
              Change
            </a>
          </div>
          <Form.Group className="mt-3">
            <TextField
              className="input-field bg-white w-100"
              label="Password"
              variant="outlined"
              type="password"
            />
          </Form.Group>
        </section>
      </section>

      <section className="password-change">
        <div
          className="offcanvas offcanvas-bottom container-fluid"
          tabindex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header pb-0">
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
            <h4 className="text-center">Password Change</h4>
            <div className="form-part">
              <Form.Group className="mt-3">
                <TextField
                  className="input-field bg-white w-100"
                  label="Old Password"
                  variant="outlined"
                  type="password"
                />
              </Form.Group>
            </div>
            <Link
              to="/forgotpassword"
              className="d-flex justify-content-end text-decoration-none mt-2 forgotpassword"
            >
              Forgot Password?
            </Link>
            <Form.Group className="mt-3">
              <TextField
                className="input-field bg-white w-100"
                label="New Password"
                variant="outlined"
                type="password"
              />
            </Form.Group>

            <Form.Group className="mt-4">
              <TextField
                className="input-field bg-white w-100"
                label="Repeat New Password"
                variant="outlined"
                type="password"
              />
            </Form.Group>
            <button className="border-0 rounded-pill savepassword-btn p-3 w-100 mt-5">
              SAVE PASSWORD
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Setting;
