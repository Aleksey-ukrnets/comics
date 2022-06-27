import React, {useState} from 'react'
import Logo from '../assets/logo_gold.png'
import { Link } from 'react-router-dom';

import '../styles/header.scss'

import copy from '../assets/header/copy.png'
// import X from '../assets/header/x.png'

export default function Header() {
  let [openMenu, setOpenMenu] = useState(false)
  
  const anchors = [
    {title: 'Roadmap', link: 'https://battleverse.io/'}, 
    {title: 'Team', link: 'Team'}, 
    {title: 'Tokenomics', link: 'Tokenomics'}
  ]

  let [width, setWidth] = useState(window.innerWidth)

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  let className = "inverted";
  let scrollTrigger = 60;

  window.onscroll = function() {
    if (window.scrollY >= scrollTrigger) {
      document.getElementsByTagName("header")[0].classList.add(className);
    } else {
      document.getElementsByTagName("header")[0].classList.remove(className);
    }
  };

  return (
    <header>
      <div id="header">

      <div className='header_link'>
        <span><b>Contract address:</b> 0x9bee0c15676a65ef3c8cdb38cb3dd31c675bbd12</span>  
        <button onClick={() => navigator.clipboard.writeText('0x9bee0c15676a65ef3c8cdb38cb3dd31c675bbd12')}>
          <img src={copy} alt="copy" />
        </button>    
        {/* <button onClick={() => document.getElementsByClassName('header_link')[0].style.display = 'none'}>
          <img src={X} alt="copy" />
        </button> */}
        <div className='buttons'>
          {[{link: 'https://staking.battleverse.io/', value: 'STAKING'}, {link: 'https://pancakeswap.finance/info/token/0x9bee0c15676a65ef3c8cdb38cb3dd31c675bbd12', value: 'BUY $BVC'}].map((item, index) => (
            <a key={index} 
              onMouseDown={e => {e.target.style.fontSize = '16px'; e.target.style.marginInline = '2px'; e.target.style.filter = 'brightness(85%)'}}
              onMouseLeave={e => {e.target.style.fontSize = '18px'; e.target.style.marginInline = '0px'; e.target.style.filter = 'brightness(100%)'}} 
              onMouseUp={e => {e.target.style.fontSize = '18px'; e.target.style.marginInline = '0px'; e.target.style.filter = 'brightness(100%)'}} 
              href={item.link} target="_blank" rel="noopener noreferrer">
              {item.value}
            </a>
          ))}        
        </div>        
      </div>
      <div className='topBarContainer'>
        <div className='topBar'>
          <Link to='/comics' className='logo'>
            <img src={Logo} alt="logo" />
          </Link>
          <div className='barCenter'>
            {anchors.map((item, index) => (
              <a  
                key={item.link + 1} href='https://battleverse.io/' target='_blank'
                // onClick={() => {
                //   setTimeout(() => {document.getElementById(item.link).scrollIntoView()}, 200)}}
                  onMouseUp={e => {e.target.style.fontSize = '16px'; e.target.style.paddingInline = '0px'; e.target.style.filter = 'brightness(100%)'}}
                  onMouseDown={e => {e.target.style.fontSize = '13.76px'; e.target.style.paddingInline = '5.2px'; e.target.style.filter = 'brightness(55%)'}}
                  onMouseLeave={e => {e.target.style.fontSize = '16px'; e.target.style.paddingInline = '0px'; e.target.style.filter = 'brightness(100%)'}}>{item.title}</a>
            ))}
          </div>
          <div className='additionalMenu'>
            {[{link: 'https://docs.battleverse.io', value: 'Docs'}, {link: null, value: 'Marketplace'}].map((item, index) => (
              <a key={index} 
                onMouseUp={e => {e.target.style.fontSize = width>1024? '16px' : width>800 ? '14px' : width>380 ?  '15px' : '14px' ; e.target.style.marginInline = '0px'; e.target.style.filter = 'brightness(100%)'}}
                onMouseDown={e => {e.target.style.fontSize = width>1024? '15px' : width>800 ? '13px' : width>380 ? '14px' : '13px' ; e.target.style.marginInline = '1px'; e.target.style.filter = 'brightness(55%)'}}
                onMouseLeave={e => {e.target.style.fontSize = width>1024? '16px' : width>800 ? '14px' : width>380 ? '15px' : '14px' ; e.target.style.marginInline = '0px'; e.target.style.filter = 'brightness(100%)'}} href={item.link} target="_blank" rel="noopener noreferrer">{item.value}</a>
            ))}
          </div>
          <div className={openMenu ? 'openMenu active' : 'openMenu'}  onClick={() => {setOpenMenu(!openMenu)}}>
              <div />
              <div />
          </div>
        </div>
      </div>
      <div className='adaptiveMenuShadow' onClick={() => {setOpenMenu(!openMenu)}} style={{ zIndex: openMenu ? '99999' : '-9999999999999', backgroundColor: openMenu ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)', visibility: openMenu ? 'visible' : 'hidden'}} />
      {width<1024 && <div className='adaptiveMenu' style={{ top: openMenu ? '128px' : '-20em'}}>
        {anchors.map((item, index) => (
          <div key={index}>
            <a href='https://battleverse.io/' target='_blank' onClick={() => {setOpenMenu(!openMenu)}}>{item.title}</a>
          </div>
        ))}
      </div>}
      </div>

    </header>
  )
}