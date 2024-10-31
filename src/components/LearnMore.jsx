import "../style/LearnMore.css";
import data from "../assets/LearnMore/LearnMore.svg";

function LearnMore() {
  return (
    <div className="learnMore">
      <div className="image">
        <img src={data} alt="" />
      </div>
      <div className="sidebar">
        <div className="main-header">
          How to design your site footer like we did
        </div>
        <div className="description">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </div>
        <div>
          <button className="learnMore-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
