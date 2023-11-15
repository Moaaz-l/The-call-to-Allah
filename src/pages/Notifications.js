/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { useState } from "react";

function Notifications() {
  const [isNotification, setIsNotification] = useState("h Close");
  useEffect(() => {
    setTimeout(() => {
      setIsNotification("h Open");
    }, 3000);
  }, []);
  return (
    <div className="Notifications">
      <div className="send">
        <div className={isNotification}>
          <img src="logo.png"></img>
          <p>الدعوة الى الله</p>
          <h5>اعرض مشكلتك</h5>
          <button>انضم الى المحادثة الان</button>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
