import { ReactNode } from "react";
import styles from "./Contact.module.scss";

interface IContact {
    items: { msg: string, cnt: string, icon: ReactNode 
};
}

const Contact: React.FC<IContact> = ({ items }) => {
    return (
        <div className={styles.Contact}>
            {items.icon}
            <p>
                {items.msg} <span>{items.cnt}</span>
            </p>
        </div>
    );
};

export default Contact;
