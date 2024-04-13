import { FC } from "react";
import styles from "./MenuRequest.module.scss";
import { InfoCircle, Link1, Menu, Message2, TaskSquare } from "iconsax-react";
import "../Style.scss";

export const MenuRequest: FC = () => {
    return (
        <div className={styles.Menu}>
            <div className={styles.MenuIcon}>
                <div className={styles.Icon}>
                    <InfoCircle size={24} />
                </div>
                <div className={styles.Icon}>
                    <Link1 size={24} />
                </div>
                <div className={styles.Icon}>
                    <Menu
                        variant="Outline"
                        size={24}
                    />
                </div>
                <div className={styles.Icon}>
                    <Message2 size={24} />
                </div>
                <div className={styles.Icon}>
                    <TaskSquare size={24} />
                </div>
            </div>
        </div>
    );
};
