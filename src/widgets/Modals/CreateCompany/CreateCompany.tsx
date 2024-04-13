import { AddSquare, CloseSquare } from "iconsax-react";
import styles from "./CreateCompany.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { FC, useState } from "react";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { useDataInputCompaniesStore } from "../ViewCompany/api/dataInputCompanies";
import { useAddManager, useCompany } from "../../../shared/hooks/modalHooks";
import { Modal } from "antd";
import { AddManager } from "../AddManager/AddManager";

export const CreateCompany: FC = () => {
    const modal = useCompany();
    const [allData, setAllData] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);
    const { addCompany, users } = useDataStoreComponies();
    const { changeInput, resetInput, dataInputCompanies } = useDataInputCompaniesStore();
    const addManager = useAddManager();

    const addNewCompany = () => {
        if (
            dataInputCompanies.name &&
            dataInputCompanies.company_code &&
            dataInputCompanies.country &&
            dataInputCompanies.managers &&
            dataInputCompanies.domain
        ) {
            addCompany(dataInputCompanies);
            resetInput();
            setAllData(false);
            modal.close();
            console.log(dataInputCompanies.main_manager);
        } else {
            setAllData(true);
            console.log("error");
        }
    };
    const managers = users.filter((item) => item.role_type === "manager");

    return (
        <div className={styles.CreateCompany}>
            <div className={styles.blockOne}>
                <div>Создание компании</div>
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
                        placeholder="Напишите..."
                        width={272}
                        change={changeInput}
                        name="name"
                        allData={allData}
                        datas={dataInputCompanies.name}
                        value={dataInputCompanies.name}
                    />
                </div>
                <div>
                    <label htmlFor="">Страна</label>
                    <CustomInput
                        placeholder="Напишите..."
                        width={272}
                        change={changeInput}
                        name="country"
                        allData={allData}
                        datas={dataInputCompanies.country}
                        value={dataInputCompanies.country}
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="">Краткий код</label>
                    <CustomInput
                        placeholder="Ввести код "
                        width={272}
                        change={changeInput}
                        name="company_code"
                        allData={allData}
                        datas={dataInputCompanies.company_code}
                        value={dataInputCompanies.company_code}
                    />
                </div>
                <div>
                    <label htmlFor="">Домен</label>
                    <CustomInput
                        placeholder="Напишите..."
                        width={272}
                        name="domain"
                        change={changeInput}
                        allData={allData}
                        datas={dataInputCompanies.domain}
                        value={dataInputCompanies.domain}
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="sel">Ответственный менеджер</label>
                    <br />

                    <div className={styles.managers}>
                        <select
                            className={styles.select}
                            onChange={changeInput}
                            name="main_manager"
                            id="3"
                        >
                            {managers.map((manager) => (
                                <option
                                    key={manager.id}
                                    value={manager.id}
                                >
                                    {manager.first_name}
                                </option>
                            ))}
                        </select>
                        <div
                            className={styles.hintAdd}
                            style={{ display: `${hovered ? "block" : "none"}` }}
                        >
                            <p className={styles.hint}>Нажмите что бы добавить менеджера</p>
                            <div className={styles.tre}> </div>
                        </div>

                        <div className={styles.addManagers}>
                            <AddSquare
                                color="white"
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                onClick={addManager.open}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <p style={{ display: `${allData ? "block" : "none"}` }}>Все поля должны быть обязательно заполнены*</p>
            <div className={styles.buttons}>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Without"
                        width={150}
                        text="Отменить"
                        onClick={() => {
                            resetInput();
                            setAllData(false);
                        }}
                    />
                </div>
                <div>
                    <CustomButton
                        variant="Primary"
                        width={150}
                        text="Создать"
                        onClick={addNewCompany}
                    />
                </div>
            </div>

            <Modal
                open={addManager.isOpen}
                onCancel={addManager.close}
                width={500}
                centered
            >
                <AddManager />
            </Modal>
        </div>
    );
};
