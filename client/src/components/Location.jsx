import React from "react";

const Location = () => {
  return (
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7373.340384625958!2d88.35603494490998!3d22.47902478191498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270fb5636f039%3A0xa4c7782afb8b88c9!2sNetaji%20Nagar%2C%20Kolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2snp!4v1724995173241!5m2!1sen!2snp"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </section>
  );
};

export default Location;
