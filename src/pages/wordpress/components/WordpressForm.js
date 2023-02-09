import { Button, ButtonLabel } from "../../../components/Button.style";
import { Container } from "../../../components/Container.style";
import WordMod from "../styles/wordpress.module.scss";
import "../../../styles/global/wordpress.Form.scss";


function WordpressForm() {
  return (
    <div class="contactUsForm">
      <div class="contactUs">
        <div class="title">
          <h2>Let's Talk</h2>
        </div>

        <div class="contact_box">
          <div class="contact form border_1">
            <form>
              <div class="formBox">
                <div class="row50">
                  <div class="inputBox">
                    <span>First Name</span>
                    <input type="text" placeholder="First name" />
                  </div>
                  <div class="inputBox">
                    <span>Last Name</span>
                    <input type="text" placeholder="Last name" />
                  </div>
                </div>

                <div class="row50">
                  <div class="inputBox">
                    <span>Email</span>
                    <input type="text" placeholder="dd.@gmail.com" />
                  </div>
                  <div class="inputBox">
                    <span>Mobile</span>
                    <input type="text" placeholder="+11 76789 327238" />
                  </div>
                </div>

                <div class="row100">
                  <div class="inputBox">
                    <span>Message</span>
                    <textarea placeholder="Write your message here..."></textarea>
                  </div>
                </div>

                <div class="row100">
                  <div class="inputBox">
                    <input type="submit" value="send" />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div class="contact info">
            <h3>Contact info</h3>
            <div class="infoBox">
              <div>
                <span>
                  <i class="fa-solid fa-location-dot" name="location"></i>
                </span>
                <p>
                  CHEADLE, STOKE-ON-TRENT, <br />
                  UNITED KINGDOM, ST11 5RD
                </p>
              </div>
              <div>
                <span>
                  <i class="fa-solid fa-envelope" name="mail"></i>
                </span>
                <a href="mailto:dallas@gmail.com">DALLAS.D@GMAIL.COM</a>
              </div>
              <div>
                <span>
                  <i class="fa-solid fa-phone-volume" name="call"></i>
                </span>
                <a href="tel:+44 7847 7563">+44 7847 7563</a>
              </div>
              <ul class="sci">
                <li>
                  <a href="#">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-tiktok"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="contact map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19204.97169308902!2d-2.189871423331689!3d53.00919045966364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a11520fae440d%3A0xf1cdcd2f02caee04!2sStoke-on-Trent!5e0!3m2!1sen!2suk!4v1665497131360!5m2!1sen!2suk"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>


      <Container backgroundColor="#1a1a1a" classNameName={WordMod.page}>
        <div className="page">
          <div className={WordMod.Contain}>
            <div classNameName="wordpress_inner">
              <h1>Wordpress Projects</h1>
              <p classNameName={WordMod.mod}>view the archive</p>
            </div>

            <Button backgroundColor="red">
              <ButtonLabel>Click this Button</ButtonLabel>
            </Button>

            <Button backgroundColor="Violet"> Click this Button</Button>

            <Button classNameName={WordMod.button_5}>button2</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WordpressForm;
