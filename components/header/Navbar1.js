import React from 'react'
import Image from 'next/image'
function Navbar1() {
    return (
        <React.Fragment>


            <header className="header">
                <div className="container">
                    <div className="row v-center">
                        <div className="header-item item-left">
                            <div className="logo">
                            <a className="navbar-brand" href="#">
                            <img src="assets/images/qlogowhite.png" alt="Quantum wave AI" className="img-fluid" />
                          </a>
                            </div>
                        </div>
                        {/* menu start here */}
                        <div className="header-item item-center">
                            <div className="menu-overlay">
                            </div>
                            <nav className="menu">
                                <div className="mobile-menu-head">
                                    <div className="go-back"><i className="fa fa-angle-left" /></div>
                                    <div className="current-menu-title" />
                                    <div className="mobile-menu-close">×</div>
                                </div>
                                <ul className="menu-main">
                                    <li className="nav-link ">
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    
                                    <li className="menu-item-has-children">
                                        <a href="#">Consulting<i className="fa fa-angle-down" /></a>
                                        <div className="sub-menu mega-menu mega-menu-column-4">
                                            <div className="list-item">
                                                <h4 className="title"> High Performance Microservices Design</h4>
                                                <ul>
                                                    <li><a href="#">High Throughput</a></li>
                                                    <li><a href="#">High Scalable</a></li>
                                                    <li><a href="#">low latency</a></li>
                                                    <li><a href="#">Highly Secure</a></li>
                                                    <li><a href="#">Gold API Standard</a></li>
                                                </ul>
                                                
                                            </div>
                                            <div className="list-item">
                                            <h4 className="title">Rapid Cloud Microservice Prototyping</h4>
                                            <ul>
                                                <li><a href="#">Serverless - AWS Lambda, GCP and Azure(Small traffic scenarios)</a></li>
                                                <li><a href="#" className="title02">Containerization approach:(Low traffic spike)</a></li>
                                               
                                                <ul>
                                                <li><a href="#" className="title1">AWS:ECS (Fargate, Baremetal)</a></li>
                                                <li><a href="#" className="title1">Azure:Azure Container instances </a></li>
                                                </ul>
                                                <li><a href="#" className="title02">With K8s: (High traffic spike architecture)</a></li>
                                                <ul>
                                                <li><a href="#" className="title1">AWS - EKS, GCP - GKE, Azure - AKE</a></li>
                                                <li><a href="#" className="title1">Install K8s Farget or EC2</a></li>
                                                </ul>
                                            </ul>
                                                
                                            </div>
                                            <div className="list-item">
                                            <a href="#"><h4 className="title">High Performance Computing for Cloud (HPC4C)</h4></a>
                                            <a href="#"><h4 className="title">AI-Driven Solution Development with improved time-to-market</h4></a>
                                            <a href="#"><h4 className="title">Customer experience transformation </h4></a>
                                            <a href="#"><h4 className="title">Customer Service transformation </h4></a>
                                            <a href="#"><h4 className="title">Project Management Consulting </h4></a>
                                               
                                            </div>
                                           
                                        </div>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Technology<i className="fa fa-angle-down" /></a>
                                        <div className="sub-menu mega-menu mega-menu-column-4">
                                          
                                                
                                            <div className="list-item">
                                            <a href="#"><h4 className="title">Microservices and Cloud native applications</h4></a>
                                            <a href="#"><h4 className="title">Cloud - AWS (EKS) , GCP (GKS) and Azure (AKS)</h4></a>
                                            <a href="#"><h4 className="title">DevOps - CI CD</h4></a>
                                            <a href="#"><h4 className="title">Blockchain solution development</h4></a>
                                            
                                            </div>
                                            <div className="list-item">
                                            
                                            <a href="#"><h4 className="title">Test Automation</h4></a>
                                            <a href="#"><h4 className="title">Performance testing</h4></a>
                                            <a href="#"><h4 className="title">Security</h4></a>
                                            <a href="#"><h4 className="title">Artificial Intelligence</h4></a>
                                            </div>
                                            <div className="list-item">
                                            
                                            <a href="#"><h4 className="title">Logging, Monitoring and Alerting</h4></a>
                                            <a href="#"><h4 className="title">Splunk</h4></a>
                                            <a href="#"><h4 className="title">ELK</h4></a>
                                            <a href="#"><h4 className="title">Datadog</h4></a>
                                            
                                               
                                            </div>
                                           </div>
                                        
                                    </li>
                                   
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* menu end here */}
                        <div className="d-flex align-items-center header-item item-right">
                  <div className="header-socials social-links d-none d-lg-none d-xl-block">
                    
                  </div>
                  <form action="#" className="header-form ms-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="search"
                    />
                    <i className="fa fa-search" />
                  </form>
                  <div class="mobile-menu-trigger">
 					<span></span>
 				</div>
                </div>
                    </div>
                </div>
            </header>

        </React.Fragment>
    )
}

export default Navbar1

// <a href="#">
//                       <i className="fab fa-facebook-f" />
//                     </a>
//                     <a href="#">
//                       <i className="fab fa-twitter" />
//                     </a>
//                     <a href="#">
//                       <i className="fab fa-linkedin" />
//                     </a>
//                     <a href="#">
//                       <i className="fab fa-pinterest" />
//                     </a>
