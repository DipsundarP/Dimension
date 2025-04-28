import { useState } from "react";
import axios from "axios";

function Cont() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });

  // Validate phone number format (10 digits)
  const validatePhoneNumber = (phone) => /^[0-9]{10}$/.test(phone);

  // Validate if fields are not empty
  const validateForm = () => {
    if (!firstName || !lastName || !phoneNumber || !emailAddress || !message) {
      setStatus({
        message: "Please fill all the fields.",
        type: "error",
      });
      return false;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setStatus({
        message: "Please enter a valid 10-digit phone number.",
        type: "error",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", type: "" });

    if (!validateForm()) return;

    const formData = {
      firstName,
      lastName,
      phoneNumber,
      emailAddress,
      message,
    };

    try {
      setLoading(true);
      // Ensure that your backend endpoint is correct and allows POST requests
      const response = await axios.post(
        "http://localhost:9000/contact",
        formData
      );
      console.log("Response:", response.data);

      setStatus({ message: "Message sent successfully!", type: "success" });

      // Reset form fields after successful submission
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setEmailAddress("");
      setMessage("");
    } catch (error) {
      console.error("Form submission error:", error.response || error.message);
      setStatus({
        message: "Failed to send message. Please try again later.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
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
                    <button type="submit" className="btn1" disabled={loading}>
                      {loading ? "Submitting..." : "Submit Your Message"}
                    </button>
                  </div>

                  {status.message && (
                    <div className="col-12">
                      <p
                        className={`mt-2 mb-0 text-${
                          status.type === "success" ? "success" : "danger"
                        }`}
                      >
                        {status.message}
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Contact info section */}
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
                    <a
                      href="tel:9062429969"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        marginLeft: "1px",
                      }}
                    >
                      9062429969
                    </a>
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
                    <a
                      href="mailto:enquiry@sevendimensiontravels.com"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        marginLeft: "1px",
                      }}
                    >
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
