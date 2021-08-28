import styles from "./Sidebar.module.scss";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatIcon from "@material-ui/icons/Chat";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <img
          src={props.user.avatar}
          alt=""
          className={styles.profile__avatar}
        />

        <div className={styles.profile__name}>
          <span className={styles.profile__name__text}>{props.user.firstName}</span>
          <ArrowBackIosIcon className={styles.profile__name__icon} />
        </div>
      </div>
      <ul className={styles.nav}>
        <li className={`${styles.nav__item} ${styles.active}`}>
          <ChatIcon className={styles.nav__item__icon} />
        </li>
        <li className={styles.nav__item}>
          <SettingsIcon className={styles.nav__item__icon} />
        </li>
        <li className={styles.nav__item}>
          <PowerSettingsNewIcon className={styles.nav__item__icon} onClick={props.signOut} />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
