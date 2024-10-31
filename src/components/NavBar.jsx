import "../style/NavBar.css";
import logo from "../assets/NavBar/logo.jpeg";
import { IoMoon } from "react-icons/io5";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="title">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="title-name">Nexcent</div>
      </div>
      <div className="navigation-bar">
        <a href="#Home">Home</a>
        <a href="#Services">Services</a>
        <a href="#Features">Features</a>
        <a href="#Product">Product</a>
        <a href="#Testimonial">Testimonial</a>
        <a href="#FAQ">FAQ</a>
      </div>
      <div className="buttons">
        <IoMoon className="moon" />
        <button className="navbar-btn">Sign Up</button>
        <button className="navbar-btn">Login</button>
      </div>
    </div>
  );
}

export default NavBar;
