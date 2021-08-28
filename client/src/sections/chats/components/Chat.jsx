import { useEffect, useState } from "react";
import styles from "./../Chats.module.scss";
import UserAPI from "../../../API/api";

const Chat = (props) => {
  const [companion, setCompanion] = useState(null);
  useEffect(() => {
    UserAPI.getUser(props.companion).then((user) => setCompanion(user));
  }, []);
  return (
    <div
      className={props.chat.active ? `${styles.chat} ${styles.active}` : styles.chat}
      onClick={() => props.setActiveConversation(props.chat._id)}
    >
      <div className={styles.chat__left}>
        <img src={companion?.avatar} alt="" className={styles.chat__avatar} />
      </div>
      <div className={styles.chat__center}>
        <span className={styles.chat__name}>
          {companion?.firstName} {companion?.lastName}
        </span>
        <span className={styles.chat__message}>
          / last message /
        </span>
      </div>
      <div className={styles.chat__right}>
        <span className={styles.chat__timestapm}>08:42 AM</span>
        <div className={styles.chat__newmessages}>3</div>
      </div>
    </div>
  );
};

export default Chat;
