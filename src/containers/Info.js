import React from 'react';
import { connect } from 'react-redux';
import Display from '../components/Display';
import {isUndefined} from 'lodash';

const exists = x => !isUndefined(x);

const mapStateToProps = (state) => ({input:state});

const Info = ({input}) => (
      <div>
        <Display input={input}/>
     </div>
  );


export default connect(mapStateToProps)(Info);
