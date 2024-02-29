import styles from "./ClientPage.module.scss";
import { Dashboard } from "../../widgets/Dashboard";
import { Header } from "../../widgets/Header";
import { Items } from "../../widgets/Items";

const ClientPage = () => {
   return (
      <div className={styles.ClientPage}>
         <Dashboard role="admin" />
         <div className={styles.Inner}>
            <Header />
            <Items />
         </div>
      </div>
   );
};

export default ClientPage;
