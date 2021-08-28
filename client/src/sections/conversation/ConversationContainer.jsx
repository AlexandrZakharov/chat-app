import { connect } from "react-redux";
import Conversation from "./Conversation";
import { addNewMessage } from "../../redux/reducers/messages";

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    conversations: state.conversations,
    messages: state.messages,
    companion: state.companion,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addNewMessage: (message) => dispatch(addNewMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
