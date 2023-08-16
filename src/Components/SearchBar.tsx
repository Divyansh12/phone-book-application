import React from 'react';
import { MagnifyingGlassIcon  } from '@heroicons/react/24/outline';

// import './searchbar.scss';

interface SearchBarProps {
  filterText: string;
  setFilterText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ filterText, setFilterText }) => {
  const handleSearchInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  return (
    <div className='main-content-search'>
      <div className='search-btn d-flex justify-content-between align-items-center'>
        <input
          title='Search'
          className='search-input'
          type='text'
          placeholder='Search contacts'
          value={filterText}
          onChange={handleSearchInputText}
        />
        <span className='serch-icon d-flex justify-content-center align-items-center'>
          <MagnifyingGlassIcon className='search-icon' />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
