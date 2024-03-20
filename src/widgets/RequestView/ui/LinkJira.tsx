import { FC } from "react";
import styles from "./LinkJira.module.scss";
import { DropDown } from "../../Modals/CreateRequest/ui/DropDown";
import { Link1 } from "iconsax-react";

export const LinkJira: FC = () => {
    return (
        <div className={styles.LinkJira}>
            <DropDown text="Ссылка на Jira:" />
            <div>
                <Link1 /> <span></span>
            </div>
        </div>
    );
};
