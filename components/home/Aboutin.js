import React from 'react'

function Aboutin() {
  return (
    <div>
        <section className="about-section section-padding">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6 col-lg-6">
        <div className="video-block">
          <img src="assets/images/banner/robot.jpg" alt="" className="img-fluid" />
          {/*  <a href="#" className="video-icon">
            <i className="fa fa-play" />
          </a>*/}
         
        </div>
      </div>
      <div className="col-xl-6 pl-5 col-lg-6">
        <div className="section-heading mt-4 mt-lg-0 list">
          <span className="subheading">We Serve Diverse Industry Verticals</span>
          <h3>
          Industries we serve <span></span>
          </h3>
          <p>
            The ultimate planning solution for busy women who want to reach
            their personal goals.Effortless comfortable eye-catching unique
            detail{" "}
          </p>
        </div>
        <ul className="about-features">
          <li>
            <i className="fa fa-check" />
            <h5>Finance</h5>
          </li>
          <li>
            <i className="fa fa-check" />
            <h5>Healthcare</h5>
          </li>
          <li>
            <i className="fa fa-check" />
            <h5>Education</h5>
          </li>
          <li>
            <i className="fa fa-check" />
            <h5>Retail</h5>
          </li>
          <li>
            <i className="fa fa-check" />
            <h5>Transpostation</h5>
          </li>
          <li>
            <i className="fa fa-check" />
            <h5>Manufacturing</h5>
          </li>
          <li>
            <i className="fa fa-check" />
            <h5>Real estate</h5>
          </li>
        </ul>
        <a href="#" className="btn btn-main">
          Our Courses
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Aboutin