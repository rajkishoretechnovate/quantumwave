import React from 'react'

function TopNav() {
  return (
    <React.Fragment>
    <div className="header-top ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  Are you interested in Joining program? <a href="#">Contact me.</a>
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
              <div className="header-socials social-links d-none d-lg-none d-xl-block text-right">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest" />
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default TopNav