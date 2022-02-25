import React, { useEffect } from "react";
import { isAndroid, isIOS } from "react-device-detect";

const App = () => {
  // useEffect(() => {
  //   if (isAndroid) {
  //     const url =
  //       "intent://metamask.io/#Intent;scheme=https;package=io.metamask;end";

  //     window.location.replace(url);
  //   } else if (isIOS) {
  //     window.location.replace("instagram://");

  //     setTimeout(() => {
  //       window.location.replace(
  //         "https://apps.apple.com/us/app/instagram/id389801252"
  //       );
  //     }, 10000);
  //   } else {
  //     window.location.replace("https://metamask.io");
  //   }
  // }, []);

  const deepLink = () => {
    if (isAndroid) {
          const url =
            "intent://metamask.io/#Intent;scheme=https;package=io.metamask;end";
    
          window.location.replace(url);
    }
    else {
      window.location.replace("https://metamask.io")
    }
  }

  return (
    <div className="App">
      <button className="wallet" onClick={deepLink}>Connect Wallet</button>
      {/* {isAndroid ? (
        <a href="https://play.google.com/store/apps/details?id=io.metamask">
          Open Android app
        </a>
      ) : isIOS ? (
        <a href="https://apps.apple.com/us/app/instagram/id389801252">
          Open iOS app
        </a>
      ) : (
        <a href="https://instagram.com">Open Web app</a>
      )} */}
    </div>
  );
};

export default App;