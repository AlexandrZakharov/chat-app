import UserAPI from "../../API/api";

const SIGNUP_PENDING = "SIGNUP-PENDING";
const SIGNUP_SUCCESS = "SIGNUP-SUCCESS";
const SIGNUP_ERROR = "SIGNUP-ERROR";
const SIGNIN_PENDING = "SIGNIN-PENDING";
const SIGNIN_SUCCESS = "SIGNIN-SUCCESS";
const SIGNIN_ERROR = "SIGNIN-ERROR";
const SIGNOUT = "SIGNOUT";

const initialState = {
  user: null,
  signup: { loading: false, error: null },
  signin: { loading: false, error: null },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_PENDING:
      return {
        ...state,
        signup: {
          loading: true,
          error: null,
        },
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          loading: false,
          error: null,
        },
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        signup: {
          loading: false,
          error: action.message,
        },
      };
    case SIGNIN_PENDING:
      return {
        ...state,
        signin: {
          loading: true,
          error: null,
        },
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        signin: {
          loading: false,
          error: null,
        },
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        signin: {
          loading: false,
          error: action.message,
        },
      };
    case SIGNOUT:
      localStorage.removeItem("user")
      localStorage.removeItem("jwt")
      return {
        user: null,
        signup: { loading: false, error: null },
        signin: { loading: false, error: null },
      };
    default:
      return state;
  }
};

const signupPending = () => ({ type: SIGNUP_PENDING });
const signupSuccess = () => ({ type: SIGNUP_SUCCESS });
const signupError = (message) => ({ type: SIGNUP_ERROR, message });

const signinPending = () => ({ type: SIGNIN_PENDING });
export const signinSuccess = (payload) => ({ type: SIGNIN_SUCCESS, payload });
const signinError = (message) => ({ type: SIGNIN_ERROR, message });

export const signOut = () => ({ type: SIGNOUT });

export const signup = (payload) => {
  return (dispatch) => {
    dispatch(signupPending());
    UserAPI.signup(payload)
      .then((res) => {
        if (res.error) {
          dispatch(signupError(res.error));
        } else {
          dispatch(signupSuccess(res));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(signupError(error));
      });
  };
};

export const signin = (payload) => {
  return (dispatch) => {
    dispatch(signinPending());
    UserAPI.signin(payload)
      .then((res) => {
        if (res.error) {
          dispatch(signinError(res.error));
        } else {
          localStorage.setItem("jwt", res.token);
          localStorage.setItem("user", JSON.stringify(res.user));
          dispatch(signinSuccess(res.user));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(signinError(error));
      });
  };
};

export default authReducer;
