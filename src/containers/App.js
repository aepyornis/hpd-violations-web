import React from 'react';
import AddressSearch from '../components/AddressSearch';
import NavBar from '../components/NavBar';
import AddressInfoOrError from '../components/AddressInfoOrError';
import ViolationStatus from '../components/ViolationStatus';
import Violations from './Violations';
import Info from './Info';

/**
 * App container
 */
const App = () => (
  <div>
    <NavBar />
    <div className="grid">
      <AddressSearch />
      <AddressInfoOrError />
      <ViolationStatus />
      <Violations />
    </div>
  </div>
);

export default App;
