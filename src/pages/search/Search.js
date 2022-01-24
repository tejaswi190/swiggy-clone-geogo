import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './Search.css'
export default function Search() {
    return (
        <div className='searchpage'>
              <div className="searchpage1">
                  <div>
                      <div className="searchmain">
                          <div className="searchbox">
                              <form>
                               <SearchIcon className='searchicon' ></SearchIcon>
                               <input type="text" class="inputform" placeholder="Search for restaurants or dishes" autocomplete="off" value=""></input>
                               <button class="closeicon"><CloseIcon/>
                               <span class="escape">ESC</span></button>
                               </form>
                             </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
