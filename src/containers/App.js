import React from 'react';
import AddressSearch from '../components/AddressSearch';
import NavBar from '../components/NavBar';
import AddressInfoOrError from '../components/AddressInfoOrError';
import ViolationStatus from '../components/ViolationStatus';
import Violations from './Violations';
import About from '../components/About';


const content = (<div className="mt3">
                 <AddressSearch />
                 <AddressInfoOrError />
                 <ViolationStatus />
                 <Violations />
                 </div>);

/**
 * App container
 */
const App = () => (
  <div>
    <NavBar />
    <About appContent={content} isOpen={true}/>
  </div>
);

export default App;
