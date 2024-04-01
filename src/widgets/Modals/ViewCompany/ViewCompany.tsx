import { AddSquare, CloseSquare } from "iconsax-react";
import styles from "./ViewCompany.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { useViewCompany } from "../../../shared/hooks/modalHooks/useViewCompany";

import { CustomSelect } from "../../Modals/CreateCompany/ui/CustomSelect";
import { FC } from "react";
import { useDataStoreComponies } from "../../Admin/Companies/api/getCompaniesApi";

export const ViewCompany: FC = () => {
    const modal = useViewCompany();
    const { selectedCompanyData, deleteCompany, idCompany } = useDataStoreComponies()
    const deleteComp = () => {
        deleteCompany(idCompany);
        modal.close();
        console.log(idCompany);
    };
    return (
        <div className={styles.CreateCompany}>
            <div className={styles.blockOne}>
                <div>Просмотр компании</div>
                <CloseSquare
                    cursor={"pointer"}
                    size={32}
                    onClick={modal.close}
                />
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="">Название компании</label>
                    <CustomInput
                        placeholder=""
                        value={selectedCompanyData?.name}
                        width={272}
                    />
                </div>
                <div>
                    <label htmlFor="">Страна</label>
                    <CustomInput
                        placeholder=""
                        value={selectedCompanyData?.country}
                        width={272}
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="">Краткий код</label>
                    <CustomInput
                        placeholder=""
                        value={selectedCompanyData?.company_code}
                        width={272}
                    />
                </div>
                <div>
                    <label htmlFor="">Домен</label>
                    <CustomInput
                        placeholder=""
                        value={selectedCompanyData?.domain}
                        width={272}
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="sel">Список пользавателей</label>
                    <br />
                    <CustomSelect
                        name="users"
                        dataOption={selectedCompanyData?.users}
                        text="Пользователи"
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <p
                        className={styles.Label}
                        style={{ marginTop: "23px" }}
                    >
                        Количество пользавателей
                    </p>
                    <CustomInput
                        placeholder=""
                        value={selectedCompanyData?.count_users}
                        width={272}
                    />
                </div>
                <div>
                    <p
                        className={styles.Label}
                        style={{ width: "200px", marginLeft: "40px" }}
                    >
                        Создать/Привязать пользавателя
                    </p>
                    <button className={styles.AddUser}>
                        Добавить польз. <AddSquare />
                    </button>
                </div>
            </div>
            <div className={styles.buttons}>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Without"
                        width={150}
                        text="Сбросить"
                    />
                </div>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Primary"
                        width={150}
                        text="Сохранить"
                    />
                </div>
                <button onClick={deleteComp}>Удалить</button>
            </div>
        </div>
    );
};
