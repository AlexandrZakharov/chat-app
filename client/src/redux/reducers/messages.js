import UserAPI from "../../API/api";

const SET_MESSAGES = "SET_MESSAGES";
const ADD_MESSAGE = "ADD_MESSAGE";


const initialState = [];

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.messages
    case ADD_MESSAGE:
      return [...state, action.message]
    default:
      return state;
  }
};

const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages,
});

const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message
})

export const getMessages = (payload) => {
  return (dispatch) => {
    UserAPI.getMessages(payload)
      .then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          dispatch(setMessages(res));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addNewMessage = (payload) => {
  return (dispatch) => {
    UserAPI.addMessage(payload)
      .then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          dispatch(addMessage(res));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default authReducer;
