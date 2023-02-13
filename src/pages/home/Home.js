import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="main_container">
      <div className="home_paragraph">
        <div className="anim1">
          <div>
            <div>
              <span>
                <p>Hey There!</p>
              </span>
            </div>
            <div>
              <span>
                <h2>I'm Desmond Test 2</h2>
              </span>
            </div>
          </div>

          <div className="home_title_text">
            <p>
              Freelance Web developer Passionate about bringing ideas to reality
              though web development Freelance Web developer Passionate about
              bringing ideas to reality though web development
            </p>
          </div>
        </div>

        <div className="home_button">
          <button>Email</button>
          <button>LinkedIn</button>
        </div>
      </div>
      <div className="main_container-inner">
        <div className="logo_wrapper">
          <img
            src="../resources/images/ctp-logo.png"
            id="header-image"
            alt=""
            className="fadeIn"
          ></img>
          <h1>Art of Code</h1>
        </div>

        <div className="index_bar_container">
          <a href="https://codepen.io/your-work/" className="button_text_1">
            CodePen
          </a>
          <a href="https://github.com/" className="button_text_1">
            Github
          </a>
          <a href="something" className="button_text_1">
            Blog
          </a>
          <a href="something" className="button_text_1">
            YouTube
          </a>
        </div>

        <div className="index_bar_form_container">
          <form id="index_bar_form_inner">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter email for mail listing..."
            ></input>
            <input
              type="submit"
              id="submit"
              value="Submit"
              href="http://www.codetoprogram.com"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
