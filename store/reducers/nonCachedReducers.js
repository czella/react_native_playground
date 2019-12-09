const initialState = {
  action: "",
  position: {latitude: 0, longitude: 0},
  error: null,
  bigProgress: 0
};

const nonCachedReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
     case "SET_POSITION":
      return {...state, position: action.position};
    case "SET_ERROR":
      return {...state, error: action.error};
    case "SET_BIG_PROGRESS":
      return {...state, bigProgress: action.bigProgress};
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default nonCachedReducer;
