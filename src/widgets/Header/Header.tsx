import styles from "./Header.module.scss";
import {
    StatusNumber,
    ProfileButton,
    NotifButton,
    TimeFilter,
    SearchInput,
    FilterButton,
    ReportButton,
} from "../../features";
import { FC } from "react";
import { IHeaderProps } from "./model/types";
import { ButtonRequest } from "../../features/Header/ButtonRequest/ButtonRequest";
import { CreateRequest } from "..";
import RequestModal from "../CreateRequest/model/RequestModal";
import Modal from "antd/es/modal/Modal";

export const Header: FC<IHeaderProps> = ({ reportModalOpenFunc }) => {
    const modal = RequestModal();
    const handleClick = () => {
        reportModalOpenFunc();
    };
    return (
        <div className={styles.Header}>
            <div className={styles.HeaderTop}>
                <StatusNumber />
                <div className={styles.DataProfile}>
                    <NotifButton />
                    <ProfileButton />
                </div>
            </div>
            <div className={styles.HeaderBottom}>
                <TimeFilter />
                <SearchInput />
                <FilterButton />
                <ReportButton click={handleClick} />
                <div onClick={modal.open}>
                    <ButtonRequest />
                </div>
                <Modal
                    bodyStyle={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    footer={null}
                    width={790}
                    centered
                    closeIcon={false}
                    open={modal.isOpen}
                    onCancel={modal.close}
                >
                    <CreateRequest />
                </Modal>
            </div>
        </div>
    );
};
