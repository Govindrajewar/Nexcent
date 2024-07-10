import "../style/OurClients.css";

import logo1 from "../assets/OurClients/01.svg";
import logo2 from "../assets/OurClients/02.svg";
import logo3 from "../assets/OurClients/03.svg";
import logo4 from "../assets/OurClients/04.svg";
import logo5 from "../assets/OurClients/05.svg";
import logo6 from "../assets/OurClients/06.svg";

import memberLogo from "../assets/OurClients/down/member.svg";
import clubLogo from "../assets/OurClients/down/club.svg";
import navLogo from "../assets/OurClients/down/nat.svg";

function OurClients() {
  return (
    <div className="ourClients">
      <div className="header">Our Clients</div>
      <div className="upper-text">
        We have been working with some Fortune 500+ clients
      </div>
      <div className="logos">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
        <img src={logo3} alt="" />
      </div>
      <div className="sub-header">
        Manage your entire community in a single system
      </div>
      <div className="lower-text">Who is Nextcent suitable for?</div>
      <div className="cards">
        <div className="card">
          <div>
            <img src={memberLogo} alt="" />
          </div>
          <div className="card-header">
            Membership <br /> Organisations
          </div>
          <div className="card-text">
            Our membership management software <br />
            provides full automation of membership <br />
            renewals and payments
          </div>
        </div>

        <div className="card">
          <div>
            <img src={navLogo} alt="" />
          </div>
          <div className="card-header">
            Membership <br />
            Organisations
          </div>
          <div className="card-text">
            Our membership management software <br />
            provides full automation of membership <br />
            renewals and payments
          </div>
        </div>

        <div className="card">
          <div>
            <img src={clubLogo} alt="" />
          </div>
          <div className="card-header">
            Membership <br />
            Organisations
          </div>
          <div className="card-text">
            Our membership management software <br />
            provides full automation of membership <br />
            renewals and payments
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
