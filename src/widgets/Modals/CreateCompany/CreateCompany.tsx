import { CloseSquare } from "iconsax-react";
import styles from "./CreateCompany.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { CustomSelect } from "./ui/CustomSelect";
import { useCompany } from "../../../shared/hooks";
import {  useState } from "react";
import {  useDataStoreComponies } from "../../../shared/componiesApi";
import { useDataInputCompaniesStore } from "../ViewCompany/api/dataInputCompanies";

export const CreateCompany = () => {
    const datas: string[] = ["Abu", "Aman", "Kuba", "Daler"];
    const modal = useCompany();
    const [allData, setAllData] = useState<boolean>(false);
    const { addCompany } = useDataStoreComponies();
    const {changeInput, resetInput, dataInputCompanies} = useDataInputCompaniesStore();
    const addNewCompany = () => {
        if (dataInputCompanies.name && dataInputCompanies.company_code && dataInputCompanies.country && dataInputCompanies.managers && dataInputCompanies.domain) {

            addCompany(dataInputCompanies);
            resetInput();
            setAllData(false);
            modal.close();
        }else{
            setAllData(true);
            console.log('error');
            
        }
    }

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
                    <CustomSelect
                        name="manager"
                        text="Выбрать"
                        dataOption={datas}
                    />
                </div>
            </div>
            <p style={{display: `${allData ? 'block' : 'none'}`}}>Все поля должны быть обязательно заполнены*</p>
            <div className={styles.buttons}>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Without"
                        width={150}
                        text="Отменить"
                        onClick={resetInput}
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
        </div>
    );
};
