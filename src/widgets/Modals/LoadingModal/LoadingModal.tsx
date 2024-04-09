import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./LoadingModal.module.scss";
import { FC } from "react";

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
