import React, { PropTypes } from 'react';


export const AddressInfo = ({address, bbl}) => {
  return (
    <div>
      <p><strong>{address}</strong></p>
      <p><strong>BBL: </strong>{bbl}</p>
    </div>
  );
};

AddressInfo.propTypes = {
  address: PropTypes.string.isRequired,
  bbl: PropTypes.string.isRequired
};


export default AddressInfo;
