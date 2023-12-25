import React from "react";
import './style.scss'
const Transfer = () => {
  return (
    <section id="transfer">
      <div className="transferSection">
        <div className="transferSection__content">
          <div className="transferSection__content__info">
            <div className="transferSection__content__info__head">
              Send or receive money with friends from anywhere
            </div>
            <div className="transferSection__content__info__foot">
              With 0₼ commission and no surprises. Money is transferred
              instantly.
            </div>
          </div>
          <div className="transferSection__content__img">
            <div className="transferSection__content__img__m10">
              <img
                src="https://thumb.tildacdn.com/tild6131-3462-4131-b030-323733363631/-/resize/144x/-/format/webp/_m19.jpg"
                alt=""
              />
              <span>To m10</span>
            </div>
            <div className="transferSection__content__img__card">
              <img
                src="https://thumb.tildacdn.com/tild6431-3933-4037-b431-396434326636/-/resize/144x/-/format/webp/_.jpg"
                alt=""
              />
              <span>To card</span>
            </div>
          </div>
        </div>

        <div className="transferSection__image">
            <img src="https://thumb.tildacdn.com/tild3430-3361-4836-a532-336134303731/-/resize/560x/-/format/webp/iOS_717_2.png" alt="" />

            <div className="transferSection__image__commission">
                0% commission
            </div>
        </div>
      </div>
    </section>
  );
};

export default Transfer;
