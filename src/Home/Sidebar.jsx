import React, { useState } from 'react';
import fakeData from '../db';

function Sidebar(props) {

  const maxp = fakeData.reduce((max, obj) => Math.max(max, obj.price), fakeData[0].price);

  const [data, setData] = useState(fakeData);

  const handleFilter = (min, max) => {
    const filterData = fakeData.filter((product) => product.price >= min && product.price <= max);
    setData(filterData);
    props.data(filterData);
  };

  return (
    <div className="px-2 mt-2 w-full md:w-1/6 h-fit">
      <p className='hBtn hidden md:block md:w-full'>
        Price Range
      </p>

      <div className='my-2 flex flex-wrap md:flex-col gap-2'>
        <button
          className="sideBtn"
          onClick={() => {
            setData(fakeData); // Reset to the original data
            props.data(fakeData);
          }}
        >
          All
        </button>

        <button
          className="sideBtn"
          onClick={() => handleFilter(0, 300)}
        >
          $00 - 300
        </button>

        <button
          className="sideBtn"
          onClick={() => handleFilter(301, 600)}
        >
          $301 - 600
        </button>

        <button
          className="sideBtn"
          onClick={() => handleFilter(601, maxp)}
        >
          $601 - rest
        </button>
      </div>  
    </div>
  );
}

export default Sidebar;