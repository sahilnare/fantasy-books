
const initState = {
  authError: null
}

const postReducer = (state = initState, action) => {

  if(action.type === 'LOGIN_SUCCESS') {
    console.log('Login success!');
    return {
      ...state,
      authError: null
    }
  }

  else if(action.type === 'LOGIN_ERR') {
    console.log('Login failed!');
    return {
      ...state,
      authError: 'Login failed'
    }
  }

  else if(action.type === 'LOGOUT_SUCCESS') {
    console.log('Logout success!');
    return state;
  }

  else {
    return state;
  }
}

export default postReducer;