import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {toggleOpenClosed} from '../actions/toggleOpenClosed';

export const classer = (toggleStatus, buttonIdentity) => {
  const defaultClass = 'dib w3 ma2 rounded v-mid';
  if (toggleStatus === buttonIdentity){
    return defaultClass + ' btn-on';
  } else {
    return defaultClass + ' btn-off';
   }
};

/**
 * Toggle Component. 
 * @param {function} - dispatch
 * @param {string} toggleStatus - 'ALL' or 'OPEN'
 * @returns {Object} 
 */
export const OpenAllToggle = ({dispatch, toggleStatus}) => (
    <div className="mw100 mb3 toggleBox cursor-pointer">
      <div className={classer(toggleStatus,'ALL')}
            onClick={() => dispatch(toggleOpenClosed('ALL'))}>ALL</div>
      <div className={classer(toggleStatus,'OPEN')}
           onClick={() => dispatch(toggleOpenClosed('OPEN'))}>OPEN</div>
    </div>
);

OpenAllToggle.propTypes = {
    dispatch: PropTypes.func,
    toggleStatus: PropTypes.string
};

const mapStateToProps = state => ({
  toggleStatus: state.toggleStatus
});

export default connect(mapStateToProps)(OpenAllToggle);
