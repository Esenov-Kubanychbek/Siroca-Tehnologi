import { Collapse } from "antd";
import styles from "./Link.module.scss";
import { Link1 } from "iconsax-react";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import "../Style.scss";

export const Link = () => {
    return (
        <Collapse
            className={styles.Link}
            accordion
        >
            <CollapsePanel
                header="Ссылка на Jira"
                key={1}
            >
                <div className={styles.panel}>
                    <Link1 />
                    <a href="https:/file/3m31TURmap/CRM-Siroca-(Geeks-Pro)">
                        https:/file/3m31TURmap/CRM-Siroca-(Geeks-Pro)
                    </a>
                </div>
            </CollapsePanel>
        </Collapse>
    );
};
