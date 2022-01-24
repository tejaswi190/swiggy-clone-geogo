import React from 'react';
import './Cart.css'
import {Link} from 'react-router-dom';
export default function () {
  return <div>
      <div className='cartemptymain'>
           <div className='cartimage'>
           </div>
           <div className='emptyCartheading'>Your cart is empty</div>
           <div class="emptycartsubheading">You can go to home page to view more restaurants</div>
           <Link to='/'><div class="butogotohome">See restaurants near you</div></Link>
      </div>
  </div>;
}
