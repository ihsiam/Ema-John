import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Container from './Container'
import fakeData from '../db'
import Footer from './Footer';

function Home(props) {

  const [filterData, setFilterData] = useState(fakeData);

  const getData = (data) =>{
    setFilterData(data);
  }

  return (
    <div>
      <div className='flex w-full flex-col md:flex-row'>
        <Sidebar data={getData}/>
        <Container reciveData={filterData} searchData={props.searchData}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home