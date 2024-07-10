import "../style/Register.css";
import toolbar from "../assets/Register/register.svg";

function Register() {
  return (
    <div className="register">
      <div>
        <div className="header-text">
          <span className="upperLine">Lessons and insights</span> <br />
          <span className="lowerLine">from 8 years</span>
        </div>
        <div className="text">
          Where to grow business as a photographer: site or social media?
        </div>
        <button className="register-btn">Register</button>
      </div>
      <div>
        <img src={toolbar} alt="" />
      </div>
    </div>
  );
}

export default Register;
