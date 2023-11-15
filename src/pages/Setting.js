import { FaArrowLeft, FaCog } from "react-icons/fa";
import Notifications from "./Notifications";

function Setting() {
  return (
    <div className="Setting">
      <a href="/Home" className="back">
        <FaArrowLeft />
      </a>
      <div>
        <h4>
          <div className="FaCog">
            <FaCog />
          </div>
          <p>Setting</p>
        </h4>
      </div>
      <Notifications />
    </div>
  );
}
export default Setting;
