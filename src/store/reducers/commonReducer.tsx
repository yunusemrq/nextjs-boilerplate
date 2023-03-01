import { DARK_MODE } from "../actionTypes";

const initialState = {
  darkmode: false,
};

const login = (state = initialState, action: any) => {
  switch (action.type) {
    case DARK_MODE:
      state = {
        ...state,
        darkmode: true,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default login;
