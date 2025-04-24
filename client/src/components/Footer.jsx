import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <Link to="/" className="footer-logo">
              <img src="assets/images/logo.svg" alt="Logo" />
            </Link>
            <p>
              1/3A, Sangati Colony, Netaji Nagar, Tollygunge, Kolkata-700092
            </p>
            <div className="contact-footer-info">
              <a
                href="tel:9062429969"
                className="d-flex align-items-center"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: "1px",
                }}
              >
                <i className="fa-solid fa-phone pe-2"></i>+91 90624 29969
              </a>
              <a
                href="mailto:enquiry@sevendimensiontravels.com"
                className="d-flex align-items-center mt-1"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: "1px",
                }}
              >
                <i className="fa-solid fa-envelope pe-2"></i>
                enquiry@sevendimensiontravels.com
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <h3 className="mb-3">Quick Links</h3>
            <ul>
              <li className="mb-1">
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/package"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  Tour Packages
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/tour"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  Offbeat Tour
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-6">
            <h3
              className="mb-3"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginLeft: "1px",
              }}
            >
              Tour Packages
            </h3>
            <ul>
              <li className="mb-1">
                <Link
                  to="/package"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  Odisha
                </Link>
              </li>
              <li
                className="mb-1"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: "1px",
                }}
              >
                <Link
                  to="/package"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  Sikkim
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/package"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  North Bengal
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/package"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  Madhya Pradesh
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/package"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  Himachal Pradesh
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/package"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  Andaman and Nicobar Islands
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-6">
            <h3 className="mb-3">Social Links</h3>
            <p>Follow us on :</p>
            <div className="social-platform d-flex">
              <a href="#" className="me-3">
                <img
                  src="assets/images/facebook.svg"
                  height="30"
                  alt="Facebook"
                />
              </a>
              <a href="#" className="me-3">
                <img
                  src="assets/images/whatsapp.svg"
                  height="30"
                  alt="WhatsApp"
                />
              </a>
              <a href="#" className="me-3">
                <img
                  src="assets/images/instagram.svg"
                  height="30"
                  alt="Instagram"
                />
              </a>
              <a href="#">
                <img
                  src="assets/images/youtube.svg"
                  height="30"
                  alt="YouTube"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="copyright border-top pt-3 mt-sm-3 mt-4">
          <p className="mb-0 text-center">
            © Copyright 2025, All rights reserved to{" "}
            <Link
              to="/"
              className="fw-semibold"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginLeft: "1px",
              }}
            >
              7 Dimensions Travels
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
