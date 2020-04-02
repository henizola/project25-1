import React from 'react';
import artist from './artist.json';
import '../Navigation/Navigation.css'

const Artists =({searchField})=>
{
    
    return(
        <article class="br2 ba dark-gray  list mv1 w-100 w-50-m w-25-l mw8 center">
<div class="pa2 ph3-ns pb3-ns">
  <div class="dt w-100 mt1">
    <div class="dtc f4 tl ">
       {artist.filter((name)=>{
                 return (name.toLowerCase().includes(searchField.toLowerCase()));
                })}
         
          {/* </div> */}
    </div>
    <div class="dtc tr">
    </div>
  </div>
</div>
</article>
              
        
    );
}
export default Artists;


      

