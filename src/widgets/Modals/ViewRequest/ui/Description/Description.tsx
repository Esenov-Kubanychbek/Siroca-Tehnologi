import styles from "./Description.module.scss";
import { FolderAdd } from "iconsax-react";
import xlsx from "../../../../../shared/assets/excel.svg";
import "../Style.scss";
import { FC } from "react";
import { getOneRequestApi } from "../../api/getOneRequestApi";

export const Description: FC = () => {
    const fetchData = getOneRequestApi();
    return (
        <div className={styles.container}>
            <p className={styles.description}>{fetchData.oneRequest.description}</p>
            <FolderAdd className={styles.folderAdd} />
            {fetchData.oneRequest.files !== null ? (
                <div>
                    <div className={styles.xlsx}>
                        <img
                            src={xlsx}
                            alt="xlsx"
                        />
                        <p>Интеграция Лис Mbank</p>
                    </div>
                    <div className={styles.xlsx}>
                        <img
                            src={xlsx}
                            alt="xlsx"
                        />
                        <p>Интеграция Лис Mbank</p>
                    </div>
                    <div className={styles.images}>
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            ) : (
                false
            )}
        </div>
    );
};
