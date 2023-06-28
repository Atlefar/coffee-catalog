import { Fragment, useState } from 'react';
import Header from "./components/Layout/Header";
import SearchBar from "./components/Layout/SearchBar";
import Main from "./components/Layout/Main";
import Navigation from "./components/Layout/Navigation";

const App = () => {
  const [search, setSearch] = useState('');

  const searchHandler = (searchData) => {
    setSearch(searchData);
  };

  return (
    <Fragment>
      <Header />
      <SearchBar onSearch={searchHandler} />
      <Main search={search} />
      <Navigation />
    </Fragment>
  );
};

export default App;
