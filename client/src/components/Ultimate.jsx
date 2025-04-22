import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Ultimate() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3, // 3 cards on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 950,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 cards on tablet
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 1 card on mobile
        },
      },
    ],
  };

  const packages = [
    {
      img: "assets/images/packages/camel-safari.jpeg",
      title: "Experience a must have of Camel Safari",
      location: "Rajasthan",
      duration: "14 days",
      alt: "Camel Safari",
    },
    {
      img: "assets/images/packages/darjeeling.jpeg",
      title: "A perfect blend of nature and tranquility Darjeeling",
      location: "Darjeeling",
      duration: "4 days",
      alt: "Darjeeling",
    },
    {
      img: "assets/images/packages/pelling.jpeg",
      title: "Explore west Sikkim Pelling & offbeats",
      location: "Sikkim",
      duration: "4 days",
      alt: "Pelling",
    },
    {
      img: "assets/images/packages/thar.jpeg",
      title: "Explore the endless beauty of Thar",
      location: "Rajasthan",
      duration: "14 days",
      alt: "Thar Desert",
    },
  ];

  return (
    <section className="place py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="sub-title my-primary-color">Travel Packages</h3>
            <h2 className="title pb-3">Ultimate Travel Experience</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Slider {...settings}>
              {packages.map((pkg, idx) => (
                <div key={idx} className="px-2">
                  <TravelPackageCard
                    img={pkg.img}
                    title={pkg.title}
                    location={pkg.location}
                    duration={pkg.duration}
                    alt={pkg.alt}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <a href="/" className="btn2 mt-5">
            View more
          </a>
        </div>
      </div>
    </section>
  );
}

function TravelPackageCard({ img, title, location, duration, alt }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="card p-3 border-0 my-shadow mx-2"
      style={{ width: "24rem", height: " 35rem"}}
    >
      <img src={img} className="card-img-top" alt={alt} />
      <div className="card-body p-0 pt-3">
        <div className="d-flex justify-content-between dets mb-2">
          <p className="d-flex align-items-center mb-0">
            <i className="fa-regular fa-compass pe-2"></i> {location}
          </p>
          <p className="d-flex align-items-center mb-0">
            <i className="fa-regular fa-calendar-check pe-2"></i> {duration}
          </p>
        </div>
        <h4 className="card-title border-bottom pt-1 pb-3 fw-medium text-center">
          {title}
        </h4>
        <div className="pt-2 text-center">
          <button
            type="button"
            className="btn1"
            data-bs-toggle="modal"
            data-bs-target="#enquire"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              backgroundColor: hover ? "#007bff" : "",
              color: hover ? "#fff" : "",
              transition: "all 0.3s ease",
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ultimate;
