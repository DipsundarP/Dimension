import { useState } from "react";

function Touch() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("India");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, countryCode, phone, message });
    // You can handle sending form data here (e.g., API call)
  };

  return (
    <div
      className="modal getquoteModal fade"
      id="enquire"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
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
                  alt="Modal"
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
                          placeholder="Full Name"
                          className="form-control"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-12 d-flex">
                        <select
                          className="form-select me-3"
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                        >
                          <option value="India">IND (+91)</option>
                          {/* You can add more countries if needed */}
                        </select>
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="form-control"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          style={{ resize: "none" }}
                          cols="5"
                          rows="3"
                          className="form-control"
                          placeholder="Your message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn1">
                          Submit{" "}
                          <i className="fa-regular fa-paper-plane ps-1"></i>
                        </button>
                      </div>
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
