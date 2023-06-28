import { useState } from 'react';
import classes from './SearchBar.module.css';
import searchIcon from '../../images/Vector.png';

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const changeHandler = (event) => {
    const searchData = event.target.value;
    setSearch(searchData);
    onSearch(searchData);
  };

  return (
    <div className={classes.container}>
      <div className={classes.container__input}>
        <img
          src={searchIcon}
          className={classes.search__icon}
          alt="search icon"
        />
        <input
          className={classes.search__input}
          type="search"
          placeholder="Find your coffee..."
          value={search}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default SearchBar;