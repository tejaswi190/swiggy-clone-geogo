import React from 'react'
import './Header2.css'
function Header2() {
    return (
        <div className='header2'>
            {/* <ul class="nav justify-content-end">
                   <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Relevance</a>
                   </li>
                   <li class="nav-item">
                        <a class="nav-link" href="#">Delivery Time</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Rating</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href='#'>Cost: Low To High</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href='#'>Cost: High To Low</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href='#'>Filters</a>
                    </li>
            </ul> */}
            <div className='head2 row'>
                <div className='col-3'>
                 <ul class="nav justify-content">
                     <li class="nav-item">
                       <button><a class="nav-link resturants" aria-current="page" href="#"><h2>10 restaurants</h2></a></button> 
                     </li>
                 </ul>
                 </div>
                 <div className='col-9'>
                 <ul class="nav justify-content-end">  
                   <li class="nav-item">
                       <button><a class="nav-link active" aria-current="page" href="#">Relevance</a></button> 
                   </li>
                   <li class="nav-item">
                        <button><a class="nav-link" href="#">Delivery Time</a></button>
                    </li>
                    <li class="nav-item">
                         <button><a class="nav-link" href="#">Rating</a></button>
                    </li>
                    <li class="nav-item">
                         <button><a class="nav-link" href='#'>Cost: Low To High</a></button>
                    </li>
                    <li class="nav-item">
                        <button><a class="nav-link" href='#'>Cost: High To Low</a></button>
                    </li>
                    <li class="nav-item">
                        <button><a class="nav-link" href='#'>Filters</a></button>
                    </li>
            </ul> 
            </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default Header2
