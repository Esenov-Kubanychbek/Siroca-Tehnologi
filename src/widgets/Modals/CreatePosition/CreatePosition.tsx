import { CloseSquare } from "iconsax-react";
import styles from "./CreatePosition.module.scss";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { ConfigProvider, Modal } from "antd";
import { LoadingModal } from "../..";
import { useLoading, usePosition } from "../../../shared/hooks";

export const CreatePosition = () => {
    const modal = usePosition();
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
                    width={560}
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
                    width={180}
                    centered
                    open={modalLoading.isOpen}
                    onCancel={modalLoading.close}
                    zIndex={100}
                >
                    <LoadingModal />
                </Modal>
            </ConfigProvider>
        </div>
    );
};
