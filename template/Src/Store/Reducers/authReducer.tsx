import { AuthAction, AuthState } from "../../Types/Reducers.types";

const initialAuthState:AuthState = {
  userToken: undefined,
   /* Add your parameters to store to redux and mention its types to the
     AuthState type in ReducerTypes.types.tsx file */
};

const login = (state:AuthState, action:AuthAction) => {
  return {
    ...state,
    userToken: action.payload.userToken,
  };
};

const logout = () => {
  return {
    ...initialAuthState, // Clear Redux Data
  };
};

export default function (state:AuthState = initialAuthState, action:AuthAction) {
  switch (action.type) {
    case 'LOGIN':
      return login(state, action);
    case 'LOGOUT':
      return logout();
    default:
      return state;
  }
}
