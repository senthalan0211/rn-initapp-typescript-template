export const login = (userToken:string) => {
  return {
    type: 'LOGIN',
    payload: {userToken},
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

// Add Authentication Actions Here
