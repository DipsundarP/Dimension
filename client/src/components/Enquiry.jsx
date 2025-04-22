import { useState } from "react";

function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    destination: "",
    guest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add API call here
  };

  return (
    <section className="enquiry-area">
      <div className="container">
        <div className="booking-area rounded-3">
          <h4 className="d-lg-none mb-4 fw-semibold my-primary-color">
            Enquiry Form
          </h4>
          <form className="row g-sm-3 g-2" onSubmit={handleSubmit}>
            <div className="col-lg col-md-6 mb-3 mb-lg-0">
              <input
                type="text"
                name="name"
                className="form-control shadow-none"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg col-md-6 mb-3 mb-lg-0">
              <input
                type="text"
                name="phone"
                className="form-control shadow-none"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg col-md-6 mb-3 mb-lg-0">
              <input
                type="date"
                name="date"
                className="form-control shadow-none"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg col-md-6 mb-3 mb-lg-0">
              <select
                name="destination"
                className="form-select shadow-none"
                value={formData.destination}
                onChange={handleChange}
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
            <div className="col-lg col-md-6 mb-3 mb-lg-0">
              <select
                name="guest"
                className="form-select shadow-none"
                value={formData.guest}
                onChange={handleChange}
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
            <div className="col-lg-2 col-md-6 mb-3 mb-lg-0 text-center">
              <button
                type="submit"
                className="btn1 d-flex align-items-center justify-content-center shadow-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Enquiry;
