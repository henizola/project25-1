import React from 'react';
import {connect} from 'react-redux';
import {setSearchField} from '../../redux/artist/artist.action';
const Search =({search })=>{


    const onSearchChange=event=>{
        search(event.target.value)
    }

    return(
        <div className='input-reset  ' >
            <form class="pa3 black-80">
                 <div class="measure">
                     <input  class=" ba b--black-20 pa2 mb2 db w-25 shadow-5-l center" type="text" 
                     aria-describedby="name-desc"
                     onChange={onSearchChange} placeholder='search the list with react'></input>
                 </div>
            </form>
        </div>
    );
}


const mapDispatchToProps=dispatch=>({
    search:searchfield=>dispatch(setSearchField(searchfield))
})
export default connect(null,mapDispatchToProps)(Search);


