import styles from "./Header.module.scss";
import { StatusNumber, ProfileButton, NotifButton, TimeFilter, SearchInput, FilterButton } from "../../features";
import { FC } from "react";
import { Login } from "iconsax-react";
import { NavLink } from "react-router-dom";

export const Header: FC<{ role: string }> = ({ role }) => {
    return (
        <div style={role === "admin" ? { width: "1764px" } : { width: "1820px" }}>
            <div className={styles.HeaderTop}>
                <div
                    className={styles.HeaderTopInner}
                    style={{ width: role === "admin" ? "1716px" : "1790px" }}
                >
                    <div className={styles.HeaderLogo}>
                        {role === "admin" ? null : <img src="/Logo.svg" />}
                        <StatusNumber />
                    </div>
                    <div className={styles.DataProfile}>
                        <NotifButton />
                        <ProfileButton />
                        {role === "admin" ? null : (
                            <div className={styles.Login}>
                                <NavLink to="/">
                                    <Login
                                        size={24}
                                        color="white"
                                    />
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.HeaderBottom}>
                <TimeFilter role={role} />
                <div className={styles.BottomRight}>
                    <SearchInput />
                    <div className={styles.SecondRight}>
                        <FilterButton />
                        {role === "client" ? null : <div style={{ width: "208px" }}>CreateRequest</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};
