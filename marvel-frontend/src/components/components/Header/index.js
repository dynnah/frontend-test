import React from 'react';
import './index.css';
import { ReactComponent as Logo } from '../../../assets/logo/logo.svg'

function Header() {
  return (
    <div className='header'>
      <Logo />
      <h2>EXPLORE O UNIVERSO</h2>
      <p>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve</p>
    </div>
  );
}

export default Header;