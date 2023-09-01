import React from 'react'

function ContactForm() {
  return (
    <React.Fragment>
    <section className="section-padding popular-course bg-grey mb-5">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-7">
          <div className="section-heading center-heading">
            <span className="subheading">Wanna Contact Us</span>
            <h3>Contact Us</h3>
            
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col-md-6 col-md-5 text-right scrollimation fade-up d1">
        <img  className='form-img' src="/assets/images/banner/bbb.jpg" alt="" /> 
      </div>
      {/*=== Contact Form ===*/}
      <form id="contact-form" className="col-sm-6 col-md-offset-1 scrollimation fade-left d3" action="contact.php" method="post" noValidate>
        <div className="form-group">
          <label className="control-label" htmlFor="contact-name">Name</label>
          <div className="controls">
            <input id="contact-name" name="contactName" placeholder="Your name" className="form-control requiredField" data-new-placeholder="Your name" type="text" data-error-empty="Please enter your name" />
            <i className="fa fa-user" />
          </div>
        </div>{/* End name input */}
        <div className="form-group">
          <label className="control-label" htmlFor="contact-mail">Email</label>
          <div className=" controls">
            <input id="contact-mail" name="email" placeholder="Your email" className="form-control requiredField" data-new-placeholder="Your email" type="email" data-error-empty="Please enter your email" data-error-invalid="Invalid email address" />
            <i className="fa fa-envelope" />
          </div>
        </div>{/* End email input */}
        <div className="form-group">
          <label className="control-label" htmlFor="contact-phone">Phone</label>
          <div className=" controls">
            <input id="contact-phone" name="phone" placeholder="Your number" className="form-control requiredField" data-new-placeholder="Your number" type="phone" data-error-empty="Please enter your number" />
            <i className="fa fa-envelope" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="contact-message">Message</label>
          <div className="controls">
            <textarea id="contact-message" name="comments" placeholder="Your message" className="form-control requiredField" data-new-placeholder="Your message" rows={6} data-error-empty="Please enter your message" defaultValue={""} />
            <i className="fa fa-comment" />
          </div>
        </div>{/* End textarea */}
        <p className='con-butt'><button name="submit" type="submit" className="btn btn-color2  btn-block" data-error-message="Error!" data-sending-message="Sending..." data-ok-message="Message Sent"><i className="fa fa-paper-plane" />Send Message</button></p>
        <input type="hidden" name="submitted" id="submitted" defaultValue="true" />
      </form>{/* End contact-form */}
    </div>

      </div>
    </section>
    
    </React.Fragment>
  )
}

export default ContactForm
// <section id="contact" className="add-padding border-top-color2">
//     <div className="container text-center">
    //   <div className="row">
    //     <div className="col-sm-6 col-md-5 text-right scrollimation fade-up d1">
    //       <img src="/assets/images/banner/ANI-20230406173018-588x441.jpg" alt="" /> 
    //     </div>
    //     {/*=== Contact Form ===*/}
    //     <form id="contact-form" className="col-sm-6 col-md-offset-1 scrollimation fade-left d3" action="contact.php" method="post" noValidate>
    //       <div className="form-group">
    //         <label className="control-label" htmlFor="contact-name">Name</label>
    //         <div className="controls">
    //           <input id="contact-name" name="contactName" placeholder="Your name" className="form-control requiredField" data-new-placeholder="Your name" type="text" data-error-empty="Please enter your name" />
    //           <i className="fa fa-user" />
    //         </div>
    //       </div>{/* End name input */}
    //       <div className="form-group">
    //         <label className="control-label" htmlFor="contact-mail">Email</label>
    //         <div className=" controls">
    //           <input id="contact-mail" name="email" placeholder="Your email" className="form-control requiredField" data-new-placeholder="Your email" type="email" data-error-empty="Please enter your email" data-error-invalid="Invalid email address" />
    //           <i className="fa fa-envelope" />
    //         </div>
    //       </div>{/* End email input */}
    //       <div className="form-group">
    //         <label className="control-label" htmlFor="contact-phone">Phone</label>
    //         <div className=" controls">
    //           <input id="contact-phone" name="phone" placeholder="Your number" className="form-control requiredField" data-new-placeholder="Your number" type="phone" data-error-empty="Please enter your number" />
    //           <i className="fa fa-envelope" />
    //         </div>
    //       </div>
    //       <div className="form-group">
    //         <label className="control-label" htmlFor="contact-message">Message</label>
    //         <div className="controls">
    //           <textarea id="contact-message" name="comments" placeholder="Your message" className="form-control requiredField" data-new-placeholder="Your message" rows={6} data-error-empty="Please enter your message" defaultValue={""} />
    //           <i className="fa fa-comment" />
    //         </div>
    //       </div>{/* End textarea */}
    //       <p><button name="submit" type="submit" className="btn btn-color2 btn-block" data-error-message="Error!" data-sending-message="Sending..." data-ok-message="Message Sent"><i className="fa fa-paper-plane" />Send Message</button></p>
    //       <input type="hidden" name="submitted" id="submitted" defaultValue="true" />
    //     </form>{/* End contact-form */}
    //   </div>
//     </div>
//   </section>