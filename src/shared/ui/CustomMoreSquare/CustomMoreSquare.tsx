import { FC, ReactNode, useState } from "react";
import styles from "./CustomMoreSquare.module.scss";
import { Popover } from "antd";
import { MoreSquare } from "iconsax-react";

export const CustomMoreSquare: FC<{ children: ReactNode }> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };
    return (
        <Popover
            placement="bottomRight"
            content={<div className={styles.MoreButtons}>{children}</div>}
            onOpenChange={handleOpenChange}
            trigger={"click"}
            open={open}
            zIndex={5}
        >
            <MoreSquare
                cursor={"pointer"}
                variant="Bulk"
                color="#929292"
                size={34}
            />
        </Popover>
    );
};
