import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCf3QZZ71rkZtG9WIJJy3Jvv-ih3c94cWI';

// create new component that should produce HTMl
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Put generated HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
