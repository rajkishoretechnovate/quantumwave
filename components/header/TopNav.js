import React from 'react'

function TopNav() {
  return (
    <React.Fragment>
    <div className="header-top ">
          <div className="container-fluid container-padding">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  Are you interested in Joining program? <a href="#">Contact me.</a>
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header-right float-lg-end">
                  <a href="#">Join Now</a>
                  <a href="#">Courses</a>
                  <a href="#">Membership Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default TopNav