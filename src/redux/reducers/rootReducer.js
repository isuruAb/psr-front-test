const initialState = {
  name: "",
  scores: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, name: action.payload };
    case "GET_SCORES":
      return { ...state, scores: action.payload };

    default: {
      return state;
    }
  }
};

export default rootReducer;
