import { ListTopName } from "../../shared/ui/ListTop/ListTopName";
import styles from "./ManagerPage.module.scss";

export const ManagerPage = () => {
    return (
        <div className={styles.ManagerPage}>
            <ListTopName
                width={100}
                name="IT"
            />
        </div>
    );
};
