import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {openClosedToggle as style} from '../style';
import {toggleOpenClosed} from '../actions/toggleOpenClosed';



export const classer = (toggleStatus, buttonIdentity) => (toggleStatus === buttonIdentity) ? 
  'btn-small btn' : 'btn-small btn-outline';

/**
 * Toggle Component. 
 * @param {function} - dispatch
 * @param {string} toggleStatus - 'ALL' or 'OPEN'
 * @returns {Object} 
 */
export const OpenAllToggle = ({dispatch, toggleStatus}) => (
    <div style={style.container} >
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
