import React from 'react'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import "../CategoryPage/CategoryPage.css";
import { Link } from "react-router-dom";
import Footer from "../Footerpart/Footer";

const NewCategory = () => {
    return (
        <section className="container">
            <section className="top-part">
                <div className="pt-3 pb-2 d-flex justify-content-between">
                    <Link to="/category" className="nav-link">
                        <ArrowBackIosNewIcon />
                    </Link>
                    <h5 className="fw-bold">Categories</h5>
                    <SearchIcon className="fs-1" />
                </div>
            </section>

            <section className="row">
                <div className="categorylist">
                    <button className="w-100 viewall-btn p-2 rounded-pill border-0 mt-3">
                        VIEW ALL ITEMS
                    </button>
                    <p className="text-secondary mt-2 ms-2 mb-4">Choose category</p>
                    <div className="ms-4">
                        <Link to="/catalog" className="nav-link">
                            <p>Shirts</p>
                        </Link>
                        <Link className="nav-link">
                            <p>Tshirts</p>
                        </Link>
                        <Link className="nav-link">
                            <p>Pants</p>
                        </Link>
                        <Link className="nav-link">
                            <p>Night Wear</p>
                        </Link>
                        <Link className="nav-link">
                            <p>Shoes</p>
                        </Link>
                        <Link className="nav-link">
                            <p>Sunglasses</p>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    )
}

export default NewCategory
