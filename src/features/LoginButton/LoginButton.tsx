import styles from "./LoginButton.module.scss";
import { Login } from "iconsax-react";
import { Modal } from "antd";
import { ReadyModal } from "../../widgets";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginButton: FC<{ variant: "Primary" | "Secondary" }> = ({ variant }) => {
    const navigate = useNavigate()
    const [modal, setModal] = useState<boolean>(false)
    const exitFunc = () => {
        setModal(false)
        navigate("/")
    }
    return (
        <>
            <button
                onClick={()=> setModal(true)}
                className={styles[variant]}
                aria-label="login"
            >
                <Login />
            </button>
            <Modal
                width={550}
                centered
                open={modal}
                onCancel={()=> setModal(false)}
            >
                <ReadyModal content="Вы уверены?" no={()=> setModal(false)} yes={exitFunc}/>
            </Modal>
        </>
    );
};
