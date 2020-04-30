import React from 'react';
import {connect} from 'react-redux';
import '../Navigation/Navigation.css'

const Artists =({searchField,artist})=>
{
    
    return(
      <article class="br2 ba dark-gray  list mv1 w-100 w-50-m w-25-l mw8 center">
        <div class="pa2 ph3-ns pb3-ns">
          <div class="dt w-100 mt1">
           <div class="dtc f4 tl ">
            <ul>
             {artist.map((value, index) => {
                if(value.toLowerCase().includes(searchField.toLowerCase()))
                  {
                    return <li key={index}>{value}</li>
                  }
                else{
                   return '';
                     }
                                            }
             )
             }
          </ul>
       </div>
      <div class="dtc tr">
    </div>
  </div>
</div>
</article>);
}




const mapStateToProps=state=>({
  searchField:state.artists.searchField,
  artist:state.artists.artists
})


export default connect (mapStateToProps) (Artists);


      

