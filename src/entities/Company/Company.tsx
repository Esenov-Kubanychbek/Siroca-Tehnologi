import { FC } from "react";
import styles from "./Company.module.scss";
import { dataCompanies, useDataStoreComponies } from "../../widgets/Admin/Companies/api/companiesApi";
import { ItemInner } from "../../shared/ui";
import { useViewCompany } from "../../shared/hooks/modalHooks/useViewCompany";

export const Company: FC<{ company: dataCompanies }> = ({ company }) => {
    const modal = useViewCompany();
    const { selectedIdCompany } = useDataStoreComponies();
    return (
        <div
            className={styles.Company}
            onClick={() => {
                modal.open();
                selectedIdCompany(company.id);
            }}
        >
            <ItemInner
                width={206}
                content={company.name}
            />
            <ItemInner
                width={210}
                content={company.country}
            />
            <ItemInner
                width={306}
                content={company.count_users}
            />
            <ItemInner
                width={286}
                content={5}
            />
            <ItemInner
                width={208}
                content={"kUBA"}
            />
            <ItemInner
                width={206}
                content={company.created_at}
            />
            <ItemInner
                width={296}
                content={120302}
            />
        </div>
    );
};
