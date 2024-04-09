import { Modal } from "antd";
import { FC, ReactNode, useState } from "react";

interface IModal {
    children: ReactNode;
    width: number;
    zIndex: number;
}

export const CustomModal: FC<IModal> = (props) => {
    const { children, width, zIndex } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <Modal
            centered
            zIndex={zIndex}
            width={width}
            open={isOpen}
            onCancel={() => setIsOpen(false)}
        >
            {children}
        </Modal>
    );
};
