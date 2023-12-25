import React from "react";
import './style.scss'
const Header = () => {
  return (
    <section id="HomeHeader">
      <div className="HomeHeaderSection">
        <div className="HomeHeaderSection__Content">
          <div className="HomeHeaderSection__Content__Text">
            <h1>Replace cash and bankcards</h1>
            <p>With fast and safe wallet</p>
          </div>
          <div className="HomeHeaderSection__Content__Btn">
            <div className="HomeHeaderSection__Content__Btn__Top">
                Download m10
            </div>
            <div className="HomeHeaderSection__Content__Btn__Lower">
                Download m10
            </div>
          </div>
        </div>
        <div className="HomeHeaderSection__Image">
            <img  src="https://static.tildacdn.com/tild3362-3239-4237-b339-643730343930/ENG-3.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
