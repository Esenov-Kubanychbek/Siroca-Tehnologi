import { FC } from "react";
import styles from "./Details.module.scss";
import { DropDown } from "./DropDown";
import { CustomInput } from "../../../../shared/ui";

import { Button, Dropdown, MenuProps } from "antd";

export const Details: FC = () => {
    const items: MenuProps["items"] = [
        {
            key: "1",
            label: "Высокая",
        },
        {
            key: "2",
            label: "Средняя",
        },
        {
            key: "3",
            label: "Минимальная",
        },
    ];
    return (
        <div className={styles.Details}>
            <DropDown text="Детали заявки:" />
            <div className={styles.Name}>
                <div className={styles.Text}>Название заявки:</div>
                <CustomInput
                    width={300}
                    height={44}
                    placeholder="Напишите"
                />
            </div>
            <div className={styles.Name}>
                <div className={styles.Text}>Название компании:</div>
                <CustomInput
                    width={300}
                    height={44}
                    placeholder="Напишите"
                />
            </div>
            <div className={styles.StatusRequest}>
                <div className={styles.Text}>Приоритетность:</div>
                <Dropdown
                    menu={{ items }}
                    placement="bottomLeft"
                >
                    <Button>Выберите</Button>
                </Dropdown>
            </div>
            <div className={styles.StatusRequest}>
                <div className={styles.Text}>Статус заявки:</div>
                <Dropdown
                    menu={{ items }}
                    placement="bottomLeft"
                >
                    <Button>Выберите</Button>
                </Dropdown>
            </div>
        </div>
    );
};
