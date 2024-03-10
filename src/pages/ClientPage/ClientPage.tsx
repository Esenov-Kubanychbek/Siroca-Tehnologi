import styles from "./ClientPage.module.scss";
import { Dashboard } from "../../widgets/Dashboard";
import { Header } from "../../widgets/Header";
import ClientProfile from '../../widgets/Profiles/ClientProfile/ClientProfile';
import { useAppSelector } from "../../app/store/hooks";
import ModalBack from "../../shared/ui/ModalBack";
import { ListContainer } from "../../widgets/ListContainer";

const ClientPage = () => {
   const modal = useAppSelector(state => state.modal);
   return (
      <div className={styles.ClientPage}>
         <Dashboard />
         <div className={styles.Inner}>
            <Header />
            <ListContainer/>
         </div>
         <ClientProfile/>
         {modal.isModalOpen ? <ModalBack/> : ''}

      </div>
   );
};

export default ClientPage;
