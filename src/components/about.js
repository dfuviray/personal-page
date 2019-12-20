import React from "react";

const About = () => {
  return (
    <div className="section-about  ml-8 pt-4">
      <div className="col s12 m7 l8 offset-m4 offset-l3">
        <h3>
          <span className="orangeyellow-text">DEO FLAUREN</span>
          <span className="dark-orangeyellow-text"> VIRAY</span>
        </h3>
        <p className="move-up-2 font-size-3 opacity-1">Front-end Developer</p>

        <p className="font-size-3 dark-orangeyellow-text">
          Hi! My name is Deo I am a{" "}
          <span className="orangeyellow-text">Front-end</span> Developer from
          Philippines. <br />
          Even I have plenty of Backend experiences in the past. <br />
          Front-end Developement is really what{" "}
          <span className="orangeyellow-text">I love to do</span>.
        </p>

        <a
          href="#"
          className="btn btn-flat orangeyellow dark-orangeyellow-text"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default About;
