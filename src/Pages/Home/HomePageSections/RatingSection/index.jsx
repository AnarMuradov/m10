import React from 'react'
import './style.scss'
const Rating = () => {
  return (
    <section id='rating'>
        <div className='ratingContainer'>
        <div className='ratingContainer__partners'>
            <p>10 000+</p>
            <span>Partners</span>
        </div>
        <div className='ratingContainer__downloads'>
            <p>1 000 000+</p>
            <span>Downloads</span>
        </div>
        <div className='ratingContainer__appRating'>
            <p>4.9 <i class="fa-solid fa-star"></i></p>
            <span>App rating</span>
        </div>
        <div className='ratingContainer__powered'>
            <img src="https://static.tildacdn.com/tild6163-3061-4634-b030-643030626630/Logo_PashaPay.svg" alt="" />
            <span>Powered by</span>
        </div>

        </div>

    </section>
  )
}

export default Rating