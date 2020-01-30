const initialState = {
  name: "",
  score: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, name: action.payload };
    default: {
      return state;
    }
  }
};

export default rootReducer;
