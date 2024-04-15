import { AddSquare, CloseSquare } from "iconsax-react";
import styles from "./CreateCompany.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { FC, useState } from "react";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { useDataInputCompaniesStore } from "../ViewCompany/api/dataInputCompanies";
import { Modal } from "antd";
import { AddManager } from "../AddManager/AddManager";
import { ICreateCompanyModal } from "./types/types";

export const CreateCompany: FC<ICreateCompanyModal> = (props) => {
    const { setModal } = props;
    const [allData, setAllData] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);
    const { addCompany, users } = useDataStoreComponies();
    const { changeInput, resetInput, dataInputCompanies } = useDataInputCompaniesStore();

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
            setModal(false);
            console.log(dataInputCompanies.main_manager);
        } else {
            setAllData(true);
            console.log("error");
        }
    };
    const managers = users.filter((item) => item.role_type === "manager");
    const [managerModal, setManagerModal] = useState<boolean>(false);
    return (
        <div className={styles.CreateCompany}>
            <div className={styles.blockOne}>
                <div>Создание компании</div>
                <CloseSquare
                    cursor={"pointer"}
                    size={32}
                    onClick={() => setModal(false)}
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
                                onClick={() => setManagerModal(true)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <p style={{ display: `${allData ? "block" : "none"}` }}>Все поля должны быть обязательно заполнены*</p>
            <div className={styles.buttons}>
                <CustomButton
                    variant="Without"
                    width={150}
                    text="Отменить"
                    onClick={() => {
                        setModal(false);
                        resetInput();
                        setAllData(false);
                    }}
                />
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
                open={managerModal}
                onCancel={() => setManagerModal(false)}
                width={500}
                centered
            >
                <AddManager setModal={setManagerModal} />
            </Modal>
        </div>
    );
};
