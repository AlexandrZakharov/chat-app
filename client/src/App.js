import { useEffect } from "react";
import "./App.scss";
import Authorization from "./AuthPage/AuthorizationContainer";
import Chats from "./sections/chats/ChatsContainer";
import Profile from "./sections/companion/ProfileContainer";
import Conversation from "./sections/conversation/ConversationContainer";
import Sidebar from "./sections/sidebar/SidebarContainer";
import { signinSuccess } from "./redux/reducers/auth";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

const mapDispatchToProps = {
  signinSuccess,
};

function App(props) {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      props.signinSuccess(JSON.parse(user));
    }
  }, []);
  return (
    <div className="App">
      {!props.authData.user ? (
        <Authorization />
      ) : (
        <>
          <Sidebar />
          <div className="container">
            <Chats />
            <Conversation />
            <Profile />
          </div>
        </>
      )}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
