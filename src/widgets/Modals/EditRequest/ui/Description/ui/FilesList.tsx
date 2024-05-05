import { FC, useEffect, useState } from "react";
import styles from "./FilesList.module.scss";
import xlsx from "../../../../../../shared/assets/excel.svg";
import { filesApi } from "../../../../ViewRequest/api/filesApi";
import { getOneRequestApi } from "../../../../ViewRequest/api/getOneRequestApi";

export const FilesList: FC = () => {
    const { oneRequest } = getOneRequestApi();
    const { setImagesList, setOtherFilesList, imagesList, otherFilesList, findTypeOfFile } = filesApi();
    const [added, setAdded] = useState<boolean>(false);
    useEffect(() => {
        if (oneRequest.files.length > 0 && added === false) {
            const files = oneRequest.files;
            findTypeOfFile(files);
            if(imagesList.length > 0 || otherFilesList.length > 0){
                setAdded(true);
                console.log(imagesList, "images");
                console.log(otherFilesList, "others");
            }
        }else if (oneRequest.files.length > 0 && added) {
            setAdded(false);
            setImagesList([]);
            setOtherFilesList([]);
        }
    }, [oneRequest.files]);
    return (
        <div
            className={styles.FilesList}
            style={{ display: added ? "flex" : "none" }}
        >
            <div className={styles.OtherFiles}>
                {otherFilesList !== undefined || null
                    ? otherFilesList.map((file, i) => (
                          <div
                              key={i}
                              className={styles.OtherFile}
                          >
                              <img
                                  src={xlsx}
                                  alt="image"
                              />
                              <p>{file.file.slice(0, 70)}</p>
                          </div>
                      ))
                    : null}
            </div>
            <div className={styles.Images}>
                {imagesList !== undefined || null
                    ? imagesList.map((image, i) => (
                          <img
                              key={i}
                              src={image.file}
                              alt="image"
                          />
                      ))
                    : null}
            </div>
        </div>
    );
};
