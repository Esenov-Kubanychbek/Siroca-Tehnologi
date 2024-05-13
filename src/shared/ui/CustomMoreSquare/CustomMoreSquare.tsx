import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import styles from "./CustomMoreSquare.module.scss";
import { Popover } from "antd";
import { MoreSquare } from "iconsax-react";

interface ICustomMoreSquare {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    children: ReactNode
}

export const CustomMoreSquare: FC<ICustomMoreSquare> = (props) => {
    const {open, setOpen, children} = props
    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
    }
    return (
        <Popover
            placement="bottomRight"
            content={
                <div className={styles.MoreButtons}>
                    {children}
                </div>
            }
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
