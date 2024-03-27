import { CloseSquare } from "iconsax-react";
import styles from "./CreateCompany.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { CustomSelect } from "./ui/CustomSelect";
import { useCompany } from "../../../shared/hooks";
import { ChangeEvent, useState } from "react";
import { dataAddCompanies, useDataStoreComponies } from "../../../shared/componiesApi";

export const CreateCompany = () => {
    const datas: string[] = ["Abu", "Aman", "Kuba", "Daler"];
    const modal = useCompany();
    const { addCompany } = useDataStoreComponies();
    const [ dataInputCompanies, setDataInputCompanies ] = useState<dataAddCompanies>({
            name: "",
            company_code: "",
            country: "",
            managers: [],
            main_manager: null,
            domain: ""
    });
    const changeInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setDataInputCompanies(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value
        }));
        
      };
    const addNewCompany = () => {
        addCompany(dataInputCompanies);
        console.log(dataInputCompanies);
        
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
                    />
                </div>
                <div>
                    <label htmlFor="">Страна</label>
                    <CustomInput
                        placeholder="Напишите..."
                        width={272}
                        change={changeInput}
                        name="country"
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
                    />
                </div>
                <div>
                    <label htmlFor="">Домен</label>
                    <CustomInput
                        placeholder="Напишите..."
                        width={272}
                        name="domain"
                        change={changeInput}
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="sel">Ответственный менеджер</label>
                    <br />
                    <CustomSelect
                        name="manager"
                        placeholder="Выбрать"
                        dataOption={datas}
                    />
                </div>
            </div>
            <div className={styles.buttons}>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Without"
                        width={150}
                        text="Отменить"
                    />
                </div>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Primary"
                        width={150}
                        text="Создать"
                        createCompany={addNewCompany}

                    />
                </div>
            </div>
        </div>
    );
};
