import styles from "./Header.module.scss";
import notification from "/notification.png";
import profileImage from "/profileImage.png";
import arrow from "/arrow.png";
import search from "/search-normal.png";
import filter from "/filter.png";

const Header = () => {
   return (
      <div className={styles.Header}>
         <div className={styles.ClientData}>
            <div className={styles.DataNumber}>
               <div>Создано: 10</div>
               <div className={styles.Line} />
               <div>В работе: 8</div>
               <div className={styles.Line} />
               <div>Закрыто: 2</div>
            </div>
            <div className={styles.DataProfile}>
               <div className={styles.Notification}>
                  <img
                     alt="notification"
                     src={notification}
                  />
                  <div className={styles.NotifNumber}>5</div>
               </div>
               <div className={styles.Profile}>
                  <img
                     alt="profile"
                     src={profileImage}
                     className={styles.ProfileImage}
                  />
                  <div className={styles.ProfileWord}>Мой профиль</div>
                  <img
                     alt="profileIcon"
                     src={arrow}
                     className={styles.ProfileIcon}
                  />
               </div>
            </div>
         </div>
         <div className={styles.SearchData}>
            <div className={styles.Filter}>
               <div
                  className={styles.Time}
                  id={styles.blue}
               >
                  Всё время
               </div>
               <div className={styles.Time}>Неделя</div>
               <div className={styles.Time}>Месяц</div>
               <div className={styles.Border} />
            </div>
            <div className={styles.Search}>
               <div className={styles.SearchIcon}>
                  <img
                     alt="search"
                     src={search}
                  />
               </div>
               <input
                  placeholder="Поиск"
                  className={styles.SearchInput}
               />
               <button className={styles.SearchButton}>Найти</button>
            </div>
            <div className={styles.FilterIcon}>
               <img
                  alt="filter"
                  src={filter}
               />
            </div>
            <div className={styles.Report}>Cкачать отчет</div>
         </div>
      </div>
   );
};

export default Header;
