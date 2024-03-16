import { Call, CloseSquare, Sms, Whatsapp } from "iconsax-react";
import styles from "./CallToAdmin.module.scss";
import Contact from "./ui/Contact";

const CallToAdmin = () => {
    const items = {
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
    return (
        <div className={styles.bg}>
            <div className={styles.CallToAdmin}>
                <div className={styles.header}>
                    <div className={styles.tpg}>
                        <p className={styles.prgTp}>Возникли проблемы со входом?</p>
                        <p className={styles.prgBt}>Обратитесь к Администратору!</p>
                    </div>
                    <CloseSquare size={34} />
                </div>
                <div className={styles.Contacts}>
                    <p className={styles.contPrg}>Контакты:</p>
                    <Contact items={items.whatsapp} />
                    <Contact items={items.gmail} />
                    <Contact items={items.phone} />
                </div>
            </div>
        </div>
    );
};

export default CallToAdmin;
