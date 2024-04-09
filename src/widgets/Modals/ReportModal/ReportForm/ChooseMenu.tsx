import React, { FC } from "react";
import styles from "./report.module.scss";

interface Props {
    itemsData: string[]; // типизируем itemsData как массив строк
    upChoose: (choosed: { choosedItem: string; input: string }) => void; // функция upChoose принимает объект с определенными свойствами
    inputId: string;
}

const ChooseMenu: FC<Props> = ({ itemsData, upChoose, inputId }) => {
    const onChoos = (ev: React.MouseEvent<HTMLParagraphElement>) => {
        const choosed = {
            choosedItem: ev.currentTarget.id,
            input: inputId,
        };

        upChoose(choosed);
    };

    const maping = itemsData.map((el) => (
        <p
            key={el} // добавляем ключ для каждого элемента списка
            id={el}
            onClick={onChoos}
        >
            {el}
        </p>
    ));

    return <div className={styles.ChooseMenu}>{maping}</div>;
};

export default ChooseMenu;
