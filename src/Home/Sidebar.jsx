import React, { useState } from 'react';
import fakeData from '../db';

function Sidebar(props) {
  const maxp = fakeData.reduce((max, obj) => Math.max(max, obj.price), fakeData[0].price);

  const [data, setData] = useState(fakeData);
  const [activeButton, setActiveButton] = useState('all'); // Track the active button

  const handleFilter = (min, max, button) => {
    const filterData = fakeData.filter((product) => product.price >= min && product.price <= max);
    setData(filterData);
    props.data(filterData);
    setActiveButton(button);
  };

  return (
    <div className="px-2 mt-2 w-full md:w-1/6 h-fit">
      <p className='hBtn hidden md:block md:w-full'>
        Price Range
      </p>

      <div className='my-2 flex flex-wrap md:flex-col gap-2'>
        <button
          className={`sideBtn ${activeButton === 'all' ? 'Active' : ''}`}
          onClick={() => {
            setData(fakeData);
            props.data(fakeData);
            setActiveButton('all');
          }}
        >
          All
        </button>

        <button
          className={`sideBtn ${activeButton === '0-300' ? 'Active' : ''}`}
          onClick={() => handleFilter(0, 300, '0-300')}
        >
          $00 - 300
        </button>

        <button
          className={`sideBtn ${activeButton === '301-600' ? 'Active' : ''}`}
          onClick={() => handleFilter(301, 600, '301-600')}
        >
          $301 - 600
        </button>

        <button
          className={`sideBtn ${activeButton === '601-rest' ? 'Active' : ''}`}
          onClick={() => handleFilter(601, maxp, '601-rest')}
        >
          $601 - rest
        </button>
      </div>  
    </div>
  );
}

export default Sidebar;