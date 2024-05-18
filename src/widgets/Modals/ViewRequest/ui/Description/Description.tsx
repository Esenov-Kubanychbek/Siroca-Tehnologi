import styles from "./Description.module.scss";
import { FolderAdd } from "iconsax-react";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { getOneRequestApi } from "../../api/getOneRequestApi";
import { FilesList } from "../../../EditRequest/ui/Description/ui/FilesList";
import { createFileApi } from "../../../EditRequest/api/createFileApi";
import { descriptionApi } from "../../api/descriptionApi";
import { CustomButton, CustomMoreSquare } from "../../../../../shared/ui";

export const Description: FC = () => {
    const { oneRequest, setFile } = getOneRequestApi();
    const { oneFile, createFile } = createFileApi();
    const [opened, setOpened] = useState<boolean>(false);
    const [canChange, setCanChange] = useState<boolean>(false);
    const { putDescription, clearDescription, setDescriptionState, descriptionState, descriptionChange } =
        descriptionApi();
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setOpened(true)
        setCanChange(true)
        descriptionChange(e)
    };
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        createFile({
            file: e.target.files ? e.target.files[0] : "",
            application: oneRequest.id,
        });
    };

    const saveFunc = () => {
        if (canChange) {
            setOpened(false);
            setCanChange(false)
            putDescription(oneRequest.id);
        }
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
            <div className={styles.Main}>
                <div className={styles.Text}>
                    <div className={styles.Buttons}>
                        <FolderAdd
                            cursor={"pointer"}
                            size={28}
                            color="#5C5C5C"
                        />
                        <input
                            className={styles.FileInput}
                            type="file"
                            name="files"
                            onChange={handleFileChange}
                        />
                        <CustomMoreSquare>
                            <button onClick={() => setOpened(true)}>Редактировать</button>
                            <button onClick={() => clearDescription(oneRequest.id)}>Очистить всё</button>
                        </CustomMoreSquare>
                    </div>
                    <textarea
                        rows={descriptionState.description !== null || undefined ? Math.ceil(descriptionState.description.length / 74) : 1}
                        value={descriptionState.description !== null || undefined ? descriptionState.description : ""}
                        placeholder="Добавьте описание..."
                        onChange={handleChange}
                    />
                </div>
                <FilesList />
            </div>
            {opened && (
                <div className={styles.Buttons}>
                    <CustomButton
                        variant="Without"
                        width={120}
                        text="Отмена"
                        onClick={() => setOpened(false)}
                    />
                    <CustomButton
                        variant={canChange ? "Primary" : "Gray"}
                        width={130}
                        text="Сохранить"
                        onClick={saveFunc}
                    />
                </div>
            )}
        </div>
    );
};
