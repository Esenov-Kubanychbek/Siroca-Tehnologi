import styles from "./ClientPage.module.scss";
import { Dashboard } from "../../widgets/Dashboard";
import { Header } from "../../widgets/Header";
import { Items } from "../../widgets/Items";
import ClientProfile from '../../widgets/Profiles/ClientProfile/ClientProfile';
import { useAppSelector } from "../../app/store/hooks";
import ModalBack from "../../shared/ui/ModalBack";

const ClientPage = () => {
   const modal = useAppSelector(state => state.modal);
   return (
      <div className={styles.ClientPage}>
         <Dashboard role="admin" />
         <div className={styles.Inner}>
            <Header />
            <Items />
         </div>
         <ClientProfile/>
         {modal.isModalOpen ? <ModalBack/> : ''}

      </div>
   );
};

export default ClientPage;
