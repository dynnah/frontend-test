import React, { useState } from 'react'
import Switch from '../Switch'
import hero from '../../../assets/icones/heroi/superhero.png'
import heart from '../../../assets/icones/heart/favorite-heart.png'
import './index.css'

function Filter() {

  const [isToggled, setIsToggled] = useState(false);

    return (
        <div className="flex-container">
          <div className="flex-child">
            <p className="found-p">Encontrados 20 heróis</p>
          </div>
          <div className="flex-child">
            <img className='hero' src={hero}/> 
            <p className="options-p">Ordernar por nome - A/Z </p>
            <Switch rounded={true} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
            <img className='heart' src={heart}/> 
            <p className="options-p">Somente favoritos</p>
          </div>
            
        </div>
    )
}

export default Filter
