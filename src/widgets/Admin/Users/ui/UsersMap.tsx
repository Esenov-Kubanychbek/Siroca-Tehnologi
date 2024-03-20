import { FC } from "react";
import { IUsersProps } from "../models/types";
import { RequestInner } from "../../../../entities";
import styles from "./UsersMap.module.scss";

export const UsersMap: FC<IUsersProps> = (props) => {
    const { name, login, password, position, role, companies } = props;
    return (
        <div className={styles.UsersMap}>
            <RequestInner
                content={name}
                width={250}
            />
            <RequestInner
                content={login}
                width={250}
            />
            <RequestInner
                content={password}
                width={250}
            />
            <RequestInner
                content={position}
                width={340}
            />
            <RequestInner
                content={role}
                width={314}
            />
            <RequestInner
                content={companies}
                width={314}
            />
        </div>
    );
};
