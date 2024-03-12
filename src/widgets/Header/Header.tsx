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

export const Header: FC<IHeaderProps> = ({ reportModalOpenFunc }) => {
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
            </div>
        </div>
    );
};
