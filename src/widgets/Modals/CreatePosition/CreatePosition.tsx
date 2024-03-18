import { CloseSquare } from "iconsax-react";
import styles from "./CreatePosition.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import positionModal from "./model/PositionModal";
import useLoading from "../LoadingModal/useLoading";
import { ConfigProvider, Modal } from "antd";
import { LoadingModal } from "../..";

export const CreatePosition = () => {
    const modal = positionModal();
    const modalLoading = useLoading();
    return (
        <div className={styles.CreatePosition}>
            <div className={styles.Header}>
                <div className={styles.Word}>Добавить должность</div>
                <div
                    onClick={modal.close}
                    style={{ cursor: "pointer" }}
                >
                    <CloseSquare size={34} />
                </div>
            </div>
            <div>
                <CustomInput
                    placeholder="Напишите..."
                    width={535}
                />
            </div>
            <div className={styles.Buttons}>
                <div
                    onClick={modal.close}
                    style={{ cursor: "pointer" }}
                >
                    <CustomButton
                        variant="Secondary"
                        width={150}
                        text="Отменить"
                    />
                </div>
                <div
                    onClick={modalLoading.open}
                    style={{ cursor: "pointer" }}
                >
                    <CustomButton
                        variant="Primary"
                        width={150}
                        text="Создать"
                    />
                </div>
            </div>
            <ConfigProvider
                theme={{
                    components: {
                        Modal: {
                            borderRadius: 100,
                        },
                        Spin: {
                            colorPrimary: "#1c6ab1",
                            contentHeight: 900,
                            dotSizeLG: 140,
                        },
                    },
                    token: {
                        borderRadiusLG: 100,
                    },
                }}
            >
                <Modal
                    bodyStyle={{
                        height: "140px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    footer={null}
                    width={180}
                    centered
                    closeIcon={false}
                    open={modalLoading.isOpen}
                    onCancel={modalLoading.close}
                    zIndex={1000}
                >
                    <LoadingModal />
                </Modal>
            </ConfigProvider>
        </div>
    );
};