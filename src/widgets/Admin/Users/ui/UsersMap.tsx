import { FC } from "react";
import { IUsersProps } from "../models/types";
import { RequestInner } from "../../../../entities";
import styles from "./UsersMap.module.scss";

export const UsersMap: FC<IUsersProps> = (props) => {
    const { name, login, password, position, role, companies } = props;
    return (
        <div className={styles.UsersMap}>
            <RequestInner content={name} />
            <RequestInner content={login} />
            <RequestInner content={password} />
            <RequestInner content={position} />
            <RequestInner content={role} />
            <RequestInner content={companies} />
        </div>
    );
};
