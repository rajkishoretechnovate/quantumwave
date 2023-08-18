import React from 'react'

function Contactbody() {
  return (
    <div>
        <section className="contact section-padding">
  <div className="container">
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-7 col-xl-7">
        <div className="section-heading center-heading">
          <span className="subheading">contact</span>
          <h3>For more information about our courses, get in touch</h3>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-4">
        <div className="row">
          <div className="col-lg-12 col-md-6">
            <div className="contact-item">
              <p>Email Us</p>
              <h4>support@email.com</h4>
            </div>
          </div>
          <div className="col-lg-12 col-md-6">
            <div className="contact-item">
              <p>Make a Call</p>
              <h4>+45 234 345467</h4>
            </div>
          </div>
          <div className="col-lg-12 col-md-6">
            <div className="contact-item">
              <p>Corporate Office</p>
              <h4>Moon Street Light Avenue, 14/05 Jupiter, JP 80630 </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <form
          className="contact__form form-row "
          method="post"
          action="mail.php"
          id="contactForm"
        >
          <div className="row">
            <div className="col-12">
              <div
                className="alert alert-success contact__msg"
                style={{ display: "none" }}
                role="alert"
              >
                Your message was sent successfully.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  cols={30}
                  rows={6}
                  className="form-control"
                  placeholder="Your Message"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="mt-4 ">
              <button className="btn btn-main" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contactbody