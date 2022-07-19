import React from 'react'
import './bids.css'
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import bids1 from '../../assets/bids1.png'
import bids2 from '../../assets/bids2.png'
import bids3 from '../../assets/bids3.png'
import bids4 from '../../assets/bids4.png'

import { Link } from 'react-router-dom';

const Bids = ({title}) => {
  return (
    <div className='bids section__padding'>
      <div className="bids-container">
        <div className="bids-container-text">
          <h1>{title}</h1>
        </div>
        <div className="bids-container-card">
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids1} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Skeleton Smoke</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>225 <span>TVM</span></p>
                <p> <AiFillHeart /> 92</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids2} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Alien Humanize</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>200 <span>TVM</span></p>
                <p> <AiFillHeart /> 75</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids3} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Extreme Box</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>115 <span>TVM</span></p>
                <p> <AiFillHeart /> 55</p>
              </div>
            </div>
          </div>
          <div className="card-column" >
            <div className="bids-card">
              <div className="bids-card-top">
                <img src={bids4} alt="" />
              <Link to={`/post/123`}>
              <p className="bids-title">Neon Car</p>
              </Link>
              </div>
              <div className="bids-card-bottom">
                <p>105 <span>TVM</span></p>
                <p> <AiFillHeart /> 42</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="load-more">
        <button>Load More</button>
      </div>
    </div>
  )
}

export default Bids
