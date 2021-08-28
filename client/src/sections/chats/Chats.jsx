import { useEffect } from "react";
import styles from "./Chats.module.scss";
import Chat from "./components/Chat";
import Search from "./components/Search";

const Chats = (props) => {
  useEffect(() => {
    props.getConversations(props.user._id);
  }, []);
  useEffect(() => {
    if(props.conversations.length) {
      props.getMessages(props.conversations.find((conv) => conv.active)?._id);
      props.getCompanion(
        props.conversations
          .find((conv) => conv.active)
          ?.members.filter((member) => member !== props.user._id)[0]
      );
    }
    
  }, [props.conversations]);
  return (
    <div className={styles.chats}>
      <Search />
      <div className={styles.chats__wrapper}>
        {props.conversations.map((chat, id) => {
          return (
            <Chat
              key={id}
              companion={chat.members.filter((id) => id !== props.user._id)[0]}
              setActiveConversation={props.setActiveConversation}
              chat={chat}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Chats;
