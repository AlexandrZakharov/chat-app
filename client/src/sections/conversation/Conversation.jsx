import Field from "./components/Field";
import Header from "./components/Header";
import Input from "./components/Input";
import styles from "./Conversation.module.scss";

const Conversation = (props) => {
  return (
    <div className={styles.conversation}>
      <Header companion={props.companion} />
      <Field
        user={props.user}
        getMessages={props.getMessages}
        messages={props.messages}
        companion={props.companion}
      />
      <Input
        addNewMessage={props.addNewMessage}
        user={props.user}
        conversations={props.conversations}
      />
    </div>
  );
};

export default Conversation;
