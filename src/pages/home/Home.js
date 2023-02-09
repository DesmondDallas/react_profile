import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="main_container">
      <div className="home_paragraph">
          <p className="anim1">
            <span className="home_title1">Hey There!<br />
              <div className="home_title2">I'm Desmond<br /></div><br />
            </span>
            <span className="home_title_text">
              Freelance Web developer<br />Passionate about bringing<br />
              ideas to reality though web<br/> development</span>
          </p>
          <div className="t_width">
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
