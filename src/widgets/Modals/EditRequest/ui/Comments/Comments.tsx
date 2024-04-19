import { ChangeEvent, FC } from "react";
import { CustomTextArea } from "../../../../../shared/ui";
import { idRoles } from "../../../../../pages/MainPage/api/idRoles";

export const Comments: FC<{ onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }> = ({ onChange }) => {
    const roles = idRoles();
    const role_type = localStorage.getItem("role_type");

    const render = () => {
        if (roles.formatedState && role_type === "client" && roles.formatedState.client_can_edit_comments_extra) {
            return (
                <CustomTextArea
                    name="text"
                    placeholder="Напишите..."
                    height={100}
                    width={580}
                    variant="TextArea"
                    change={onChange}
                />
            );
        } else if (role_type === "manager" || role_type === "") {
            return (
                <CustomTextArea
                    name="text"
                    placeholder="Напишите..."
                    height={100}
                    width={580}
                    variant="TextArea"
                    change={onChange}
                />
            );
        } else {
            return (
                <p style={{ fontSize: "20px", color: "red" }}>У вас нет таких прав, обратитесь к администратору! </p>
            );
        }
    };

    return <>{render()}</>;
};
