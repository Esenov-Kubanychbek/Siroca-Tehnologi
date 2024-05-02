import { FC, FormEvent, useState } from "react";
import styles from "./CreateRequest.module.scss";
import { createRequestApi } from "./api/createRequestApi";
import { CloseSquare, InfoCircle, TickCircle } from "iconsax-react";
import { CustomButton, CustomInput } from "../../../shared/ui";
import { Modal } from "antd";
import { EditRequest } from "../..";
import { IAddedCreateRequest, ICreateRequestModal } from "./types/types";
import { idRoles } from "../../../pages/MainPage/api/idRoles";
import { useDataStoreComponies } from "../../Admin/Companies/api/componiesApi";

export const CreateRequest: FC<ICreateRequestModal> = (props) => {
    const { setModal } = props;
    const [editModal, setEditModal] = useState<boolean>(false);
    const { oneRequest, createRequest, resetOneRequest, createRequestChange } = createRequestApi();
    const { data } = useDataStoreComponies();
    const roles = idRoles();
    const fmRoles = roles.formatedState;
    const [added, setAdded] = useState<IAddedCreateRequest>({
        title: true,
        company: true,
    });
    const hasCompany = data.some((company) => {
        return oneRequest.company === company.name;
    });
    const cancelFunc = () => {
        setEditModal(false)
        resetOneRequest()
    }
    const postTrim = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedAdded: IAddedCreateRequest = { ...added };
        Object.keys(oneRequest).forEach((key) => {
            updatedAdded[key] = oneRequest[key] !== "";
        });
        console.log(added);
        setAdded(updatedAdded);
        if (oneRequest.title !== "" && oneRequest.company !== "" && hasCompany) {
            createRequest();
            setModal(false);
            if (
                (fmRoles &&
                    localStorage.getItem("role_type") === "client" &&
                    fmRoles.client_can_edit_application_extra) ||
                localStorage.getItem("role_type") === "manager" ||
                localStorage.getItem("role_type") === ""
            ) {
                setEditModal(true);
            } else {
                return;
            }
        } else {
            console.log("postTrimError");
        }
    };
    return (
        <>
            <form
                className={styles.CreateRequest}
                onSubmit={postTrim}
            >
                <div className={styles.Top}>
                    <div className={styles.TextTop}>Создание заявки</div>
                    <CloseSquare
                        cursor={"pointer"}
                        onClick={() => setModal(false)}
                        size={34}
                    />
                </div>
                <div className={styles.Input}>
                    Название заявки:
                    <CustomInput
                        trim={added.title}
                        placeholder="Напишите..."
                        width={400}
                        name="title"
                        value={oneRequest.title}
                        change={createRequestChange}
                    />
                </div>
                <div className={styles.Input}>
                    Название компании:
                    <div className={styles.Company}>
                        <input
                            type="text"
                            name="company"
                            value={oneRequest.company}
                            style={{
                                border:
                                    hasCompany || added.company
                                        ? hasCompany
                                            ? "2px solid #00A91B"
                                            : "none"
                                        : "2px solid #E51616",
                            }}
                            placeholder="Напишите..."
                            onChange={createRequestChange}
                        />
                        {hasCompany || oneRequest.company === "" ? (
                            hasCompany ? (
                                <TickCircle color="#00A91B" />
                            ) : null
                        ) : (
                            <InfoCircle color="#E51616" />
                        )}
                    </div>
                    {hasCompany || oneRequest.company === "" ? null : (
                        <p className={styles.NotExist}>
                            Компании с таким названием не существует! Повторите попытку, или создайте новую компанию.
                        </p>
                    )}
                </div>
                {(added.title && added.company) ? null : (
                    <div className={styles.MustTrim}>
                        <p>Все поля должны быть обязательно заполнены*</p>
                    </div>
                )}
                <div className={styles.Buttons}>
                    <CustomButton
                        type="button"
                        onClick={() => setModal(false)}
                        variant="Without"
                        width={150}
                        text="Отменить"
                    />
                    <CustomButton
                        type="submit"
                        variant="Primary"
                        width={150}
                        text="Создать"
                    />
                </div>
            </form>
            <Modal
                width={732}
                centered
                open={editModal}
                onCancel={cancelFunc}
            >
                <EditRequest
                    setModal={setEditModal}
                    requestFrom="CreateRequest"
                />
            </Modal>
        </>
    );
};
