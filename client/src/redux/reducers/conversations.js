import UserAPI from "../../API/api";

const SET_CONVERSATIONS = "SET_CONVERSATIONS";
const ACTIVE_CONVERSATION = "ACTIVE_CONVERSATION";

const initialState = [];

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONVERSATIONS:
      return [
        ...action.conversations.map((conv, i) => {
          return i === 0
            ? { ...conv, active: true }
            : { ...conv, active: false };
        }),
      ];
    case ACTIVE_CONVERSATION:
      return [
        ...state.map((conv) => {
          return action.convId === conv._id
            ? { ...conv, active: true }
            : { ...conv, active: false };
        }),
      ];
    default:
      return state;
  }
};

const setConversations = (conversations) => ({
  type: SET_CONVERSATIONS,
  conversations,
});
export const setActiveConversation = (convId) => ({
  type: ACTIVE_CONVERSATION,
  convId,
});

export const getConversations = (payload) => {
  return (dispatch) => {
    UserAPI.getConversations(payload)
      .then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          dispatch(setConversations(res));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default authReducer;
