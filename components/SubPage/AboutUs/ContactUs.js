import styles from "../../../pages/about-us.module.css";
import { useState } from "react";

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [button, setButton] = useState("Send Message");
  const [loading, setLoading] = useState(false);

  const [modalTitle, setModalTitle] = useState("Message Sent!");
  const [modalMessage, setModalMessage] = useState(
    "Your Message has been sent Successfully!"
  );

  const validateEmail = (email) => {
    // regex to validate email
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email)) {
      return true;
    }
    return false;
  };

  const validatePhoneNumber = (phoneNumber) => {
    // regex to validate phone number
    const phoneRegex = /^(\+?\d{1,3}|\(\+?\d{1,3}\)|\d{1,4})\s?\d{1,10}$/;
    if (phoneRegex.test(phoneNumber)) {
      return true;
    }
    return false;
  };

  const handleValidate = () => {
    if (firstName === "") {
      setModalTitle("Invalid Form!");
      setModalMessage("First Name is required!");
      return false;
    }

    if (email === "") {
      setModalTitle("Invalid Form!");
      setModalMessage("Email is required!");
      return false;
    }

    if (message === "") {
      setModalTitle("Invalid Form!");
      setModalMessage("Message is required!");
      return false;
    }

    if (!validateEmail(email)) {
      setModalTitle("Invalid Form!");
      setModalMessage("Invalid Email!");
      return false;
    }

    if (phoneNumber !== "" && !validatePhoneNumber(phoneNumber)) {
      setModalTitle("Invalid Form!");
      setModalMessage("Invalid Phone Number!");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // get modal element
    let galleryModal = new bootstrap.Modal(
      document.getElementById("errorModal"),
      {
        keyboard: false,
      }
    );

    // get toast modal element
    let toastModal = new bootstrap.Toast(document.getElementById("toast"), {
      animation: true,
      autohide: true,
      placement: "top-end",
    });

    // handling validation
    if (!handleValidate()) {
      // show error message
      galleryModal.show();
      // toastModal.show();
      return;
    }

    setLoading(true);
    setButton("Sending...");
    const data = {
      firstName,
      lastName,
      companyName,
      email,
      phoneNumber,
      message,
    };

    try {
      fetch("api/email", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*", // It can be used to overcome cors errors
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }

    // Show Success Modal
    setModalTitle("Message Sent!");
    setModalMessage("Your Message has been sent Successfully!");
    toastModal.show();
    setButton("Message Sent!");

    // Reset Form
    reset();
    setTimeout(() => {
      setButton("Send Message");
    }, 3000);
    setLoading(false);
  };

  const reset = () => {
    setFirstName("");
    setLastName("");
    setCompanyName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <div className="bg-kd-primary text-kd-white ">
      <div className="row px-0 mx-0" style={{ maxWidth: "100%" }}>
        <div
          className={`col-12 col-md-6 p-4 py-5 d-flex flex-column justify-content-center align-items-center ${styles.contactUsLeft}`}
        >
          <div className="py-5"></div>
          <div className="px-3 w-full d-flex justify-content-center justify-content-md-start">
            <img
              src="./images/kd-new-logo.png"
              alt="Kirirom Digital Logo"
              style={{ maxWidth: "80%" }}
            />
          </div>
          <div
            className={`px-3 pt-4 text-center text-md-start ${styles.contactUsLeftDesc}`}
          >
            Kirirom Digital takes pride in offering high-quality services with
            quick turnaround times. All our staff in Japan are able to converse
            in English, and are equipped with the latest technology trends.
          </div>
          <div className="py-5"></div>
        </div>
        <div className="col-12 col-md-6 p-5">
          <h3 className="mb-4 pt-2">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="mb-2 col-12 col-md-6">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={styles.inputForm}
                  placeholder="First Name*"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (firstName !== "") {
                      let errMsg = document.getElementById("firstNameError");
                      errMsg.style.visibility = "hidden";
                      document.getElementById("firstName").style.borderColor =
                        "white";
                    }
                  }}
                  onBlur={(e) => {
                    // check if firstName is empty
                    let errMsg = document.getElementById("firstNameError");
                    if (firstName === "") {
                      errMsg.style.visibility = "visible";
                      document.getElementById("firstName").style.borderColor =
                        "red";
                    } else {
                      errMsg.style.visibility = "hidden";
                      document.getElementById("firstName").style.borderColor =
                        "white";
                    }
                  }}
                  required
                />
                <div
                  id="firstNameError"
                  className="text-danger"
                  style={{ visibility: "hidden" }}
                >
                  First Name is required!
                </div>
              </div>
              <div className="mb-2 col-12 col-md-6">
                <input
                  type="text"
                  id="lastName"
                  className={styles.inputForm}
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <div className="text-danger" style={{ visibility: "hidden" }}>
                  Error Message
                </div>
              </div>
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="companyName"
                className={styles.inputForm}
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <div className="text-danger" style={{ visibility: "hidden" }}>
                Error Message
              </div>
            </div>
            <div className="row">
              <div className="mb-2 col-12 col-md-6">
                <input
                  type="email"
                  id="email"
                  className={styles.inputForm}
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (email !== "" && validateEmail(email)) {
                      document.getElementById("emailError").style.visibility =
                        "hidden";
                      document.getElementById("email").style.borderColor =
                        "white";
                    }
                  }}
                  onBlur={(e) => {
                    // get email errMessage element
                    let errMsg = document.getElementById("emailError");

                    if (email === "") {
                      errMsg.style.visibility = "visible";
                      errMsg.innerHTML = "Email is required!";
                      document.getElementById("email").style.borderColor =
                        "red";
                    } else {
                      if (!validateEmail(email)) {
                        errMsg.style.visibility = "visible";
                        errMsg.innerHTML = "Invalid Email!";
                        document.getElementById("email").style.borderColor =
                          "red";
                      } else {
                        errMsg.style.visibility = "hidden";
                        document.getElementById("email").style.borderColor =
                          "white";
                      }
                    }
                  }}
                  required
                />
                <div
                  id="emailError"
                  className="text-danger"
                  style={{ visibility: "hidden" }}
                >
                  Email is required!
                </div>
              </div>
              <div className="mb-2 col-12 col-md-6">
                <input
                  type="tel"
                  id="phoneNumber"
                  className={styles.inputForm}
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <div className="text-danger" style={{ visibility: "hidden" }}>
                  Error Message
                </div>
              </div>
            </div>

            <div className="mb-2 col-12">
              <textarea
                name="message"
                id="message"
                rows="3"
                className={styles.inputForm}
                placeholder="Message..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (message !== "") {
                    let errMsg = document.getElementById("messageError");
                    errMsg.style.visibility = "hidden";
                    document.getElementById("message").style.borderColor =
                      "white";
                  }
                }}
                onBlur={(e) => {
                  // get errmsg element
                  let errMsg = document.getElementById("messageError");
                  if (message === "") {
                    errMsg.style.visibility = "visible";
                    document.getElementById("message").style.borderColor =
                      "red";
                  } else {
                    errMsg.style.visibility = "hidden";
                    document.getElementById("message").style.borderColor =
                      "white";
                  }
                }}
                required
              ></textarea>
              <div
                id="messageError"
                className="text-danger"
                style={{ visibility: "hidden", marginTop: -5 }}
              >
                Message is required!
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`mb-2 text-center ${styles.submitButton}`}
              style={{ border: "none" }}
              onSubmit={handleSubmit}
            >
              {button}
            </button>
          </form>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="errorModal"
        tabIndex="-1"
        aria-labelledby="errorModalLabel"
        aria-hidden="true"
        style={{ color: "black" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="errorModalLabel">
                {modalTitle}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{modalMessage}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary bg-kd-primary px-4"
                data-bs-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div
        className="toast-container position-fixed"
        style={{ top: "20px", right: "20px" }}
      >
        <div
          className="toast align-items-center text-white bg-success border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          id="toast"
        >
          <div className="d-flex">
            <div className="toast-body" style={{ fontSize: 16 }}>
              {modalMessage}
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
