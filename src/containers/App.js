import React from 'react';
import AddressSearch from '../containers/AddressSearch';
import NavBar from '../components/NavBar';
import AddressInfoOrError from '../components/AddressInfoOrError';

/**
 * App container
 */
const App = () => (
  <div>
    <NavBar />
    <div className="grid">
      <AddressSearch />
      <AddressInfoOrError />
    </div>
  </div>
);

export default App;
