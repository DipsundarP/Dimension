import { useState } from "react";
import axios from "axios";

function Touch() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "India",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validatePhoneNumber = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", type: "" });

    if (!validatePhoneNumber(formData.phone)) {
      setStatus({
        message: "Please enter a valid 10-digit phone number.",
        type: "error",
      });
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:9000/register",
        formData
      );
      setStatus({ message: "Form submitted successfully!", type: "success" });

      setFormData({
        fullName: "",
        email: "",
        countryCode: "India",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus({
        message: "Failed to submit form. Please try again later.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal getquoteModal fade"
      id="enquire"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-0">
            <button
              type="button"
              className="btn-close m-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="row my-0 px-0">
              <div className="col-md-6 d-none d-lg-block pe-0">
                <img
                  src="assets/images/modal-img.jpg"
                  className="img-fluid modal-img"
                  alt="Modal Visual"
                />
              </div>
              <div className="col-md-6 ps-lg-0">
                <div className="inner-contain p-4">
                  <h4 className="fw-semibold text-center mb-3">Get In Touch</h4>
                  <form onSubmit={handleSubmit} className="mt-3">
                    <div className="row g-3">
                      <div className="col-12">
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          className="form-control"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12 d-flex">
                        <select
                          className="form-select me-3"
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                        >
                          <option value="India">IND (+91)</option>
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          className="form-control"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          name="message"
                          rows="3"
                          className="form-control"
                          placeholder="Your message"
                          style={{ resize: "none" }}
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn1"
                          disabled={loading}
                        >
                          {loading ? "Submitting..." : "Submit"}{" "}
                          <i className="fa-regular fa-paper-plane ps-1"></i>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Touch;
