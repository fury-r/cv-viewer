import * as React from "react";
import '../styles/splash.css'

const Splash = () => {
  const [showSplash, setshowSplash] = React.useState(true);

  if (showSplash) {
    setTimeout(() => {
      console.log("End");
      setshowSplash(false);
    }, 3000);
  }


return(
  showSplash? <div className="welcome">
  <span id="splash-overlay" class="splash"></span>
  <span id="welcome" class="z-depth-4"></span>
</div>:<></>
)
};

export default Splash;
