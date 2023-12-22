import React from 'react'
import './style.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerContainer'>
        <div className='footerContainer__image'>
          <img src="https://static.tildacdn.com/tild6437-6134-4436-b834-313237306565/m10byPashaPay_1.svg" alt="" />

          <div className='footerContainer__image__dowmloadimg'>
            <img src="https://thumb.tildacdn.com/tild3639-3361-4236-a533-323530356162/-/resize/205x/-/format/webp/svg_11_1.png" alt="" />

            <img src="https://thumb.tildacdn.com/tild3161-3265-4563-b864-343930633066/-/resize/205x/-/format/webp/svg_10_1.png" alt="" />
          </div>

        </div>
        <div className='footerContainer__info'>
        <div className='footerContainer__info__head'>
        We are always at your service!
        </div>
        <div className='footerContainer__info__text'>
        We enjoy communication and ready to answer all your questions and queries.
        </div>
        <div className='footerContainer__info__supportImg'>
      <img src="https://thumb.tildacdn.com/tild3861-6334-4537-a238-663035633436/-/resize/60x/-/format/webp/Frame_427319620.png" alt="" />
      <img src="https://thumb.tildacdn.com/tild6362-6462-4234-b330-306633303035/-/resize/60x/-/format/webp/Frame_427319621.png" alt="" />
      <img src="https://thumb.tildacdn.com/tild3731-3337-4361-a630-333132346435/-/resize/60x/-/format/webp/Frame_427319622.png" alt="" />
      <img src="https://thumb.tildacdn.com/tild3065-3937-4634-a333-373237343239/-/resize/60x/-/format/webp/Frame_427319623.png" alt="" />
    <div className='supportNumber'>
    <img src="https://thumb.tildacdn.com/tild3166-3930-4332-b061-396537313263/-/resize/134x/-/format/webp/Frame_427319624.png" alt="" />
      <span>*8810</span>
    </div>
        </div>
        <div className='footerContainer__info__foot'>
          <div className='footerContainer__info__foot__privacy'>
            <img src="https://thumb.tildacdn.com/tild3466-3533-4464-b033-343035643763/-/resize/310x/-/format/webp/Frame_3_1.png" alt="" />
            <span>Privacy policy</span>
          </div>
          <div className='footerContainer__info__foot__terms'>
            <img src="https://thumb.tildacdn.com/tild3430-6263-4334-b731-393964303962/-/resize/229x/-/format/webp/Frame_427319619.png" alt="" />
            <span>Terms of use</span>
          </div>
        </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer