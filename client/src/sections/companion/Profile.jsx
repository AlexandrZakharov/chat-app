import styles from "./Profile.module.scss";

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <img
        src={props.companion?.avatar}
        alt=""
        className={styles.profile__avatar}
      />
      <h2 className={styles.profile__name}>
        {props.companion?.firstName} {" "}
        {props.companion?.lastName}
      </h2>
      <span className={styles.profile__activity}>Active now</span>
      <div className={styles.profile__attachment}>
        <div className={styles.attachment__header}>
          <span className={styles.attachment__title}>Attachment</span>
          <div className={styles.attachment__count}>15</div>
        </div>
        <div className={styles.attachment__main}>
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
            className={styles.attachment__img}
          />
          <img
            src="https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg"
            alt=""
            className={styles.attachment__img}
          />
          <img
            src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
            alt=""
            className={styles.attachment__img}
          />
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
            className={styles.attachment__img}
          />
          <img
            src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg"
            alt=""
            className={styles.attachment__img}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Fall_photographer_%28Unsplash%29.jpg/1280px-Fall_photographer_%28Unsplash%29.jpg"
            alt=""
            className={styles.attachment__img}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
