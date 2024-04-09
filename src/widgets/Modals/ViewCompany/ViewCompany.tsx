import {  CloseSquare } from "iconsax-react";
import styles from "./ViewCompany.module.scss"
import { CustomButton, CustomInput } from "../../../shared/ui";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";
import { Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { FC, } from "react";
import { useViewCompany } from "../../../shared/hooks/modalHooks/useViewCompany";
import { useDataInputCompaniesStore } from "./api/dataInputCompanies";

export const ViewCompany: FC = () => {
    const modal = useViewCompany();
    const {selectedCompanyData, fetchDatas} = useDataStoreComponies();
    const {changeInput, changeInputOne, dataInputCompanies} = useDataInputCompaniesStore();
    const change = async () => {
        await changeInputOne(dataInputCompanies, selectedCompanyData, selectedCompanyData?.id);
            fetchDatas();
    }

    return (
        <div className={styles.CreateCompany}>
            <div className={styles.blockOne}>
                <div>{selectedCompanyData?.name}</div>
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
                        defaultValue={selectedCompanyData?.name}
                        width={272}
                        change={changeInput}
                        name="name"
                    />
                </div>
                <div>
                    <label htmlFor="">Страна</label>
                    <CustomInput
                        placeholder=""
                        defaultValue={selectedCompanyData?.country}
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
                        placeholder=""
                        defaultValue={selectedCompanyData?.company_code}
                        width={272}
                        change={changeInput}
                        name="company_code"
                    />
                </div>
                <div>
                    <label htmlFor="">Домен</label>
                    <CustomInput
                        placeholder=""
                        defaultValue={selectedCompanyData?.domain}
                        width={272}
                        change={changeInput}
                        name="domain"
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="sel">Ответственный менеджер</label>
                    <br />
                    <Collapse accordion>
                        <CollapsePanel header='Ответственный менеджер' key={16}>

                        </CollapsePanel>
                    </Collapse>
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
                        onClick={change}
                        
                    />
                </div>
            </div>
        </div>
    );
};

