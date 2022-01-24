
import React from 'react'
import './Restaurants.css'
import StarIcon from '@mui/icons-material/Star';
import {Outlet,Link} from "react-router-dom";
function Restaurants() {
    return (
        <div class='rest'>
             <div className='row'>
                 <div className='col-3 res'>
                       <div className='eachres'>
                           <Link to="restaurant">
                           <div className='each'>
                             <div>
                             <img class="restimg" alt="Winni Cakes &amp; More"
                             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ywbmzjek5p1l63efdwei"></img>
                             </div>
                             <div className='resttitle'>
                                  winni cakes and more
                             </div>
                             <div className='restsub'>
                                  biriyani
                             </div>
                             <div className='restdetails'>
                                  <div className='restrating'>
                                      <span><StarIcon color="white" className='staricon' fontSize='small'/></span>
                                      <span>3.5</span>
                                  </div>
                                  <div>.</div>
                                  <div className='restdeliverytime'>
                                      35 MIN
                                  </div>
                                  <div>.</div>
                                  <div className='restoffer'>
                                      100 FOR TWO
                                  </div>
                             </div>
                             <div className='specialoffer'>
                                   <span>20% off | use TRYNEW</span>
                             </div>
                             </div> 
                             </Link> 
                       </div>
                       
                 </div>
                 <div className='col-3 res'>
                       <div className='eachres'>

                       </div>
                 </div>
                 <div className='col-3 res'>
                       <div className='eachres'>

                       </div>
                 </div>
                 <div className='col-3 res'>
                         <div className='eachres'>

                         </div>
                 </div>

             </div>
             <Outlet/>
        </div>
    )
}

export default Restaurants
