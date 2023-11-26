/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// import logo from "../images/logo.png";
import { FaWindowClose } from "react-icons/fa";
import "../css/App.css";
import Notifications from "./Notifications";
import setIsNotification from "./Notifications";

function Home() {
  return (
    <div className="Home position">
      <div className="window-welcome">
        <div className="Bar-bottom">

        </div>
      </div>
      {/* <div>
        <div className="Bar-left">
          <img src={logo} className="logo-page"></img>
          <a href="/" className="Home-link">
            <FaHome className="icons" />
          </a>
          <a href="/Chat" className="Chat-link">
            <FaRocketchat />
          </a>
          <a href="/Help" className="Help-link">
            <FaQuestionCircle />
          </a>
          <a href="/Setting" className="Setting-link">
            <FaCog className="icons" />
          </a>
        </div> 
        <div>
          <img className="logo-page" src={logo}></img>
        </div>
        <a href="/Video">
          <p>فيديوهات</p>
        </a>
        <a href="/Audios">
          <p>صوتيات</p>
        </a>
        <a href="/Video">
          <p>فيديوهات</p>
        </a>
        <a href="/Video">
          <p>فيديوهات</p>
        </a>
      </div>  */}
      <Notifications />
    </div>
  );
}
export default Home;
