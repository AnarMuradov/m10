import React from "react";
import "./style.scss";
const MillionS = () => {
  return (
    <section id="million">
      <div className="millionSection">
        <div className="millionSection__content">
          <div className="millionSection__content__info">
            <div className="millionSection__content__info__head">
              m10 and Milliön are together
            </div>
            <div className="millionSection__content__info__foot">
              No need to stay in que to pay your bills on terminal. Pay online
              with your phone.
            </div>
          </div>
          <div className="millionSection__content__btn">
            See more <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>  

        <div className="millionSection__image">
          <img
            src="https://thumb.tildacdn.com/tild6530-3761-4636-b664-363236643437/-/resize/336x/-/format/webp/Payments__transfers.png"
            alt=""
          />

          <div className="millionSection__image__commission">2% cashback</div>
        </div>
      </div>
    </section>
  );
};

export default MillionS;
