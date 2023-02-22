//import "../wordpress/Wordpress.scss";
import "../styles/wordpress_bottom.scss";
import "../styles/wordpress_cards.scss";
// style for button
import { Button, ButtonLabel } from "../../../components/Button.style";

function WordpressMain() {
  return (
    <div>
      <div id="seo_about">
        <h2>Got a Project In Mind</h2>
        <h3>Let's get started</h3>
        <p>
          We've done loads of great projects over the years. Our experienced
          team have created hundreds of websitess, designs and marketing
          campaigns whatever you're after, we've probably done something similar
          before. Looking for a great new brand that represents what you do
          perfectly? Or an ecommerce website with bespoke features? Perhaps you
          need an effective digital marketing or a unique social media campaign?
        </p>
        <div className="seo_bottom_btn">
          <Button>
            <ButtonLabel>Ready Let's go</ButtonLabel>
          </Button>
        </div>
      </div>

      <div class="cards_container">
        <div class="cards_wrapper">
          <div class="box_image">
            <h4>Content Writing</h4>
            <p>
              Our approach to website design is to create a website that
              strengthens your company's.
            </p>
            <a href="#websites" class="box-image__overlay">
              <div class="box-image_back">
                Our approach to website design is to create a website that
                strengthens your company's brand style ensuring ease of use and
                simplicity for your audience.
              </div>
              <div class="box-image-btn">Learn More</div>
            </a>
          </div>

          <div class="box_image">
            <h4>PPC</h4>
            <p>
              Our approach to website design is to create a website that
              strengthens your company's.
            </p>
            <a href="#websites" class="box-image__overlay">
              <div class="box-image_back">
                Wordpress CMS is a user-friendly administrative area allowing
                you to easily edit your website's content.
              </div>
              <div class="box-image-btn">Learn More</div>
            </a>
          </div>

          <div class="box_image">
            <h4>Social Marketing</h4>
            <p>
              Our approach to website design is to create a website that
              strengthens your company's.
            </p>
            <a href="#websites" class="box-image__overlay">
              <div class="box-image_back">
                We offer customised SEO (Search Engine Optimisation) training to
                ensure your website is rising the ranks in Google and staying at
                the top.
              </div>
              <div class="box-image-btn">Learn More</div>
            </a>
          </div>

          <div class="box_image">
            <h4>Campaigns</h4>
            <p>
              Our approach to website design is to create a website that
              strengthens your company's.
            </p>
            <a href="#websites" class="box-image__overlay">
              <div class="box-image_back">
                If your website is built with Wordpress it's crucial to keep the
                Wordpress version and plugins up-to-date to eliminate
                vulnerabilities.
              </div>
              <div class="box-image-btn">Learn More</div>
            </a>
          </div>

          <div class="box_image">
            <h4>Search Optimisation</h4>
            <p>
              Our approach to website design is to create a website that
              strengthens your company's.
            </p>
            <a href="#websites" class="box-image__overlay">
              <div class="box-image_back">
                Our goal is to design a professional yet creative logo that
                reflects your company’s spirit and leaves a lasting, memorable
                effect.
              </div>
              <div class="box-image-btn">Learn More</div>
            </a>
          </div>

          <div class="box_image">
            <h4>Lead Generation</h4>
            <p>
              Our approach to website design is to create a website that
              strengthens your company's.
            </p>
            <a href="#websites" class="box-image__overlay">
              <div class="box-image_back">
                Professional website content writing by our in-house copywriter,
                Nicholas Grundy. We also offer copy-writing for optimising your
                website's SEO.
              </div>
              <div class="box-image-btn">Learn More</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordpressMain;
