import React from 'react';
import './Restaurant.css'
import StarIcon from '@mui/icons-material/Star';
import CircleIcon from '@mui/icons-material/Circle';
import { lightGreen } from '@mui/material/colors';
function Restaurant() {
  return <div>
        <div className='selectedres'>
            <div className='selectedreshead'>
                <div className='selected'>
                    <div className='row inrest'>
                        <div className='col-3 restaurantimg'>
                            <div className='selectedrestimg'>
                                <img class="restimg" alt="Winni Cakes &amp; More"
                                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ywbmzjek5p1l63efdwei">
                                </img>
                            </div>
                        </div>
                        <div className='col-6 middle'>
                            <div className='heading'>
                              <div className='selectedresthead'>
                                 <h1 className='restmainheading'>winni cakes and more</h1>
                              </div>
                              <div className='selectedrestsub'>
                                 biriyani
                              </div>
                              <div className='selectedrestaddress'>
                                  kazipet,somagiguda
                              </div>
                            </div>
                             <div className='otherdata'>
                                 <div className='fc'>
                                    <div className='fc1'>
                                        <StarIcon fontSize='small'/>
                                        <span>3.6</span>
                                    </div>
                                    <div className='fc2'>
                                        <span className='ffc1'>100+ Ratings</span>
                                    </div>
                                 </div>
                                 <div className='fc sc'>
                                     <div className='fc1 sc1'>
                                          32 MINS
                                     </div>
                                     <div className='fc2 sc2'>
                                         <span>Delivery time</span>
                                     </div>
                                 </div>
                                 <div className='sc tc'>
                                      <div className='fc1 tc1'>
                                          <span>Rs.100</span>
                                      </div>
                                      <div className='fc2'>
                                           <span>Cost For Two</span>
                                      </div>
                                 </div>
                             </div>
                        </div>
                        <div className='col-3'>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='row menulist'>
                        <div className='col-3 menutypes'>

                        </div>
                        <div className='col-5 menuitems'>
                             <h2 className='headingitem'>Menu items</h2>
                             <div className='noof'>12 items</div>
                             <div className='menuitem'>
                                 <div className='styleitem'>
                                     <div className='item1'>
                                        <div className='vegornonveg'>
                                            <CircleIcon className='veg' sx={{color:lightGreen[500]}} fontSize='small'/>
                                        </div>
                                       <div className='itemname'>
                                           Idle-2pcs
                                       </div>
                                       <div className='itemprice'>
                                           RS.35
                                       </div>
                                    </div>
                                    <div className='imgcart'>
                                         <div className='cartbutton'>
                                             <div className='cartbox'>
                                                 <div className='add'>
                                                 <div className='addbutton'> ADD</div>
                                                 </div>
                                             </div>
                                         </div>
                                    </div>
                                 </div>
                             </div>
                             <hr/>
                        </div>
                        <div className='col-4 restaurantcart'>
                            <div className='cartlist'>
                                <div className='cart1'>
                                    <div className='emptycart'>
                                        <div className='maincart ec1'>
                                              Cart Empty
                                        </div>
                                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" 
                                        class="cartimg"></img>
                                        <div class="cartsubline">Good food is always cooking! Go ahead, order some yummy items from the menu.</div>
                                    </div>
                               </div>
                            </div>

                        </div>
                    </div>
             </div>

  </div>;
}

export default Restaurant;

