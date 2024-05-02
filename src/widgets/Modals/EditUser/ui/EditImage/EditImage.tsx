import { GalleryAdd } from "iconsax-react";
import styles from "./EditImage.module.scss";
import { ChangeEvent, FC, useState } from "react";
import { IEditImage } from "../../types/types";
import { editUserApi } from "../../api/editUserApi";

export const EditImage: FC<IEditImage> = (props) => {
    const { added, onChange } = props;
    const { editUserState } = editUserApi();
    const [imageUrl, setImageUrl] = useState<string | undefined>(String(editUserState.image));
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageUrl(imageUrl);
            onChange(e);
        }
    };
    return (
        <div className={styles.EditImage} style={{ border: added ? "none" : "1px solid red" }}>
            <GalleryAdd size={50} color="#252525" />
            <p>Добавьте фотографию пользователя</p>
            {imageUrl ? (
                <img src={imageUrl} alt="ChosenImage" />
            ) : (
                <img src={String(editUserState.image)} alt="UserImage" />
            )}
            <input
                name="image"
                onChange={handleImageChange}
                type="file"
                accept="image/*"
            />
        </div>
    );
};
