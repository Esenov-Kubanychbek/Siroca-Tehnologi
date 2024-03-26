import { AddSquare, CloseSquare } from "iconsax-react";
import styles from "./ViewCompany.module.scss";
import { CustomButton, CustomInput, CustomSelect } from "../../../shared/ui";
import { useViewCompany } from "../../../shared/hooks/useViewCompany";
import { axiosApi } from "../../../axiosApi";
import axios from "axios";
import { useEffect } from "react";
import { useToken } from "../../../shared/hooks/tokenHook/useToken";

export const ViewCompany = () => {
    const data: string[] = ["Abu", "Aman", "Kuba", "Daler"];
    const modal = useViewCompany();

    return (
        <div className={styles.CreateCompany}>
            <div className={styles.blockOne}>
                <div>Просмотр компании</div>
                <CloseSquare
                    cursor={"pointer"}
                    size={32}
                    onClick={modal.close}
                />
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="">Название компании</label>
                    <CustomInput
                        placeholder=""
                        value="Оптима банк"
                        width={272}
                    />
                </div>
                <div>
                    <label htmlFor="">Страна</label>
                    <CustomInput
                        placeholder=""
                        value="Кыргызстан"
                        width={272}
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="">Краткий код</label>
                    <CustomInput
                        placeholder=""
                        value="АBC138030"
                        width={272}
                    />
                </div>
                <div>
                    <label htmlFor="">Домен</label>
                    <CustomInput
                        placeholder=""
                        value="@optima"
                        width={272}
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="sel">Список пользавателей</label>
                    <br />
                    <CustomSelect
                        name="users"
                        placeholder="Выбрать"
                        dataOption={data}
                        width={600}
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <p
                        className={styles.Label}
                        style={{ marginTop: "23px" }}
                    >
                        Количество пользавателей
                    </p>
                    <CustomInput
                        placeholder=""
                        value="Оптима банк"
                        width={272}
                    />
                </div>
                <div>
                    <p
                        className={styles.Label}
                        style={{ width: "200px", marginLeft: "40px" }}
                    >
                        Создать/Привязать пользавателя
                    </p>
                    <button className={styles.AddUser}>
                        Добавить польз. <AddSquare />
                    </button>
                </div>
            </div>
            <div className={styles.buttons}>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Without"
                        width={150}
                        text="Сбросить"
                    />
                </div>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Primary"
                        width={150}
                        text="Сохранить"
                    />
                </div>
            </div>
        </div>
    );
};
