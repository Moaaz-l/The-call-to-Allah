/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import logo from "../images/logo.png";
import { FaCog, FaHome, FaRocketchat, FaQuestionCircle } from "react-icons/fa";
import "../css/App.css";
import Notifications from "./Notifications";

function Home() {
  return (
    <div className="Home position">
      <div>
        <div className="Bar-left">
          <img src={logo} className="logo-page"></img>
          <a href="/" className="Home-link">
            <FaHome className="icons" />
          </a>
          <br />
          <a href="/Chat" className="Chat-link">
            <FaRocketchat />
          </a>
          <br />
          <a href="/Help" className="Help-link">
            <FaQuestionCircle />
          </a>
          <br />
          <a href="/Setting" className="Setting-link">
            <FaCog className="icons" />
          </a>
        </div>
      </div>
      <Notifications />
    </div>
  );
}
export default Home;
