import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FC } from "react";
import styles from "./LoadingModal.module.scss";

export const LoadingModal: FC = () => {
    return (
        <div className={styles.LoadingModal}>
            <Spin
                size="large"
                indicator={
                    <LoadingOutlined
                        width={200}
                        height={200}
                    />
                }
            />
        </div>
    );
};
