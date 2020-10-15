import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-5 ">
      <div className="container d-flex align-items-center py-5">
        <div className="row">
          <div className="col-md-5">
            <h1>Let Us handle Your Project, Professionally</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis culpa, necessitatibus quia ad quae ea!
            </p>
          </div>
          <div className="col-md-5 offset-md-1 mx-auto">
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your  email Address "
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name / Company name  "
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  className="form-control"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message "
                ></textarea>
              </div>
              <div className="form-group text-center">
                <button type="button" className="button">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
      <div className="text-center pb-2">
        <p>© Copyright orangeLab {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
