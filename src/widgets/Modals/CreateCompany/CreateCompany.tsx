import { CloseSquare } from "iconsax-react";
import styles from "./CreateCompany.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { CustomSelect } from "./ui/CustomSelect";
import { useCompany } from "../../../shared/hooks";

export const CreateCompany = () => {
    const data: string[] = ["Abu", "Aman", "Kuba", "Daler"];
    const modal = useCompany();
    return (
        <div className={styles.CreateCompany}>
            <div className={styles.blockOne}>
                <div>Создание компании</div>
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
                        placeholder="Напишите..."
                        width={272}
                    />
                </div>
                <div>
                    <label htmlFor="">Страна</label>
                    <CustomInput
                        placeholder="Напишите..."
                        width={272}
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="">Краткий код</label>
                    <CustomInput
                        placeholder="Ввести код "
                        width={272}
                    />
                </div>
                <div>
                    <label htmlFor="">Домен</label>
                    <CustomInput
                        placeholder="Напишите..."
                        width={272}
                    />
                </div>
            </div>
            <div className={styles.blockTwo}>
                <div>
                    <label htmlFor="sel">Ответственный менеджер</label>
                    <br />
                    <CustomSelect
                        name="sel"
                        placeholder="Выбрать"
                        dataOption={data}
                    />
                </div>
            </div>
            <div className={styles.buttons}>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Without"
                        width={150}
                        text="Отменить"
                    />
                </div>
                <div onClick={modal.close}>
                    <CustomButton
                        variant="Primary"
                        width={150}
                        text="Создать"
                    />
                </div>
            </div>
        </div>
    );
};
