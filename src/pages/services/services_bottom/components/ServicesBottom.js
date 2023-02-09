import "./ServicesBottom.scss";

function ServicesBottom() {
  return (
    <div className="contactUsForm">
      <div className="contactUs">
        <div className="title">
          <h2>Let's Talk</h2>
        </div>

        <div className="contact_box">
          <div className="contact form border_1">
            <form>
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>First Name</span>
                    <input type="text" placeholder="Fisrt name"></input>
                  </div>
                  <div className="inputBox">
                    <span>Last Name</span>
                    <input type="text" placeholder="Last name"></input>
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input type="text" placeholder="dd.@gmail.com"></input>
                  </div>
                  <div className="inputBox">
                    <span>Mobile</span>
                    <input type="text" placeholder="+11 76789 327238"></input>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea placeholder="Write your message here..."></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" value="send"></input>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="contact info">
            <h3>Contact info</h3>
            <div className="infoBox">
              <div>
                <span>
                  <i className="fa-solid fa-location-dot" name="location"></i>
                </span>
                <p>cheadle, Stoke-On-Trent, United Kingdom, ST11 5RD</p>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-envelope" name="mail"></i>
                </span>
                <a href="mailto:dallas@gmail.com">info@gmail.com</a>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-phone-volume" name="call"></i>
                </span>
                <a href="tel:+44 7847 7563">+44 7847 7563</a>
              </div>
              <ul className="sci">
                <div>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </div>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19204.97169308902!2d-2.189871423331689!3d53.00919045966364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a11520fae440d%3A0xf1cdcd2f02caee04!2sStoke-on-Trent!5e0!3m2!1sen!2suk!4v1665497131360!5m2!1sen!2suk"
              //style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesBottom;
