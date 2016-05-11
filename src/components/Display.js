import React, { PropTypes} from 'react';

const Display = ({address}) => (
    <p>{address}</p>
);

Display.propTypes = { 
   address: PropTypes.string.isRequired 
};

export default Display;

