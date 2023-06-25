import "./App.css";
import clevertap from "clevertap-web-sdk";

function App() {
  // const AccountId = "84W-6W5-746Z";
  const AccountId = "TEST-84W-6W5-746Z";
  const region = "in1";

  const cleverTapTrackEvents = (
    eventName = "Lead_stage_02_WMS",
    eventProperties = {
      Secondary_Status: "Hungup",
      Status: "Contactable",
      lead_owner_mobile_number: "+91 223323",
      lead_owner_name: "+91 223323",
    }
  ) => {
    clevertap.event.push(eventName, eventProperties && eventProperties);
  };

  const handleOnUserLogin = () => {
    const userObj = {
      Name: "TEST__TEST__",
      Identity: "12e7e8e8-0dd4-47c5-a784-654360b5dhym",
      Phone: `+${"91" + "223323"}`,
    };
    clevertap.onUserLogin.push({
      Site: userObj,
    });
    cleverTapTrackEvents();
  };

  const handleOnUserProfileUpdate = () => {
    const userObj = {
      Name: "TEST__TEST__update",
      Identity: "12e7e8e8-0dd4-47c5-a784-654360b5dhym",
      Phone: `+${"91" + "223323"}`,
      "MSG-email": true, // Disable email notifications
      "MSG-push": true, // Enable push notifications
      "MSG-sms": true, // Enable sms notifications
      "MSG-whatsapp": true,
    };
    clevertap.profile.push({
      Site: userObj,
    });
  };

  const handleInit = () => {
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
  };

  function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload();
    deleteAllCookies();
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
      <button onClick={() => handleOnUserLogin()}>Call on User Login</button>
      <button onClick={() => handleOnUserProfileUpdate()}>
        Call Profile Update
      </button>
      <button onClick={() => handleInit()}>INIT</button>
      <button onClick={() => handleLogout()}>LogOut</button>
    </div>
  );
}

export default App;
