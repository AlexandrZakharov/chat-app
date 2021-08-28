import { useEffect, useRef } from "react";
import styles from "./../Conversation.module.scss";
import Message from "./Message";

const Field = (props) => {
  const scrollRef = useRef();
  useEffect(() => {
    console.log(scrollRef);
    scrollRef.current.scrollTo(0, 1000, { behavior: "smooth" });
  }, [props.messages]);
  return (
    <div className={styles.field} ref={scrollRef}>
      {props.messages.map((message, i) => {
        return (
          <Message
            key={i}
            message={message}
            user={props.user}
            companion={props.companion}
          />
        );
      })}
    </div>
  );
};

export default Field;
