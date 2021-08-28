import styles from "./../Conversation.module.scss";

const Message = (props) => {
  const senderId = props.message.sender;
  const userId = props.user._id;
  return (
    <div
      className={styles.message}
      style={{ alignSelf: senderId === userId ? "flex-end" : "flex-start" }}
    >
      <div
        className={styles.message__left}
        style={{
          order: senderId === userId ? 2 : 1,
        }}
      >
        <img
          src={
            senderId === userId ? props.user?.avatar : props.companion?.avatar
          }
          alt=""
          className={styles.message__avatar}
        />
      </div>
      <div
        className={styles.message__right}
        style={{
          order: senderId === userId ? 1 : 2,
          margin: senderId === userId ? "0 14px 0 154px" : "0 154px 0 14px",
        }}
      >
        <div
          className={styles.message__text}
          style={{
            borderRadius:
              senderId === userId ? "15px 0 15px 15px" : "0 15px 15px",
            background:
              senderId === userId
                ? "linear-gradient(to bottom right, #363636, #585858)"
                : "linear-gradient(to bottom right, #FF985E, #FA3A58)",
          }}
        >
          {props.message.text}
        </div>
        <span
          className={styles.message__timestamp}
          style={{ alignSelf: senderId === userId ? "flex-end" : "flex-start" }}
        >
          {props.message.createdAt}
        </span>
      </div>
    </div>
  );
};

export default Message;
