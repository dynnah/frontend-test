import React from 'react'
import './index.css'
import favorite from '../../../assets/icones/heart/favorite-hero.png'

function HeroCard(props) {
  const { hero } = props;

  return (
    <div className='card'>
      <div className='upper-container'>
        <div className='image-container'>
          <img className='img-hero' src={hero.image} alt="" height="100px" width="100px" />
        </div>
      </div>
      <div className='lower-container'>
        <p className="hero-name">{hero.name}</p>
        <input type="image" src={favorite} alt="Favorite Hero" />
      </div>
    </div>

  )
}

export default HeroCard
