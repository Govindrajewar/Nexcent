import "../style/Footer.css";
import logo from "../assets/NavBar/logo.jpeg";

import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-start">
        <div className="footer-icon">
          <img src={logo} alt="" className="logo" />
          <div className="footer-icon-header">Nexcent</div>
        </div>
        <div className="footer-middle-data">
          <div>Copyright : All rights reserved</div>
          <div>Created by : Govind Rajewar</div>
        </div>
        <div className="sites">
          <span className="site">
            <IoLogoInstagram />
          </span>
          <span className="site">
            <FaTwitterSquare />
          </span>
          <span className="site">
            <FaYoutube />
          </span>
          <span className="site">
            <FaFacebook />
          </span>
        </div>
      </div>
      <div className="footer-list">
        <div className="footer-header">Company</div>

        <div>
          <a>About Us</a>
        </div>
        <div>
          <a>Blog</a>
        </div>
        <div>
          <a>Contact Us</a>
        </div>
        <div>
          <a>Pricing</a>
        </div>
        <div>
          <a>Testimonials</a>
        </div>
      </div>
      <div className="footer-list">
        <div className="footer-header">Support</div>
        <div>
          <a>Help Center</a>
        </div>
        <div>
          <a>Terms of Service</a>
        </div>
        <div>
          <a>Legal</a>
        </div>
        <div>
          <a>Privacy Policy</a>
        </div>
        <div>
          <a>Status</a>
        </div>
      </div>
      <div className="footer-list footer-last ">
        <div className="footer-header">Stay up to date</div>
        <div className="footer-input">
          <FaMagnifyingGlass />
          <input type="text" placeholder="Email address" />
          <button className="send-btn">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
