import { GalleryAdd } from "iconsax-react";
import styles from "./AddImage.module.scss";
import { ChangeEvent, FC } from "react";

interface IAddImage {
    added: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AddImage: FC<IAddImage> = (props) => {
    const {added, onChange} = props
    return (
        <div className={styles.AddImage} style={{border: added ? "none" : "1px solid red"}}>
            <GalleryAdd
                size={50}
                color="#252525"
            />
            <p>Добавьте фотографию пользователя</p>
            <input
                name="image"
                onChange={onChange}
                className={styles.Input}
                type="file"
                accept="image/*"
            />
        </div>
    );
};
