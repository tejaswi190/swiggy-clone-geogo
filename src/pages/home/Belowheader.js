import React from 'react';
import './Belowheader.css';
// import ReactDOM from "react-dom";
// import Carousel from 'react-elastic-carousel';
// import Item from "./Item";

const breakPoints=[
    {width: 1200,itemToShow: 4}
];
function Belowheader() {
    return (
        <div className='main_header container-fluid'>
             {/* <div className='carousel'>
                  <Carousel breakPoints={breakPoints}>
                      <Item>one</Item>
                      <Item>two</Item>
                      <Item>three</Item>
                      <Item>four</Item>
                      <Item>five</Item>
                      <Item>six</Item>
                      <Item>seven</Item>
                      <Item>eight</Item>
                      <Item>nine</Item>
                  </Carousel>
             </div>  */}
        </div>
    )
}
export default Belowheader
