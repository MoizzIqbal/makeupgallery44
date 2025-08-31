import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import contactimg from "../assets/images/photos/contact.webp";
import callicon from "../assets/images/icons/1.webp";
import emailicon from "../assets/images/icons/2.webp";
import locicon from "../assets/images/icons/3.webp";
function Contact() {

  const [formData, setFormdata] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto" if you want instant
    });
  }, []);
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setIsValid(true);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 
    if (
      formData.fname &&
      formData.lname &&
      formData.email &&
      formData.message&&
      emailRegex.test(formData.email)
    ) {
      alert("ihuh");
      console.log(formData);
      setFormdata({
        fname: "",
        lname: "",
        email: "",
        message: "",
      });
      setIsValid(false);
      return;
    }
     
  };
  return (
    <>
      <main className="main-content">
          <nav aria-label="breadcrumb" class="breadcrumb-style1 mb-10">
          <div class="container">
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </div>
        </nav>
        <section className="contact-area">
          <div className="container">
            <div className="row">
              <div className="offset-lg-6 col-lg-6">
                <div className="section-title position-relative">
                  <h2 className="title">Get in touch</h2>
                  <p className="m-0">
                    We’re just a message away — let’s start the conversation.
                  </p>
                  <div className="line-left-style mt-4 mb-1"></div>
                </div>

                <div className="contact-form">
                  <form
                    id="contact-form"
                    onSubmit={formSubmit}
                    className={`needs-validation ${
                      isValid ? "was-validated" : ""
                    }`}
                    noValidate
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="fname"
                            onChange={handelChange}
                            value={formData.fname}
                            placeholder="First Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="lname"
                            value={formData.lname}
                            onChange={handelChange}
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handelChange}
                            placeholder="Email address"
                            
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="message"
                            value={formData.message}
                            onChange={handelChange}
                            placeholder="Message"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb-0">
                          <button className="btn btn-sm" type="submit">
                            SUBMIT
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="form-message"></div>
              </div>
            </div>
          </div>
          <div
            className="contact-left-img"
            style={{ backgroundImage: `url(${contactimg})` }}
          ></div>
        </section>

        <section className="section-space">
          <div className="container">
            <div className="contact-info">
              <div className="contact-info-item">
                <img
                  className="icon"
                  src={callicon}
                  width="30"
                  height="30"
                  alt="Icon"
                />
                <a href="tel://+11020303023">+11 0203 03023</a>
                <a href="tel://+11020303023">+11 0203 03023</a>
              </div>
              <div className="contact-info-item">
                <img
                  className="icon"
                  src={emailicon}
                  width="30"
                  height="30"
                  alt="Icon"
                />
                <a href="mailto://example@demo.com">example@demo.com</a>
                <a href="mailto://demo@example.com">demo@example.com</a>
              </div>
              <div className="contact-info-item mb-0">
                <img
                  className="icon"
                  src={locicon}
                  width="30"
                  height="30"
                  alt="Icon"
                />
                <p>Sunset Beach, North Carolina(NC), 28468</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
