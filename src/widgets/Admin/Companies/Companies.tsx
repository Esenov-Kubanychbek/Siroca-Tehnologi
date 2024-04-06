import { Modal } from "antd";
import { SearchInput } from "../../../features";
import { ButtonCreate } from "../../../shared/ui/ButtonCreate/ButtonCreate";
import styles from "./Companies.module.scss";
import { CreateCompany, ViewCompany } from "../..";
import { useCompany } from "../../../shared/hooks/modalHooks";
import { useViewCompany } from "../../../shared/hooks/modalHooks/useViewCompany";
import { FC, useEffect } from "react";
import { CompaniesTop } from "./ui/CompaniesTop";
import { Company } from "../../../entities";
import { useDataStoreComponies } from "./api/getCompaniesApi";

export const Companies: FC = () => {
    const modal = useCompany();
    const modalView = useViewCompany();
    const { fetchDatas, data } = useDataStoreComponies();
    useEffect(() => {
        fetchDatas();
    }, []);
    return (
        <div className={styles.Companies}>
            <div className={styles.Name}>Поиск по компаниям</div>
            <div className={styles.SearchCompanies}>
                <SearchInput />
                <div
                    className={styles.Buttons}
                    onClick={modal.open}
                >
                    <ButtonCreate name="Создать компанию" />
                </div>
            </div>
            <div className={styles.Table}>
                <div className={styles.Top}>
                    <CompaniesTop />
                </div>
                <div className={styles.Inner}>
                    {data.map((dataCompany) => (
                        <Company
                            key={dataCompany.id}
                            company={dataCompany}
                        />
                    ))}
                </div>
            </div>
            <Modal
                centered
                width={700}
                open={modal.isOpen}
                onCancel={modal.close}
            >
                <CreateCompany />
            </Modal>
            <Modal
                centered
                width={700}
                open={modalView.isOpen}
                onCancel={modalView.close}
            >
                <ViewCompany />
            </Modal>
        </div>
    );
};
