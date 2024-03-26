import { GalleryAdd } from "iconsax-react";
import styles from "./AddPhoto.module.scss";
import { usersApi } from "../../../../shared/api";

export const AddPhoto = () => {
    const fetchData = usersApi();
    return (
        <div>
            <div className={styles.AddPhoto}>
                <GalleryAdd
                    size={50}
                    color="#252525"
                />
                <div className={styles.Text2}>Добавьте фотографию пользователя</div>
                <input
                    name="image"
                    onChange={fetchData.setOneUser}
                    className={styles.Input}
                    type="file"
                    accept="image/*"
                />
            </div>
        </div>
    );
};
