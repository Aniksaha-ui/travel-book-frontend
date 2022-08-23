import React from "react";

const BookingForm = (props) => {
  const { name, price } = props.des;
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-11 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <h3 className="text-center text-primary mt-3">{name}</h3>
              <span className="text-primary text-center"></span>
              <div className="card-body p-4 p-sm-5">
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Enter Email"
                    />
                    <label for="floatingPassword1">Enter Email</label>
                  </div>
                  {/* email  */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword1"
                      placeholder="Enter your email address"
                    />
                    <label for="floatingPassword">
                      Enter your email address
                    </label>
                  </div>
                  {/* email  */}
                  {/* phone  */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword2"
                      placeholder="Enter your email address"
                    />
                    <label for="floatingPassword">
                      Enter your phone number
                    </label>
                  </div>
                  {/* phone  */}
                  {/* no of person  */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingPassword3"
                      placeholder="Number Of Person"
                    />
                    <label for="floatingPassword">Number Of Person</label>
                  </div>
                  {/* no of person  */}
                  {/* no of person  */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      disabled="true"
                      value={price}
                      className="form-control"
                      id="floatingPassword3"
                      placeholder="Tour Price"
                    />
                    <label for="floatingPassword">Price</label>
                  </div>
                  {/* no of person  */}

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
      <div className="mt-0 ms-5">
        <div className="card">
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
