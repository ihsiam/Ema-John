import React, { useEffect, useState } from 'react';
import fakeData from '../db';
import ContainerView from './ContainerView';

function Container(props) {
  const data = props.reciveData;
  const searchData = props.searchData;

  const [search, setSearch] = useState([]);

  useEffect(() => {
    const filterSearch = fakeData.filter((item) =>
      item.name.toLowerCase().includes(searchData.toLowerCase())
    );
    const finalSearch = filterSearch.length === fakeData.length ? '' : filterSearch;
    setSearch(finalSearch);
  }, [searchData]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredData = selectedCategory ? data.filter((item) => item.category === selectedCategory) : data;

  const displayedData = filteredData.length > 20 ? filteredData.slice(0, 20) : filteredData;

  const Data = search.length === 0 ? displayedData : search;

  return (
    <div className='w-full md:w-5/6 px-2 py-2'>
      <div className='my-2 flex flex-wrap gap-2'>
        <button
          className={`ctgBtn ${selectedCategory === null ? 'bg-black text-white' : 'bg-slate-300'}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        <button
          className={`ctgBtn ${selectedCategory === 'laptop' ? 'bg-black text-white' : 'bg-slate-300'}`}
          onClick={() => setSelectedCategory('laptop')}
        >
          Laptops
        </button>
        <button
          className={`ctgBtn ${selectedCategory === 'android' ? 'bg-black text-white' : 'bg-slate-300'}`}
          onClick={() => setSelectedCategory('android')}
        >
          Android
        </button>
        <button
          className={`ctgBtn ${selectedCategory === 'camera' ? 'bg-black text-white' : 'bg-slate-300'}`}
          onClick={() => setSelectedCategory('camera')}
        >
          Camera
        </button>
      </div>

      <div className='py-2'>
        <ContainerView data={Data} />
      </div>
    </div>
  );
}

export default Container;
