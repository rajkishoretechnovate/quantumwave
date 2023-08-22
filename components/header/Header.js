import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <div>
      <header>
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
        {/* Main Menu Start */}
        <div
          className="site-navigation main_menu menu-transparent"
          id="mainmenu-area"
        >
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid container-padding">
              <a className="navbar-brand" href="#">
                <img src="assets/images/qlogo.png" alt="Quantum wave AI" className="img-fluid" />
              </a>
              {/* <a className="navbar-brand" href="index.html">
          <h2>QuantumWaveAI</h2>
        </a> */}
              {/* Toggler */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarMenu"
                aria-controls="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="fa fa-bars" />
              </button>
              {/* Collapse */}
              <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="navbar3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home

                    </Link>

                  </li>
                  <li className="nav-item ">
                    <Link href="/about" className="nav-link js-scroll-trigger">
                      About us
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbar3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Consulting <i class="fa fa-angle-down" />

                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbar3">
                    <ul className="">
                      <li className="">
                      <a className="dropdown-item " href="#">
                      High Performance Microservices Design<i class="fa fa-angle-down" />
                      </a>
                      </li>
                      </ul>
                      <a className="dropdown-item " href="#">
                      Rapid Cloud Microservice Prototyping
                      </a>
                      <a className="dropdown-item " href="#">
                      High Performance Computing for Cloud (HPC4C)
                      </a>
                      <a className="dropdown-item " href="#">
                      AI-Driven Solution Development
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbar3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Technology<i class="fa fa-angle-down" />

                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbar3">
                      <a className="dropdown-item " href="#">
                        Cloud
                      </a>
                      <a className="dropdown-item " href="#">
                        Test Automation
                      </a>
                      <a className="dropdown-item " href="#">
                        Security
                      </a>
                      <a className="dropdown-item " href="#">
                        Devops
                      </a>
                    </div>

                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbar3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog

                    </a>

                  </li>
                  <li className="nav-item ">
                    <a href="/contact" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="d-flex align-items-center">
                  <div className="header-socials social-links d-none d-lg-none d-xl-block">
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
                  <form action="#" className="header-form ms-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="search"
                    />
                    <i className="fa fa-search" />
                  </form>
                </div>
              </div>{" "}
              {/* / .navbar-collapse */}
            </div>{" "}
            {/* / .container */}
          </nav>
        </div>
      </header>

    </div>
  )
}

export default Header