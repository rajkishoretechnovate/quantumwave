import React from 'react'

function Footer() {
  return (

    <div>
        <React.Fragment>
  <section className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 me-auto col-sm-6 col-md-6">
          <div className="widget footer-widget mb-5 mb-lg-0">
            <div className="footer-logo">
            <img src="assets/images/qlogowhite.png" alt="Quantum wave AI" className="img-fluid" />
            </div>
            <p className="mt-3">
              Veniam Sequi molestias aut necessitatibus optio magni at natus
              accusamus.Lorem ipsum dolor sit amet, consectetur adipisicin
              gelit, sed do eiusmod tempor incididunt .
            </p>
            <ul className="list-inline footer-socials">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                {" "}
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-pinterest" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6 col-md-6 col-xl-2">
          <div className="footer-widget mb-5 mb-lg-0">
            <h5 className="widget-title">Consulting</h5>
            <ul className="list-unstyled footer-links">
            <li>
            <a href="#">Management Consulting
            </a>
          </li>
          <li>
                <a href="#">Performance testing 
                </a>
              </li>
              <li>
                <a href="#">Test Automation 

                </a>
              </li>
              <li>
                <a href="#">Security 
                </a>
              </li>
              <li>
                <a href="#">Splunk 
                </a>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6 col-md-6 col-xl-2">
          <div className="footer-widget mb-5 mb-lg-0">
            <h5 className="widget-title">Technology</h5>
            <ul className="list-unstyled footer-links">
            <li>
                <a href="#">Artificial Intelligence
                </a>
              </li>
              <li>
                <a href="#">DevOps - CI CD 
                </a>
              </li>
              <li>
                <a href="#">Cloud Native</a>
              </li>
              <li>
                <a href="#">Microservices</a>
              </li>
              <li>
                <a href="#">Blockchain</a>
              </li>
              
              
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6 col-md-6 col-xl-2">
          <div className="footer-widget footer-links mb-5 mb-lg-0">
            <h5 className="widget-title">Address </h5>
            <ul className="list-unstyled">
              <li>+(68) 345 5902</li>
              <li>info@yourdomain.com</li>
              <li>123 Fifth Floor East 26th Street, New York, NY 10011</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-btm">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="copyright text-lg-start text-center">
              <p>
                © Copyright quantumwaveai Template All rights reserved.
                
              </p>
              <p>
                
                Designed And Developed by{" "}
                <a href="#">Digitalvate</a>{" "}
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <ul className="list-inline footer-contact text-lg-end text-center mt-4 mt-lg-0">
              <li className="list-inline-item">
                <a href="#">Home</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Courses</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Blog</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Support</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer section End */}
  <div className="fixed-btm-top">
    <a href="#top-header" className="js-scroll-trigger scroll-to-top">
      <i className="fa fa-angle-up" />
    </a>
  </div>
</React.Fragment>

    </div>
  )
}

export default Footer