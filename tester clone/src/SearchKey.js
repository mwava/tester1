import React from 'react';
import  BodySeacrh  from './BodySearch';

 const SearchKey=({searchKey,onSearchChange})=>{
  return(
    <div className='search-body-key'>
      <h1>Daftar book ngab</h1>
      <BodySeacrh searchKey={searchKey} onSearchChange={onSearchChange}/>
    </div>
  )
}


export default SearchKey