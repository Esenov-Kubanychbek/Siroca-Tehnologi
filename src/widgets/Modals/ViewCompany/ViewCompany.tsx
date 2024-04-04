import {  CloseSquare } from "iconsax-react";
import styles from "./ViewCompany.module.scss"
import { CustomButton, CustomInput } from "../../../shared/ui";
import { useViewCompany } from "../../../shared/hooks/useViewCompany";
import { useDataStoreComponies } from "../../../shared/componiesApi";
import { Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";




export const ViewCompany = () => {
    const modal = useViewCompany();
    const {selectedCompanyData} = useDataStoreComponies();
    
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
                    />
                </div>
            </div>
        </div>
    );
};

