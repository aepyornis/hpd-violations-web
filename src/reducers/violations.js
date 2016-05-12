const reducer = (state = {}, action) => {
  switch(action.type) {
  case 'VIOLATION_IN_PROGRESS':
    return state;
  case 'VIOLATION_FOUND':
    return state;
  case 'VIOLATION_NOT_FOUND':
    return state;
  default:
    return state;
  };
};

export default reducer;
