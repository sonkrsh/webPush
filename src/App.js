import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import clevertap from "clevertap-web-sdk";

function App() {
  const AccountId = "86K-85R-746Z";
  const region = "in1";

  useEffect(() => {
    clevertap.init(AccountId, region);
    clevertap.setLogLevel(3);
    clevertap.notifications.push({
      titleText: "aaaa",
      bodyText: "bbbbb",
      okButtonText: "ok",
      rejectButtonText: "rejectButtonText",
      okButtonColor: "okButtonColorInHex",
      askAgainTimeInSeconds: 5,
      serviceWorkerPath: "/clevertap_sw.js",
    });
  }, []);

  const cleverTapTrackEvents = (
    eventName = "Lead_stage_02_WMS",
    eventProperties = {
      Secondary_Status: "Hungup",
      Status: "Contactable",
      lead_owner_mobile_number: "+91 2233223323",
      lead_owner_name: "+91 2233223323",
    }
  ) => {
    clevertap.event.push(eventName, eventProperties && eventProperties);
  };

  const handleOnUserLogin = () => {
    const userObj = {
      Name: "test web push",
      Identity: "12e7e8e8-0dd4-47c5-a784-654360b5d4b7",
      Phone: `+${"91" + "2233223323"}`,
    };
    clevertap.onUserLogin.push({
      Site: userObj,
    });
    cleverTapTrackEvents();
  };

  const handleOnUserProfileUpdate = () => {
    const userObj = {
      Name: "test web push",
      Identity: "12e7e8e8-0dd4-47c5-a784-654360b5d4b7",
      Phone: `+${"91" + "2233223323"}`,
      "MSG-email": true, // Disable email notifications
      "MSG-push": true, // Enable push notifications
      "MSG-sms": true, // Enable sms notifications
      "MSG-whatsapp": true,
    };
    clevertap.profile.push({
      Site: userObj,
    });
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <button onClick={handleOnUserLogin()}>Call on User Login</button>
      <button onClick={handleOnUserProfileUpdate}>Call Profile Update</button>
      <button>Call on User Login</button>
    </div>
  );
}

export default App;
