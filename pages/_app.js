import { useEffect } from "react";
import "../styles/globals.css";
import { startTracker } from "../utils/tracker";

function MyApp({ Component, pageProps }) {
  /*
  useEffect( () => {
    startTracker({
      userIdEnabled: true
    })
  }, [])
  */

  return <Component {...pageProps} />;
}

export default MyApp;
