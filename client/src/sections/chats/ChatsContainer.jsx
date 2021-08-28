import { connect } from "react-redux";
import Chats from "./Chats";
import { getConversations } from "../../redux/reducers/conversations";
import { setActiveConversation } from "../../redux/reducers/conversations";
import { getMessages } from "../../redux/reducers/messages";
import { getCompanion } from "../../redux/reducers/companion";

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getConversations: (userId) => dispatch(getConversations(userId)),
    setActiveConversation: (convId) => dispatch(setActiveConversation(convId)),
    getMessages: (convId) => dispatch(getMessages(convId)),
    getCompanion: (compId) => dispatch(getCompanion(compId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
