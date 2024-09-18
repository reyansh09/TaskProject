const initialState = {
    token: null,
    role: null,
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          token: action.payload.token,
          role: action.payload.role,
          isAuthenticated: true,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.payload.token,
          role: action.payload.role,
          isAuthenticated: true,
        };
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default authReducer;
  