import styles from "./../Conversation.module.scss";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";

const Input = (props) => {

  const [newMessage, setNewMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if(props.user && props.conversations.length) {
      const conversationId = props.conversations.find(conv => conv.active)._id;
      const sender = props.user._id;
      const message = {
        conversationId,
        sender,
        text: newMessage,
      };
      props.addNewMessage(message)
      setNewMessage("");
    }    
  };
  return (
    <div className={styles.input}>
      <div className={`${styles.wrapper} ${styles.input__left}`}>
        <AttachFileIcon className={styles.input__attachments} />
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        className={styles.input__input}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <div
        className={`${styles.wrapper} ${styles.input__right}`}
        onClick={sendMessage}
      >
        <SendIcon className={styles.input__send} />
      </div>
    </div>
  );
};

export default Input;
