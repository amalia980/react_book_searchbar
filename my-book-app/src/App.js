import './App.css';

import Searchbar from './components/Searchbar';

function App() {


  return (
    <div className='container'>
      <h1>Search Books</h1>
      <div className='search-wrapper'>
        <Searchbar placeholder="Enter title..." />
      </div>
    </div>
  );
}

export default App;
