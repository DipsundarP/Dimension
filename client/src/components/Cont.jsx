import { useState } from "react";

function Cont() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, phoneNumber, emailAddress, message });
    // You can also send the form data to your backend here
  };

  return (
    <section className="contact-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="title">
              
              <span>Contact Us</span>

            </h2>
          </div>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="inner-contain">
              <h3 className="mb-4 fw-semibold">Get In Touch With Us</h3>
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="input-container">
                      <input
                        type="text"
                        id="firstName"
                        className="form-control shadow-none"
                        placeholder=""
                        autoComplete="off"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label htmlFor="firstName">First Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-container">
                      <input
                        type="text"
                        id="lastName"
                        className="form-control shadow-none"
                        placeholder=""
                        autoComplete="off"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <label htmlFor="lastName">Last Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-container">
                      <input
                        type="text"
                        id="phoneNumber"
                        className="form-control shadow-none"
                        placeholder=""
                        autoComplete="off"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <label htmlFor="phoneNumber">Phone Number</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-container">
                      <input
                        type="email"
                        id="emailAddress"
                        className="form-control shadow-none"
                        placeholder=""
                        autoComplete="off"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                      />
                      <label htmlFor="emailAddress">Email Address</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="input-container my-text">
                      <textarea
                        id="message"
                        name="message"
                        className="form-control shadow-none"
                        placeholder=""
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ resize: "none" }}
                      ></textarea>
                      <label htmlFor="message">Your Message</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn1">
                      Submit Your Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="info-contain">
              <div className="row align-items-center">
                <div className="col-2">
                  <div className="icon-con">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                </div>
                <div className="col-10">
                  <h6 className="mb-0">Netaji Nagar, Kolkata 700104 (W.B)</h6>
                </div>
              </div>
            </div>

            <div className="info-contain my-4">
              <div className="row align-items-center">
                <div className="col-2">
                  <div className="icon-con">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                </div>
                <div className="col-10">
                  <h6 className="mb-0">
                    <a href="tel:9062429969">9062429969</a>
                  </h6>
                </div>
              </div>
            </div>

            <div className="info-contain">
              <div className="row align-items-center">
                <div className="col-2">
                  <div className="icon-con">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                </div>
                <div className="col-10">
                  <h6 className="mb-0">
                    <a href="mailto:enquiry@sevendimensiontravels.com">
                      enquiry@sevendimensiontravels.com
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cont;
