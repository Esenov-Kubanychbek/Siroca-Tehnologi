import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const LoadingModal = () => {
    return (
        <div
            style={{
                width: "130px",
                height: "130px",
                border: "2px solid #1c6ab1",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
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
