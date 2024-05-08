import { FC } from "react";
import styles from "./RequestMenu.module.scss";
import { HambergerMenu, InfoCircle, Link1, Message2, TaskSquare } from "iconsax-react";

export const RequestMenu: FC = () => {
    return (
        <div className={styles.RequestMenu}>
            <div className={styles.Icon}>
                <InfoCircle />
            </div>
            <div className={styles.Icon}>
                <Link1 />
            </div>
            <div className={styles.Icon}>
                <HambergerMenu />
            </div>
            <div className={styles.Icon}>
                <Message2 />
            </div>
            <div className={styles.Icon}>
                <TaskSquare />
            </div>
        </div>
    );
};
