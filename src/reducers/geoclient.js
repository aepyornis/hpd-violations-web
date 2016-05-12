export const statusSwitcher = (state, action) =>{
  switch(action.status) {
  case 'IN_PROGRESS':
    return BLAH;
  case 'DONE_FOUND': 
    return Object.assign({}, state, {
      status: action.status,
      result: action.result
    });
  case 'DONE_NOT_FOUND':
    // TODO
    return {};
  case 'FAILED':
    // TODO
    return {};
  default:
    return state;
  }
};

export const reducer = (state = {}, action) => {
  switch(action.type) {
  case 'GEOCLIENT':
    return statusSwitcher(state, action);
  default:
    return state;
  }
};

export default reducer;
