import { GalleryAdd } from "iconsax-react";
import styles from "./AddPhoto.module.scss";
import { ChangeEvent, FC } from "react";

interface IAddPhoto{
    downLoad: (e: ChangeEvent<HTMLInputElement>) => void
}

export const AddPhoto: FC<IAddPhoto> = ({downLoad}) => {
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
                    onChange={downLoad}
                    className={styles.Input}
                    type="file"
                    accept="image/*"
                />
            </div>
        </div>
    );
};
