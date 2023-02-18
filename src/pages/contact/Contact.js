import React from "react";
import "../contact/Contact.scss";

function Contact() {
  return (
    <div id="form">
      <div class="form-top fadeIn">
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-tiktok"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>

      <div class="fadeIn">
        <h5>Join our news letter</h5>
        <form action="/action_page.php" class="form-container" />
        <div>
          <div>
            <input type="text" name="name" placeholder="Your name.." />
          </div>

          <div>
            <input type="text" name="lastname" placeholder="Your last name.." />
          </div>
        </div>

        <div>
          <input type="text" placeholder="Email address" name="mail" required />
          <input class="form-submit" type="submit" value="Submit" />
          <label>
            <input type="checkbox" checked="checked" name="subscribe" />
            Weekly Newsletter
          </label>
        </div>
      </div>

      <div class="form_middle_section">
        <div class="form_middle_inner">
          <p class="anim1">
            <a href="mailto:djon@hotmail.com">djon@hotmail.com</a>
          </p>
        </div>
        <br />
        <div class="form_middle_inner">
          <p class="anim2">101 Bridge Lane</p>
        </div>
        <br />
        <div class="form_middle_inner">
          <p class="anim3">Stoke-on-Trent</p>
        </div>
        <br />
        <div class="form_middle_inner">
          <p class="anim4">LG1 8PD</p>
        </div>
        <br />
        <div class="form_middle_inner">
          <p class="anim5">
            <a href="tel:0786545245">0786545245</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
