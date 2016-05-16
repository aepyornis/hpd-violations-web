import React from 'react';
import { connect } from 'react-redux';
import Display from '../components/Display';
import AddressInfo from '../components/AddressInfo';
import {isUndefined} from 'lodash';

const exists = x => !isUndefined(x);

const makeAddress = (geoclient) => {
  if (isUndefined(geoclient.result) || isUndefined(geoclient.result.address)) {
    return '';
  };
  
  let a = geoclient.result.address;
  return {
    address: `${a.houseNumber} ${a.firstStreetNameNormalized}, ${a.zipCode}`,
    bbl: a.bbl
  };
};
const mapStateToProps = (state) => {
  const {address, bbl} = makeAddress(state.geoclient);
  return {
    address: address,
    bbl: bbl,
    input: state
  };
};

const Info = ({input, address, bbl}) => (
      <div>
        <Display input={input}/>
        { (address) ? <AddressInfo address={address} bbl={bbl} /> : ''}
     </div>
  );


export default connect(mapStateToProps)(Info);
