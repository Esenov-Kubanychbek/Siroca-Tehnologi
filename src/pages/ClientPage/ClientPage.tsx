import styles from "./ClientPage.module.scss";
import { Dashboard } from "../../widgets/Dashboard";
import { Header } from "../../widgets/Header";
import { Items } from "../../widgets/Items";
import { useState } from "react";
import ReportModal from "../../widgets/Report/ReportModal/ReportModal";


const ClientPage:React.FC = () => {
   const [repModalwin, setRepModalWin] = useState(false)
   const [isClickedFind, setIsClickedFind] = useState(false)
   const openRepModal = () => {
      setRepModalWin(!repModalwin)
   }
   const clickFind = (ev: object) => {
      setIsClickedFind(true)
      setRepModalWin(false)
      console.log(ev);
   }
   const itemsReports = [ 
      {
         key: Math.random,
         number: "05050",
         integretion: "Интеграция лис мбанк",
         name: "Иванов Иван",
         manager: "Аширжанова Уулкун",
         begin: [1,1,2023],
         end: [2,1,2023],
         preoritet: "Изменен 24.12.24",
         status: "Изменен 24.12.24",
      },{
         key: Math.random,
         number: "05050",
         integretion: "Интеграция лис мбанк",
         name: "Иванов Иван",
         manager: "Аширжанова Уулкун",
         begin: [1,1,2023],
         end: [2,1,2023],
         preoritet: "Изменен 24.12.24",
         status: "Изменен 24.12.24",
      },{
         key: Math.random,
         number: "05050",
         integretion: "Интеграция лис мбанк",
         name: "Иванов Иван",
         manager: "Аширжанова Уулкун",
         begin: [1,1,2023],
         end: [2,1,2023],
         preoritet: "Изменен 24.12.24",
         status: "Изменен 24.12.24",
      },{
         key: Math.random,
         number: "05050",
         integretion: "Интеграция лис мбанк",
         name: "Иванов Иван",
         manager: "Аширжанова Уулкун",
         begin: [1,1,2023],
         end: [2,1,2023],
         preoritet: "Изменен 24.12.24",
         status: "Изменен 24.12.24",
      },{
         key: Math.random,
         number: "05050",
         integretion: "Интеграция лис мбанк",
         name: "Иванов Иван",
         manager: "Аширжанова Уулкун",
         begin: [1,1,2023],
         end: [2,1,2023],
         preoritet: "Изменен 24.12.24",
         status: "Изменен 24.12.24",
      },
   ]
   const closeRepModal = () => {
      setRepModalWin(false)
   }
   return (
      <div className={styles.ClientPage}>
         <Dashboard role="admin" />
         <div className={styles.Inner}>
            <Header reportModalOpenFunc={openRepModal} />
            {isClickedFind ? null : <Items />}
               {repModalwin ? <ReportModal onClose={closeRepModal}/>  : null}
            
         </div>
      </div>
   );
};

export default ClientPage;
