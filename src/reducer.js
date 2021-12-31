const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

export const createGoodAction = () => {
  return { type: 'GOOD' };
};

export const createOkAction = () => {
  return { type: 'OK' };
};

export const createBadAction = () => {
  return { type: 'BAD' };
};

export const resetCounts = () => {
  return { type: 'ZERO' };
};

export const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'GOOD':
      return { ...state, good: state.good + 1 };
    case 'OK':
      return { ...state, ok: state.ok + 1 };
    case 'BAD':
      return { ...state, bad: state.bad + 1 };
    case 'ZERO':
      return { ...initialState };
    default:
      return state;
  }
};
