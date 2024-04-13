import { FC } from "react";
import { CloseSquare, MoreSquare } from "iconsax-react";
import styles from "./ViewRequest.module.scss";
import { useViewRequest } from "../../../shared/hooks/modalHooks";
import { Collapses, MenuRequest } from "./ui";
import { getOneRequestApi } from "./api/getOneRequestApi";

export const ViewRequest: FC = () => {
    const modal = useViewRequest();
    const fetchData = getOneRequestApi();
    return (
        <div className={styles.ViewRequest}>
            <MenuRequest />
            <div>
                <div className={styles.Header}>
                    <div className={styles.Name}>
                        Заявка - Оптима Банк /&nbsp;
                        <div className={styles.Number}>{fetchData.oneRequest.task_number}</div>
                    </div>
                    <div className={styles.buttons}>
                        <MoreSquare
                            cursor={"pointer"}
                            variant="Bulk"
                            color="#929292"
                            size={34}
                        />
                        <CloseSquare
                            cursor={"pointer"}
                            size={34}
                            onClick={modal.close}
                        />
                    </div>
                </div>
                <Collapses />
            </div>
        </div>
    );
};
