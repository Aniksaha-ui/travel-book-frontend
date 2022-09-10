import React, { useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const BookingForm = (props) => {
  const { name, price } = props.des;
  const tourNameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const personRef = useRef("");
  const priceRef = useRef("");
  const [user] = useAuthState(auth);
  const email = user.email;

  const handleBooking = (e) => {
    e.preventDefault();
    const tourName = tourNameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const person = personRef.current.value;
    const price = priceRef.current.value;
    const personValue = parseInt(person);
    const priceValue = parseInt(price);

    console.log(personValue);
    if (!phone) {
      toast("phone number required");
    }
    if (!person) {
      toast("person required");
    }
    if (person < 1) {
      toast("Person must be grater than 0");
    }

    const booking = {
      tourName: tourName,
      email: email,
      phone: phone,
      numberOfPerson: personValue,
      price: price,
    };
    console.log(booking);

    fetch("https://stormy-gorge-53796.herokuapp.com/booking/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Booking Successfully done.");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className=" bg-img">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-11 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <h3 className="text-center text-primary mt-3">{name}</h3>
              <span className="text-primary text-center"></span>
              <div className="card-body p-4 p-sm-5">
                <form onSubmit={handleBooking}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      disabled="true"
                      ref={tourNameRef}
                      value={name}
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Enter Tour Name"
                    />
                    <label for="floatingPassword1">Enter Tour Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      disabled="true"
                      ref={emailRef}
                      value={email}
                      className="form-control"
                      id="floatingPassword1"
                      placeholder="Enter your email address"
                    />
                    <label for="floatingPassword">
                      Enter your email address
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      ref={phoneRef}
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Enter your phone number"
                    />
                    <label for="floatingPassword">
                      Enter your phone number
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword3"
                      ref={personRef}
                      placeholder="Number Of Person"
                    />
                    <label for="floatingPassword">Number Of Person</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      disabled="true"
                      value={price}
                      ref={priceRef}
                      className="form-control"
                      id="floatingPassword3"
                      placeholder="Tour Price"
                    />
                    <label for="floatingPassword">Price</label>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <button className="btn-lg btn-primary ms-3">
                      Book Now
                    </button>
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-0 ms-4">
        <div className="card me-4">
          <div className="card-header">More Information</div>
          <div className="card-body">
            <h5 className="card-title">
              <i className="fa-solid fa-mobile"></i>&nbsp; 01628781323
            </h5>
            <p className="card-text">
              <i className="fa-solid fa-at"></i> sahaanik1045@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
