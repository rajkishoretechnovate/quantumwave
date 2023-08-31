import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Navbar1() {
    return (
        <React.Fragment>


            <header className="header">
                <div className="container">
                    <div className="row v-center">
                        <div className="header-item item-left ">
                            <div className="logo">
                            <a className="navbar-brand" href="#">
                            <img src="assets/images/qlogowhite.png" alt="Quantum wave AI" className="img-fluid" />
                          </a>
                            </div>
                        </div>
                        {/* menu start here */}
                        <div className="header-item item-center ">
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
                                     <a href="/"> Home</a>
                                    </li>
                                    <li className="nav-link ">
                                     <a href="/about"> About Us</a>
                                    </li>
                                    <li class="menu-item-has-children">
 							<a href="#" className="title">Services <i class="fas fa-angle-down"></i></a>
 							<div class="sub-menu single-column-menu">
 								<ul>
 									<li><a href="#" className="title1">Blockchain Development</a></li>
 									<li><a href="#" className="title1">Application Services</a></li>
 									<li><a href="#" className="title1">Software Development</a></li>
                                     <li><a href="#" className="title1">Mobile Application Development</a></li>
                                     <li><a href="#" className="title1">Cloud services</a></li>
                                     <li><a href="#" className="title1">Internet of Things</a></li>
                                     <li><a href="#" className="title1">AI/ML Solutions</a></li>
                                     <li><a href="#" className="title1">Web Development </a></li>
                                     <li><a href="#" className="title1">UI/UX Design </a></li>
                                     <li><a href="#" className="title1">Testing and QA </a></li>
                                     <li><a href="#" className="title1">Managed IT Services  </a></li>
                                     <li><a href="#" className="title1">Data Analytics </a></li>
                                     <li><a href="#" className="title1">Infrastructure Services </a></li>

 								</ul>
 							</div>
 						</li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Technology<i className="fa fa-angle-down" /></a>
                                        <div className="sub-menu mega-menu mega-menu-column-4">
                                            <div className="list-item">
                                                <h4 className="title">Trending</h4>
                                                <ul>
                                                    <li><a href="#">Block Chain</a></li>
                                                    <li><a href="#">Cloud</a></li>
                                                    <li><a href="#">AI</a></li>
                                                    <li><a href="#">ML</a></li>
                                                    <li><a href="#">Big Data</a></li>
                                                    <li><a href="#">Data Science</a></li>
                                                    <li><a href="#">VR</a></li>
                                                    <li><a href="#">AR</a></li>
                                                </ul>
                                                
                                            </div>
                                            <div className="list-item">
                                            <h4 className="title">Programming</h4>
                                            <ul>
                                                <li><a href="#">Java</a></li>
                                                <li><a href="#" className="title02">Php</a></li>
                                               
                                                
                                                <li><a href="#" className="title1">.Net</a></li>
                                                <li><a href="#" className="title1">Node JS</a></li>
                                                
                                                <li><a href="#" className="title02">Python</a></li>
                                                
                                                <li><a href="#" className="title1">Java Script</a></li>
                                                <li><a href="#" className="title1">React Native</a></li>
                                                <li><a href="#" className="title1">React Js</a></li>
                                                <li><a href="#" className="title1">Next Js</a></li>
                                                <li><a href="#" className="title1">C++</a></li>
                                                
                                            </ul>
                                                
                                            </div>
                                            <div className="list-item">
                                            <h4 className="title">Platform</h4>
                                            <ul>
                                                <li><a href="#">Java</a></li>
                                                <li><a href="#" className="title1">Amazon Web Services</a></li>
                                               
                                                
                                                <li><a href="#" className="title1">Salesforce</a></li>
                                                <li><a href="#" className="title1">Microsoft</a></li>
                                                
                                                <li><a href="#" className="title02">Azure</a></li>
                                                
                                               
                                            </ul>
                                                
                                            </div>
                                           
                                            
                                           
                                        </div>
                                    </li>
                                    <li class="menu-item-has-children">
 							<a href="#" className="title">Industry <i class="fas fa-angle-down"></i></a>
 							<div class="sub-menu single-column-menu">
 								<ul>
 									<li><a href="#" className="title1">Finance</a></li>
 									<li><a href="#" className="title1">Healthcare</a></li>
 									<li><a href="#" className="title1">Education</a></li>
                                     <li><a href="#" className="title1">Retail</a></li>
                                     <li><a href="#" className="title1">Transpostation</a></li>
                                     <li><a href="#" className="title1">Manufacturing</a></li>
                                     <li><a href="#" className="title1">Real estate</a></li>
 								</ul>
 							</div>
 						</li>
                         <li class="menu-item-has-children">
                         <a href="#">Products <i class="fas fa-angle-down"></i></a>
                         <div class="sub-menu single-column-menu">
                             <ul>
                                 <li><a href="#">QYoga</a></li>
                                 
                             </ul>
                         </div>
                     </li>
                        
                                    
                                   
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                    <a href="#">Case Studies</a>
                                </li>
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* menu end here */}
                        
                    </div>
                </div>
            </header>

        </React.Fragment>
    )
}

export default Navbar1
// <div className="d-flex align-items-center header-item item-right">
//                         <div className="header-socials social-links d-none d-lg-none d-xl-block">
                          
//                         </div>
//                         <form action="#" className="header-form ms-3">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="search"
//                           />
//                           <i className="fa fa-search" />
//                         </form>
//                         <div class="mobile-menu-trigger">
//                            <span></span>
//                         </div>
//                         </div>

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
