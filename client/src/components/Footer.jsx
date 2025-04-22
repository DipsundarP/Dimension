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
              <a href="tel:9062429969" className="d-flex align-items-center">
                <i className="fa-solid fa-phone pe-2"></i>+91 90624 29969
              </a>
              <a
                href="mailto:enquiry@sevendimensiontravels.com"
                className="d-flex align-items-center mt-1"
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
                <Link to="/">Home</Link>
              </li>
              <li className="mb-1">
                <Link to="/about">About Us</Link>
              </li>
              <li className="mb-1">
                <Link to="/package">Tour Packages</Link>
              </li>
              <li className="mb-1">
                <Link to="/tour">Offbeat Tour</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-6">
            <h3 className="mb-3">Tour Packages</h3>
            <ul>
              <li className="mb-1">
                <Link to="/package">Odisha</Link>
              </li>
              <li className="mb-1">
                <Link to="/package">Sikkim</Link>
              </li>
              <li className="mb-1">
                <Link to="/package">North Bengal</Link>
              </li>
              <li className="mb-1">
                <Link to="/package">Madhya Pradesh</Link>
              </li>
              <li className="mb-1">
                <Link to="/package">Himachal Pradesh</Link>
              </li>
              <li className="mb-1">
                <Link to="/package">Andaman and Nicobar Islands</Link>
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
            <Link to="/" className="fw-semibold">
              7 Dimensions Travels
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
