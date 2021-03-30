import { useEffect, useState } from 'react';
import SearchContainer from 'containers/SearchContainer';
import Earth from 'containers/EarthContainer';

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [currentUser, setCurrentUser] = useState({ country: "" });

  useEffect(() => {
    const getUserCountry = async () => {
      const proxyURL = `https://cors-anywhere.herokuapp.com/`; //! temporary PROXY_URL
      const response = await fetch(`${proxyURL}https://freegeoip.app/json`);
      const data = await response.json();
      const userCountry = data.country_name;
      setCurrentUser({ country: userCountry.replace(" ", "_") });
    }
    getUserCountry();
  }, []);

  const fetchGeoDataFromZip = async (zip) => {
    const BASE_API_URL = `https://nominatim.openstreetmap.org/`;
    const ENDPOINT = `search?`;
    // TODO - error/logic handling for missing country when fetching
    const PARAMS = `q=${currentUser.country.replace("_", "+")},${zip}&format=json`;


    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Student-Project-v0'
      },
    };

    const response = await fetch(BASE_API_URL + ENDPOINT + PARAMS, options);
    let data = await response.json();
    // Globe's dependencies expects searchResults to be iterable
    setSearchResult([data[0]]);
  };

  return (
    <div className="app">
      <h1>App Component</h1>
<<<<<<< HEAD
      <Search fetchGeoDataFromZip={fetchGeoDataFromZip}/>
      <button onClick={fetchNasaShowPages}>Fetch united states data</button>
      <Earth searchResult={searchResult} />
      {/* <Dropdown/> */}
      <Sightingtable searchResult={searchResult} />
=======
      <SearchContainer
        currentUser={currentUser}
        searchResult={searchResult}
        fetchGeoDataFromZip={fetchGeoDataFromZip}
        setCurrentUser={setCurrentUser}
      />
      <Earth searchResult={searchResult} />
>>>>>>> 7301c116d2670306620dd8ada6cc4f72850a8ae7
    </div>
  );
};

export default App;
