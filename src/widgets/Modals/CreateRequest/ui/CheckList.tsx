import { FC } from "react";
import styles from "./CheckList.module.scss";
import { CustomInput } from "../../../../shared/ui";
import { CustomButton } from "../../../../shared/ui";
import { Checkbox } from "antd";
import useDisplayStore from "../model/collapse";
import { CustomSelect } from './../../CreateCompany/ui/CustomSelect';

export const CheckList: FC = () => {
    const data: string[] = ["Абдурахман", "Аман","Кубанычбек","Далер"];
    const { display, toggleDisplay } = useDisplayStore();
    return (
        <div className={styles.CheckList}>
            <div className={styles.InputEnter}>
                <div className={styles.InputRelative}>
                    <CustomInput
                        width={570}
                        placeholder="Чек-Лист"
                        height={44}
                        paddingLeft={45}
                    />
                    <div className={styles.CheckAbsolute}
                        onClick={toggleDisplay}
                    >
                        <Checkbox/>
                    </div>
                </div>
                <div style={{
                        display,
                        transition: 'opacity 1s ease-in-out',
                        opacity: display === 'none' ? 0 : 1,
                        }}>
                    <div className={styles.CheckDesc}>
                        <CustomButton 
                            variant="Request" 
                            width={130} 
                            text="Сохранить"/>
                            <CustomSelect 
                                name="sel"
                                text="Назначить..."
                                dataOption={data}
                                width={300}
                            />
                            <input type="date" />
                    </div>
                </div>
                <CustomButton
                    variant="Request"
                    text="Добавить задачу"
                    width={172}
                />
            </div>
        </div>
    );
};
