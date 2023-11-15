import { FaArrowLeft } from "react-icons/fa";
import Notifications from "./Notifications";

function Chat() {
  return (
    <div>
      <a href="/Home" className="back">
        <FaArrowLeft />
      </a>
      <Notifications />
    </div>
  );
}

export default Chat;
