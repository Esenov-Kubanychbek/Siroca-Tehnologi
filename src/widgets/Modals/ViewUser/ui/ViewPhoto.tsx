import { GalleryAdd } from "iconsax-react";
import styles from "./ViewPhoto.module.scss";
import { usersApi } from "../../../Admin/Users/api/usersApi";

export const ViewPhoto = () => {
    const fetchData = usersApi();
    return (
        <div>
            <div className={styles.ViewPhoto}>
                <GalleryAdd
                    size={50}
                    color="#252525"
                />
                <div className={styles.Text2}>Добавьте фотографию пользователя</div>
                <img
                    src={fetchData.oneUserGet.image}
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
        </div>
    );
};
