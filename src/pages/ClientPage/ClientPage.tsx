import axios from "axios";
import { HeaderBottom, HeaderTop } from "../../widgets";
import styles from "./ClientPage.module.scss";
import { FC, useEffect } from "react";
import { BASE_URL } from "../../shared/variables/variables";

export const ClientPage: FC = () => {
    const getRoles = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/users/userpermissions/${localStorage.getItem("id")}/`, {
                headers:{
                    Authorization: `${localStorage.getItem("access")}`
                }
            })
            console.log(response);
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getRoles()
    }, [])
    return (
        <div className={styles.ClientPage}>
            <HeaderTop role="client" />
            <HeaderBottom role="client" />
        </div>
    );
};
