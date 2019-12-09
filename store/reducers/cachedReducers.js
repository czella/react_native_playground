const initialState = {
  progress: 0
};

const cachedReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case 'SET_PROGRESS': {
      return {
        // State
        ...state,
        // Redux Store
        progress: action.progress,
      }
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default cachedReducer;
