import { Link } from "react-router-dom";
import "../../components/navbar/Navbar.scss";
import pic from "../../Images/logo.png";

const Navbar = () => {
  return (
    <div class="navbar_wrapper" id="myTopnav">
      <ul class="navbar">
        <li>
          <Link to="/">
            <img src={pic} alt="logoImg"></img>
          </Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="wordpress">Wordpress</Link>
        </li>
        <li>
          <Link to="services">Services</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <button
          href="javascript:void(0);"
          class="icon button hamburger"
          onClick="myFunction()"
        >
          <div class="bar"></div>
        </button>
      </ul>

      <script src="../components/navbar/Navbar.js" type="text/javascript" />
    </div>
  );
};

export default Navbar;
