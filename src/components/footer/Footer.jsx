import React from 'react'
import './footer.css'
import nftlogo from '../../assets/logo.png'
import { AiOutlineTwitter, } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className="footer-links">
        <div className="footer-links_logo">
        <div>
          <img src={nftlogo} alt="logo" />
          <p>TVM NFTs</p>
        </div>
        <div>
          <h3>Get the lastes Updates</h3>
        </div>
        <div>
          <input type="text" placeholder='Your Email' />
          <button>Email Me!</button>
        </div>
        </div>
        <div className="footer-links_div">
          <h4>Tenvium Network</h4>
          <p><a href="https://tenvium.network" target="_blank">Official Website</a></p>
          <p><a href="https://tenvium.network/tvmlabs" target="_blank">TVM Labs</a></p>
          <p><a href="https://nft.tenvium.network" target="_blank">TVM NFTs</a></p>
          <p><a href="https://swap.tenvium.network" target="_blank">TVM Swap</a></p>
        </div>
        <div className="footer-links_div">
          <h4>Support</h4>
          <p>Help center</p>
          <p>Terms of service</p>
          <p>Legal</p>
          <p>Privacy policy</p>
        </div>
      </div>
      <div className="footer-copyright">
        <div>
        <p> © {(new Date().getFullYear())} TVM Labs. All Rights Reserved</p>
        </div>
        <div>
        <a href="https://twitter.com/TenviumNetwork" target="_blank">
          <AiOutlineTwitter size={25} color='white' className='footer-icon'/>
        </a>
        <a href="https://t.me/TenviumNetwork" target="_blank">
          <FaTelegramPlane size={25} color='white'  className='footer-icon' />
        </a>
        </div>

      </div>
    </div>
  )
}

export default Footer
