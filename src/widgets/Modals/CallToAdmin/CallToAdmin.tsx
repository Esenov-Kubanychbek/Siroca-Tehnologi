import { Call, CloseSquare, Sms, Whatsapp } from "iconsax-react";
import styles from "./CallToAdmin.module.scss";
import Contact from "./ui/Contact";
import { useCallToAdmin } from "../../../shared/hooks/modalHooks";
import { FC } from "react";

interface ContactItem {
    icon: JSX.Element;
    msg: string;
    cnt: string;
}

export const CallToAdmin: FC = () => {
    const items: Record<string, ContactItem> = {
        whatsapp: {
            icon: (
                <Whatsapp
                    size={34}
                    variant="Bold"
                    color="#717171"
                />
            ),
            msg: "WhatsApp:",
            cnt: " wa.me/996555444666",
        },
        gmail: {
            icon: (
                <Sms
                    size={34}
                    variant="Bold"
                    color="#717171"
                />
            ),
            msg: "Электронная почта: ",
            cnt: "siroca.@gmail.com",
        },
        phone: {
            icon: (
                <Call
                    size={34}
                    variant="Bold"
                    color="#717171"
                />
            ),
            msg: "Телефон для справок: ",
            cnt: "9965556667777",
        },
    };
    const modal = useCallToAdmin();
    return (
        <div className={styles.CallToAdmin}>
            <div className={styles.header}>
                <div className={styles.tpg}>
                    <p className={styles.prgTp}>Возникли проблемы со входом?</p>
                    <p className={styles.prgBt}>Обратитесь к Администратору!</p>
                </div>
                <CloseSquare
                    cursor={"pointer"}
                    size={34}
                    onClick={modal.close}
                />
            </div>
            <div className={styles.Contacts}>
                <p className={styles.contPrg}>Контакты:</p>
                {Object.values(items).map((contact, index) => (
                    <Contact key={index} items={contact} />
                ))}
            </div>
        </div>
    );
};
