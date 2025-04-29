import { useState } from "react";
import axios from "axios";

function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "", // <-- Added email
    phone: "",
    date: "",
    destination: "",
    guest: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", type: "" });

    try {
      setLoading(true);
      const response = await axios.post(
        "https://dimension-603l.onrender.com/enquiry",
        formData
      );
      console.log("Response:", response.data);

      setStatus({
        message: "Enquiry submitted successfully!",
        type: "success",
      });

      setFormData({
        name: "",
        email: "", // reset email too
        phone: "",
        date: "",
        destination: "",
        guest: "",
      });
    } catch (error) {
      console.error("Form submission error:", error.response || error.message);
      setStatus({
        message: "Failed to submit enquiry. Please try again later.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="enquiry-area">
      <div className="container">
        <div className="booking-area rounded-3">
          <h4 className="d-lg-none mb-4 fw-semibold my-primary-color">
            Enquiry Form
          </h4>

          <form className="row g-sm-3 g-2" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="col-lg col-md-6 mb-3 mb-lg-0">
              <input
                type="text"
                name="name"
                className="form-control shadow-none"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Input */}
            <div className="col-lg col-md-6 mb-3 mb-lg-0">
              <input
                type="email"
                name="email"
                className="form-control shadow-none"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Input */}
            <div className="col-lg col-md-6 mb-3 mb-lg-0">
              <input
                type="text"
                name="phone"
                className="form-control shadow-none"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date Input */}
            <div className="col-lg col-md-6 mb-3 mb-lg-0">
              <input
                type="date"
                name="date"
                className="form-control shadow-none"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            {/* Destination Dropdown */}
            <div className="col-lg col-md-6 mb-3 mb-lg-0">
              <select
                name="destination"
                className="form-select shadow-none"
                value={formData.destination}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Destination
                </option>
                <option value="Darjeeling">Darjeeling</option>
                <option value="Sundarban">Sundarban</option>
                <option value="Jalpaiguri">Jalpaiguri</option>
                <option value="Bankura">Bankura</option>
                <option value="Malda">Malda</option>
                <option value="Purulia">Purulia</option>
              </select>
            </div>

            {/* Guest Dropdown */}
            <div className="col-lg col-md-6 mb-3 mb-lg-0">
              <select
                name="guest"
                className="form-select shadow-none"
                value={formData.guest}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Guest
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="col-lg-2 col-md-6 mb-3 mb-lg-0 text-center">
              <button
                type="submit"
                className="btn1 d-flex align-items-center justify-content-center shadow-none"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>

            {/* Status Message */}
            {status.message && (
              <div className="col-12 mt-2 text-center">
                <p
                  className={`text-${
                    status.type === "success" ? "success" : "danger"
                  }`}
                >
                  {status.message}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Enquiry;
