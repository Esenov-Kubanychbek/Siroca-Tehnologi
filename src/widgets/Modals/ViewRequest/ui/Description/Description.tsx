import styles from "./Description.module.scss";
import { FolderAdd } from "iconsax-react";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import { FilesList } from "../../../EditRequest/ui/Description/ui/FilesList";
import { createFileApi } from "../../../EditRequest/api/createFileApi";
import { descriptionApi } from "../../api/descriptionApi";
import { CustomMoreSquare } from "../../../../../shared/ui";

export const Description: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const { oneRequest, setFile } = getOneRequestApi();
    const { setOpened, clearDescription, setDescriptionState, descriptionState } = descriptionApi();
    const { oneFile, createFile } = createFileApi();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        createFile({
            file: e.target.files ? e.target.files[0] : "",
            application: oneRequest.id,
        });
    };
    useEffect(() => {
        if (oneFile.application !== 0) {
            setFile({
                id: oneFile.id,
                file: String(oneFile.file),
                application: oneFile.application !== undefined ? oneFile.application : 0,
                file_name: oneFile.file_name,
            });
        }
    }, [oneFile]);
    useEffect(() => {
        setDescriptionState(oneRequest.description);
    }, [oneRequest.description]);
    return (
        <div className={styles.Description}>
            <div className={styles.Text}>
                <div className={styles.Buttons}>
                    <FolderAdd
                        cursor={"pointer"}
                        size={28}
                        color="#5C5C5C"
                    />
                    <input
                        type="file"
                        name="files"
                        onChange={handleChange}
                    />
                    <CustomMoreSquare
                        open={open}
                        setOpen={setOpen}
                    >
                        <button onClick={() => setOpened(true)}>Редактировать</button>
                        <button onClick={() => clearDescription(oneRequest.id)}>Очистить всё</button>
                    </CustomMoreSquare>
                </div>
                <p>{!descriptionState.description ? "Добавьте описание..." : descriptionState.description}</p>
            </div>
            <FilesList />
        </div>
    );
};
