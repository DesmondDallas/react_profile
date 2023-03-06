import "../Services.scss";
import { Button, ButtonLabel } from "../../../../components/Button.style";

function Serve() {
  return (
    <div className="header_section">
      <div className="header_left">
        <div>
          <div className="collapse_text">
            <h3 className="anim1">
              <span>What I do</span>
            </h3>
          </div>
          <div className="collapse_text">
            <h1 className="anim1">Services</h1>
          </div>
          <div className="collapse_text">
            <h4 className="anim2">Web Development & Design</h4>
            </div>
          {<br></br>}
          <div className="collapse_text">
            <p className="anim1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quas id illo, magni ipsa veritatis sit fuga doloribus,
              porro voluptas maxime optio ducimus hic recusandae perspiciatis
              dolorum minima, sint officia.
            </p>
          </div>
          <Button>
          <a href="https://www.facebook.com">
            <ButtonLabel>Get started</ButtonLabel>
          </a>
        </Button>
        </div>
      </div>

      <div className="header_right">
        <div className="card_vertical right_left">
          <div className="card_front card_img1">
            <div className="card_overlay border_1"></div>
          </div>
        </div>

        <div className="card_vertical left_right">
          <div className="card_front card_img2">
            <div className="card_overlay border_1"></div>
            <div>
              <h4>React</h4>
              <p>
                Building Robust Websites <br></br> since 2020
              </p>
            </div>
            <div className="second_p">
              <p>PROFESSIONAL WEB DEVELOPER SINCE 2013</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serve;
