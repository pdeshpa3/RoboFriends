import React from 'react';


const SearchBox =({searchfield, searchChange})=>{

  return (

    <div>
      <input className ="forms-reset pa3 ma3 roboto br4 bg-lightest-blue " 
      type="search" placeholder="search"
      onChange = {searchChange}
      />

    </div>

  );

}

export default SearchBox;