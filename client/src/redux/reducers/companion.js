import UserAPI from "../../API/api";

const SET_COMPANION = "SET_COMPANION";


const initialState = null;

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANION:
      return action.companion
    default:
      return state;
  }
};

const setCompanion = (companion) => ({
  type: SET_COMPANION,
  companion,
});


export const getCompanion = (payload) => {
  return (dispatch) => {
    UserAPI.getUser(payload)
      .then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          dispatch(setCompanion(res));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default authReducer;
