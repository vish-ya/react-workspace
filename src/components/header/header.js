import React from 'react';
import './header.css';
// import logoUrl from 'assets/header_background.jpg';
function quote() {
  alert('Quote!');
}
const image_url = 'assets/header.jpg';

const Header = () => (
  <div className="header"
  style={{ backgroundImage : `url(${image_url})` }}>
    <br/><br/>
      <h1 class="header-h">The future of our business </h1>
      <h1 >relieson being informed</h1>
      <button id="header-button" onClick={quote} >Request a quote</button>
  </div>
)
export default Header; 