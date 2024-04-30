import { GalleryAdd } from "iconsax-react";
import styles from "./EditPhoto.module.scss";
import { usersApi } from "../../../Admin/Users/api/usersApi";
import { FC } from "react";

export const EditPhoto: FC = () => {
    const fetchData = usersApi();
    return (
        <div className={styles.EditPhoto}>
            <GalleryAdd
                size={50}
                color="#252525"
            />
            <p>Добавьте фотографию пользователя</p>
            <img
                src={String(fetchData.oneUserGet.image)}
                className={styles.Image}
                alt="image"
            />
            <input
                name="image"
                className={styles.Input}
                type="file"
                accept="image/*"
            />
        </div>
    );
};
