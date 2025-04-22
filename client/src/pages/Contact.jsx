import React from 'react';
import { Link } from "react-router-dom";
import Touch from '../components/Touch';
import Cont from '../components/Cont';
function Contact() {
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
                <h1>Contact</h1>
                <p className="mb-0 bread">
                  <a href="index.html" className="my-primary-color">
                    Home
                  </a>{" "}
                  / Contact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About section end --> */}

      {/* <!-- Contact section --> */}
        <Cont/>

      {/* <!-- COntact section end --> */}

      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7373.340384625958!2d88.35603494490998!3d22.47902478191498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270fb5636f039%3A0xa4c7782afb8b88c9!2sNetaji%20Nagar%2C%20Kolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2snp!4v1724995173241!5m2!1sen!2snp"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </section>

      {/* <!-- Modal Enquire --> */}
       <Touch/>
    </>
  );
}

export default Contact
