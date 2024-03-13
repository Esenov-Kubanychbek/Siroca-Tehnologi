import { Modal } from "antd";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import { CreateCompamy } from "../../CreateCompamy/CreateCompamy";
import styles from "./Companies.module.scss";
import { massiv } from "./Massiv";
import companiesModal from "./CompaniesModal";

export const Companies = () => {
    const modal = companiesModal()
    return <div className={styles.Companies}>
        <h3>Поиск по компаниям</h3>
        <div className={styles.searchCompanies}>
            <SearchInput />
            <div onClick={modal.open}>
                <ButtonCreate name="Создать компанию" />
            </div>
        </div>
        <ul>
            <li className={styles.h}>
                <div>Компания</div>
                <div>Страна компании</div>
                <div>Количество пользователей</div>
                <div>Количество заявок</div>
                <div>Менеджер</div>
                <div>Дата создание</div>
                <div>Крайний редактирование</div>
            </li>
            <div className={styles.scrol}>
               <div>
               {massiv.map((mass, i) => (
                    <li key={i}>
                        <div>{mass.compani}</div>
                        <div>{mass.strcompani}</div>
                        <div>{mass.kolUser}</div>
                        <div>{mass.kolZayavok}</div>
                        <div>{mass.menedjer}</div>
                        <div>{mass.daraCreate}</div>
                        <div>{mass.redact}</div>
                    </li>
                ))}
               </div>
            </div>
        </ul>
        <Modal 
            width={700}
            bodyStyle={{

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "30px 0"
            }}
            footer={null}
            centered
            closeIcon={false}
            open={modal.isOpen}
            onCancel={modal.close}>
            <CreateCompamy/>
            </Modal>
    </div>;
};