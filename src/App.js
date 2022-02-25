import React, { useState } from "react";
import { isAndroid } from "react-device-detect";
// import { browserName } from "react-device-detect";

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

  // const [metaBrowser, setMetaBrowser] = useState(false)
  const [address, setAddress] = useState()

  const deepLink = () => {
    if(window.ethereum) {
      connectWallet()
    }
    else {
      if (isAndroid) {
        // const url = "intent://metamask.io/#Intent;scheme=https;package=io.metamask;end";
        const url = 'https://metamask.app.link/dapp/deep-linking.vercel.app'
        window.location.replace(url);
      }
      else {
        window.location.replace("https://metamask.io")
      }
    }
  }

  const connectWallet = async () => {
    const [selectedAddress] = await window.ethereum.enable();
    setAddress(selectedAddress)
  }
  return (
    <div className="App">
      <button className="wallet" onClick={deepLink}>Connect Wallet</button><br></br>
      {/* <button className="wallet" onClick={getBrowser}>Get Browser</button> */}
      <span>{address}</span>
    </div>
  );
};

export default App;