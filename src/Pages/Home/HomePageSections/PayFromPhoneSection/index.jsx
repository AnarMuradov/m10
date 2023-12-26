import React from 'react'
import './style.scss'
const PayFromPhone = () => {
  return (
    <section id="PayFromPhone">
      <div className="PayFromPhoneSection">
        <div className="PayFromPhoneSection__content">
          <div className="PayFromPhoneSection__content__info">
            <div className="PayFromPhoneSection__content__info__head">
                Pay from phone
            </div>
            <div className="PayFromPhoneSection__content__info__foot">
            It is quite easy. Pay without a bankcard or cash at over 10.000 points of sale. And we will add immediately up to 6% cashback to your m10 balance.
            </div>
          </div>
          <div className="PayFromPhoneSection__content__btn">
            See more <i className="fa-solid fa-arrow-right"></i>
          </div>

          <div className='PayFromPhoneSection__content__img'>
            <img src="https://static.tildacdn.com/tild6138-3538-4633-b166-376562613234/Logo_with_higher_cas.png" alt="" />
          </div>
        </div>      

        <div className="PayFromPhoneSection__image">
          <img
            src="https://thumb.tildacdn.com/tild3139-6335-4838-a365-623339376632/-/resize/326x/-/format/webp/photo.png"
            alt=""
          />

          <div className="PayFromPhoneSection__image__commission">2% cashback</div>
        </div>
      </div>
    </section>
  )
}

export default PayFromPhone