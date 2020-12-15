import React from 'react';
import './index.css'
import lupa from '../../../assets/busca/Lupa/Lupa.png'

const SearchBar = ({keyword,setKeyword}) => {

  return (
      <div className='searchbar'>
          <div className='wrapper'>
              <img className='lupa' src={lupa}/> 
          <input 
          className="search-input"
          key="random1"
          value={keyword}
          placeholder={"Procure por heróis"}
          onChange={(e) => setKeyword(e.target.value)}
          />
          </div>
      </div>
  );
}

export default SearchBar