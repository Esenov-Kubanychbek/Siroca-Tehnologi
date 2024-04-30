import styles from "./AdminPage.module.scss";
import { Dashboard, HeaderBottom, HeaderTop } from "../../widgets";
import { FC, useEffect } from "react";
import { usersApi } from "../../widgets/Admin/Users/api/usersApi";
<<<<<<< HEAD

export const AdminPage: FC = () => {
    const fetchUsers = usersApi();
    const id = localStorage.getItem("id");
    useEffect(() => {
        fetchUsers.getOneUser(Number(id));
    }, []);
=======
import { usersRoleTypeApi } from "../../widgets/Modals/EditRequest/api/usersRoleTypeApi";
import { jobTitleApi } from "../../widgets/Admin/JobTitles/api/jobTitleApi";
import { useDataStoreComponies } from "../../widgets/Admin/Companies/api/componiesApi";

export const AdminPage: FC = () => {
    const id = localStorage.getItem("id");
    const fetchUsers = usersApi();
    const fetchJobTitle = jobTitleApi()
    const fetchCompanies = useDataStoreComponies()
    const fetchRoleTypes = usersRoleTypeApi();
    useEffect(() => {
        fetchUsers.getOneUser(Number(id));
        fetchUsers.getUsersList(1);
        fetchJobTitle.getJobTitleList()
        fetchCompanies.fetchDatas()
    }, []);
    useEffect(() => {
        fetchRoleTypes.setClients(fetchUsers.usersList);
        fetchRoleTypes.setManagers(fetchUsers.usersList);
    }, [fetchUsers.usersList]);
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
    return (
        <div className={styles.AdminPage}>
            <Dashboard />
            <header className={styles.Inner}>
                <HeaderTop role="admin" />
                <HeaderBottom role="admin" />
            </header>
        </div>
    );
};
