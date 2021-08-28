import { useState } from "react";
import styles from "./../Chats.module.scss";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const Search = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(0);
  const categories = ["Dialog"]; //, "User", "Friends"
  const [dropdownStatus, setDropdownStatus] = useState(false);
  return (
    <div className={styles.search}>
      <div className={styles.search__container}>
        <SearchIcon className={styles.search__icon} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className={styles.search__input}
        />
        <div
          className={styles.search__category}
          onClick={() => setDropdownStatus(!dropdownStatus)}
        >
          <div className={styles.category__container}>
            <span className={styles.category__container__text}>
              {categories[category]}
            </span>
            <ArrowBackIosIcon className={styles.category__container__arrow} />
          </div>
          <div
            className={styles.category__dropdown}
            style={{
              dispay: dropdownStatus ? "flex" : "none",
              opacity: dropdownStatus ? 1 : 0,
              top: dropdownStatus ? "50px" : "45px"
            }}
          >
            {categories.map((item, i) => {
              return (
                i !== category && (
                  <span
                    className={styles.category__dropdown__item}
                    key={i}
                    onClick={() => setCategory(i)}
                  >
                    {item}
                  </span>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
