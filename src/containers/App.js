import React from 'react';
import AddressSearch from '../components/AddressSearch';
import NavBar from '../components/NavBar';
import AddressInfoOrError from '../components/AddressInfoOrError';
import ViolationStatus from '../components/ViolationStatus';
import Violations from './Violations';

/**
 * App container
 */
const App = () => (
  <div>
    <NavBar />
      <AddressSearch />
      <AddressInfoOrError />
      <ViolationStatus />
      <Violations />
  </div>
);

export default App;
