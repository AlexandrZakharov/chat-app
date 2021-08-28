import styles from "./../Conversation.module.scss";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <img
          src={props.companion?.avatar}
          alt=""
          className={styles.header__avatar}
        />
      </div>
      <div className={styles.header__center}>
        <span className={styles.header__name}>
          {props.companion?.firstName} {props.companion?.lastName} <div className={styles.header__status}></div>
        </span>
        <span className={styles.header__activity}>Online</span>
      </div>
      <div className={styles.header__right}>
        <MoreVertIcon className={styles.header__more} />
      </div>
    </div>
  );
};

export default Header;
