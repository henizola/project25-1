import React from 'react';

const Search =({onSearchChange })=>{
    return(
        <div className='input-reset  ' >
         <form class="pa3 black-80">
  <div class="measure">
  <input  class=" ba b--black-20 pa2 mb2 db w-25 shadow-5-l center" type="text" aria-describedby="name-desc"
   onChange={onSearchChange} placeholder='search the list with react'></input>
  </div>
</form>
        </div>
    );
}
export default Search;


