import styles from "./LinkJira.module.scss";
import { Link1 } from "iconsax-react";
import "../Style.scss";
import { FC } from "react";
import { getOneRequestApi } from "../../api/getOneRequestApi";

export const LinkJira: FC = () => {
    const fetchData = getOneRequestApi();
    return (
        <div className={styles.LinkJira}>
            <Link1 color="#1C6AB1" />
            <a href="https://jira.geeks.kg/secure/Dashboard.jspa">{fetchData.oneRequest.jira}</a>
        </div>
    );
};
