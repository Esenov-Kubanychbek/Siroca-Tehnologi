import { FC } from "react";
import styles from "./CustomErrorCircle.module.scss";
import { ICustomErrorCircle } from "./types/CustomErrorCircleTypes";
import { Popover } from "antd";
import { InfoCircle } from "iconsax-react";

export const CustomErrorCircle: FC<ICustomErrorCircle> = (props) => {
    const { exist, text, className } = props;
    return (
        exist === false && (
            <Popover
                placement="top"
                trigger="click"
                content={<div className={styles.Text}>{text}</div>}
            >
                <InfoCircle
                    color="#E51616"
                    className={className}
                />
            </Popover>
        )
    );
};
