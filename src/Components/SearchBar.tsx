import React from 'react';
import { MagnifyingGlassIcon  } from '@heroicons/react/24/outline';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const searchBtn = css`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  line-height: 20px;
  padding: 0 8px 0 15px;
  border-radius: 40px;
  background-color: #eeecec;
`;

const searchIcon = css`
  background-color: var(--header-brand-color);
  border-radius: 50%;
  color: #7c797a;
  padding: 5px;
  height: 32px;
  width: 32px;
  margin: 7px 7px 7px 0;
`;

const searchInput = css`
  background-color: #eeecec;
  color: #7c797a;
  width: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`;


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
      <div css={searchBtn} className='search-btn d-flex justify-content-between align-items-center'>
        <input
          css={searchInput}
          title='Search'
          className='search-input'
          type='text'
          placeholder='Search contacts'
          value={filterText}
          onChange={handleSearchInputText}
        />
        <span css={searchIcon} className='serch-icon d-flex justify-content-center align-items-center'>
          <MagnifyingGlassIcon className='search-icon' />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
