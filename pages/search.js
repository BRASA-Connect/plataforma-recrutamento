import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Filter from '../components/Filter' 

function SearchPage() {
  return (
    <div className='bg-primary'>
        {/* <Header/> */}
        <div className='flex p-[30px]'>
          <Filter/>
          <Content/>     
        </div>
    </div>
  )
}

export default SearchPage