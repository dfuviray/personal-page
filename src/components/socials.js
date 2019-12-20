import React from "react";

const Socials = () => {
  return (
    <section className="section-socials">
      <div className="container">
        <div className="row">
          <div className="col s3">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/deo-flauren-viray/"
            >
              <i className="fa fa-linkedin white-text" aria-hidden="true"></i>
            </a>
          </div>
          <div className="col s3">
            <a target="_blank" href="#">
              <i className="fa fa-instagram white-text" aria-hidden="true"></i>
            </a>
          </div>
          <div className="col s3">
            <a target="_blank" href="https://github.com/dfuviray">
              <i className="fa fa-github-alt white-text" aria-hidden="true"></i>
            </a>
          </div>
          <div className="col s3">
            <a target="_blank" href="https://medium.com/@deo.uviray">
              <i className="fa fa-medium white-text" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
