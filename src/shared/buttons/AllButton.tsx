import styles from "./AllButton.module.scss";
import arrow from "/arrow-right.png";

const AllButton = () => {
   return (
      <div className={styles.AllButton}>
         <div>
            <div>Все время</div>
            <img
               alt="arrow"
               src={arrow}
            />
         </div>
      </div>
   );
};

export default AllButton;
