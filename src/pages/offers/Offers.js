import React from 'react';
import './Offers.css'
export default function Offers() {
  return <div className='off'>
       <div className='offersbox'>
            <div className='offheadtext'>
                  <div>
                    <div className='offmainhead'>
                        Offers for you
                    </div>
                    <div className='offsubhead'>
                         explore top deals and offers exclusivey for you!
                    </div>
                  </div>
                  <div>
                    <img class="offimg" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham"></img>
                  </div>
            </div>
       </div>
       <div className='typesofoff'>
            <div className='restaurantoffs active'>
                  Restaurant Offers
            </div>
            <div className='paymentoffs'>
                 payment Offers/Coupons
            </div>
        </div>
        <hr></hr>
  </div>;
}
