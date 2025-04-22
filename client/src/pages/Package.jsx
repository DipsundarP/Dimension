import React from 'react'
import { Link } from "react-router-dom";
import Touch from '../components/Touch';

function Package() {
  return (
    <>
      {/* <!-- Header section --> */}
      <header>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-6 d-flex align-items-center">
              <div className="d-flex align-items-center">
                <span className="social-box me-2">
                  <i className="fa-solid fa-phone-volume"></i>
                </span>
                <a href="tel:9062429969" className="fw-medium">
                  9062429969
                </a>
              </div>
              <div className="d-flex align-items-center ms-2">
                <span className="social-box me-2">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <a
                  href="mailto:enquiry@sevendimensiontravels.com"
                  className="fw-medium"
                >
                  enquiry@sevendimensiontravels.com
                </a>
              </div>
            </div>
            <div className="col-6 align-items-center">
              <div className="d-flex justify-content-end align-items-center">
                <div className="social">
                  <a href="#!" onClick={(e) => e.preventDefault()}>
                    <span className="social-box mx-1">
                      <i className="fa-brands fa-facebook-f"></i>
                    </span>
                  </a>
                  <a href="#!" onClick={(e) => e.preventDefault()}>
                    <span className="social-box mx-1">
                      <i className="fa-brands fa-x-twitter"></i>
                    </span>
                  </a>
                  <a href="#!" onClick={(e) => e.preventDefault()}>
                    <span className="social-box ms-1">
                      <i className="fa-brands fa-instagram"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header section end --> */}

      {/* <!-- Navbar section --> */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand m-0" to="/">
            <img src="assets/images/logo1.svg" alt="7 Dimension Travels Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header bg-white">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img
                  src="assets/images/logo1.svg"
                  alt="7 Dimension Travels Logo"
                />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto align-items-lg-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/package">
                    Tour Packages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tour">
                    Offbeat Tour
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="mt-4 mt-lg-0">
                <button
                  type="button"
                  className="btn1"
                  data-bs-toggle="modal"
                  data-bs-target="#enquire"
                >
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar section end  --> */}

      {/* <!-- About section --> */}
      <section className="inner-banner">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h1>Tour Packages</h1>
                <p className="mb-0 bread">
                  <a href="index.html" className="my-primary-color">
                    Home
                  </a>{" "}
                  / Tour Packages
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About section end --> */}

      {/* <!-- Places section --> */}
      <section className="place py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="sub-title mb-2 my-primary-color">
                Travel Packages
              </h3>
              <h2 className="title">Ultimate Travel Experience</h2>
            </div>
          </div>
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="card p-3 border-0 my-shadow">
                <img
                  src="assets/images/trending-places/hazar.jpg"
                  className="card-img-top"
                  alt="Darjeeling district"
                />
                <div className="card-body p-0 pt-3">
                  <div className="d-flex justify-content-between dets mb-2">
                    <p className="d-flex align-items-center mb-0">
                      <i className="fa-regular fa-compass pe-2"></i>Darjeeling
                      district
                    </p>
                    <p className="d-flex align-items-center mb-0">
                      <i className="fa-regular fa-calendar-check pe-2"></i>2
                      days / 3 nights
                    </p>
                  </div>
                  <h4 className="card-title border-bottom pt-1 pb-3 fw-medium">
                    Discover Serenity, Exploration, And Enlightenment
                  </h4>
                  <div className="pt-2 text-center">
                    <a
                      href="javascript:void(0);"
                      data-bs-target="#enquire"
                      data-bs-toggle="modal"
                      className="btn1"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="card p-3 border-0 my-shadow">
                <img
                  src="assets/images/trending-places/gangtok.jpg"
                  className="card-img-top"
                  alt="Jhargram district"
                />
                <div className="card-body p-0 pt-3">
                  <div className="d-flex justify-content-between dets mb-2">
                    <p className="d-flex align-items-center mb-0">
                      <i className="fa-regular fa-compass pe-2"></i>Jhargram
                      district
                    </p>
                    <p className="d-flex align-items-center mb-0">
                      <i className="fa-regular fa-calendar-check pe-2"></i>2
                      days / 3 nights
                    </p>
                  </div>
                  <h4 className="card-title border-bottom pt-1 pb-3 fw-medium">
                    Discover Serenity, Exploration, And Enlightenment
                  </h4>
                  <div className="pt-2 text-center">
                    <a
                      href="javascript:void(0);"
                      data-bs-target="#enquire"
                      data-bs-toggle="modal"
                      className="btn1"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="card p-3 border-0 my-shadow">
                <img
                  src="assets/images/trending-places/khosbag.jpg"
                  className="card-img-top"
                  alt="Puri district"
                />
                <div className="card-body p-0 pt-3">
                  <div className="d-flex justify-content-between dets mb-2">
                    <p className="d-flex align-items-center mb-0">
                      <i className="fa-regular fa-compass pe-2"></i>Puri
                      district
                    </p>
                    <p className="d-flex align-items-center mb-0">
                      <i className="fa-regular fa-calendar-check pe-2"></i>2
                      days / 3 nights
                    </p>
                  </div>
                  <h4 className="card-title border-bottom pt-1 pb-3 fw-medium">
                    Discover Serenity, Exploration, And Enlightenment
                  </h4>
                  <div className="pt-2 text-center">
                    <a
                      href="javascript:void(0);"
                      data-bs-target="#enquire"
                      data-bs-toggle="modal"
                      className="btn1"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-4 col-md-6">
              <div className="card p-3 border-0 my-shadow">
                <img
                  src="assets/images/trending-places/darjeeling.jpg"
                  className="card-img-top"
                  alt="Darjeeling district"
                />
                <div className="card-body p-0 pt-3">
                  <div className="d-flex justify-content-between dets mb-2">
                    <p className="d-flex align-items-center mb-0">
                      <i className="fa-regular fa-compass pe-2"></i>Darjeeling
                      district
                    </p>
                    <p className="d-flex align-items-center mb-0">
                      <i className="fa-regular fa-calendar-check pe-2"></i>2
                      days / 3 nights
                    </p>
                  </div>
                  <h4 className="card-title border-bottom pt-1 pb-3 fw-medium">
                    Discover Serenity, Exploration, And Enlightenment
                  </h4>
                  <div className="pt-2 text-center">
                    <a
                      href="javascript:void(0);"
                      data-bs-target="#enquire"
                      data-bs-toggle="modal"
                      className="btn1"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-4 col-md-6">
              <div className="card p-3 border-0 my-shadow">
                <img
                  src="assets/images/trending-places/jhargram.jpg"
                  className="card-img-top"
                  alt="Jhargram district"
                />
                <div className="card-body p-0 pt-3">
                  <div className="d-flex justify-content-between dets mb-2">
                    <p className="d-flex align-items-center mb-0">
                      <i className="fa-regular fa-compass pe-2"></i>Jhargram
                      district
                    </p>
                    <p className="d-flex align-items-center mb-0">
                      <i className="fa-regular fa-calendar-check pe-2"></i>2
                      days / 3 nights
                    </p>
                  </div>
                  <h4 className="card-title border-bottom pt-1 pb-3 fw-medium">
                    Discover Serenity, Exploration, And Enlightenment
                  </h4>
                  <div className="pt-2 text-center">
                    <a
                      href="javascript:void(0);"
                      data-bs-target="#enquire"
                      data-bs-toggle="modal"
                      className="btn1"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-lg-4 col-md-6">
              <div className="card p-3 border-0 my-shadow">
                <img
                  src="assets/images/trending-places/digha.jpg"
                  className="card-img-top"
                  alt="Puri district"
                />
                <div className="card-body p-0 pt-3">
                  <div className="d-flex justify-content-between dets mb-2">
                    <p className="d-flex align-items-center mb-0">
                      <i className="fa-regular fa-compass pe-2"></i>Puri
                      district
                    </p>
                    <p className="d-flex align-items-center mb-0">
                      <i className="fa-regular fa-calendar-check pe-2"></i>2
                      days / 3 nights
                    </p>
                  </div>
                  <h4 className="card-title border-bottom pt-1 pb-3 fw-medium">
                    Discover Serenity, Exploration, And Enlightenment
                  </h4>
                  <div className="pt-2 text-center">
                    <a
                      href="javascript:void(0);"
                      data-bs-target="#enquire"
                      data-bs-toggle="modal"
                      className="btn1"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="d-flex justify-content-center">
            <a href="javascript:void(0);" className="btn2 mt-5">
              View more
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Places section end --> */}

      {/* <!-- Modal Enquire --> */}
        <Touch />
    </>
  );
}

export default Package
