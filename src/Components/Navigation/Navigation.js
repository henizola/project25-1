import React from 'react';
import  'tachyons';
import './Navigation.css'

const Navigation =()=>{
    return(
      <div>
        <p style={{height:'30px'}}></p>
      <article class="br2 ba dark-gray wid  b--black-20 pa4 h-100 color ff mv0  w-50-m w-25-l mw8 center shadow-5 ">
      <div class="pa2 ph2-ns pb1-ns">
        <div class="dt w-100 mt1">
          <div class="dtc ">
          <h1 className='underline f2  '>React Search!</h1>
                    <p className='f3'>Here is some rege Artists renderd from JSON object</p>
                  <div >
                </div>
           </div>
          <div class="dtc tr">
          </div>
        </div>
      </div>
    </article>
    <h2 className='white pt0 f2'>Search:</h2>
    </div>
    );
}
export default Navigation;

