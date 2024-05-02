import { GalleryAdd } from "iconsax-react";
import styles from "./AddImage.module.scss";
import { ChangeEvent, FC, useState } from "react";

interface IAddImage {
    added: boolean | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AddImage: FC<IAddImage> = (props) => {
    const { added, onChange } = props;
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageUrl(imageUrl);
            onChange(e);
        }
    };
    return (
        <div
            className={styles.AddImage}
            style={{ border: added ? "none" : "1px solid red" }}
        >
            <GalleryAdd
                size={50}
                color="#252525"
            />
            <p>Добавьте фотографию пользователя</p>
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="ChosenImage"
                />
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
