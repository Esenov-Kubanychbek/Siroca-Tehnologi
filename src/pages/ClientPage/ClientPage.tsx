import styles from "./ClientPage.module.scss";
import Dashboard from "../../widgets/Dashboard/ui/Dashboard";
import Header from "../../widgets/Header/ui/Header";
import Items from "../../widgets/Items/ui/Items";
import AllButton from "../../shared/buttons/AllButton";

const ClientPage = () => {
   return (
      <div className={styles.ClientPage}>
         <Dashboard />
         <div>
            <Header />
            <Items />
            <AllButton />
         </div>
      </div>
   );
};

export default ClientPage;
