import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Authorization, ClientPage, ManagerPage, AdminPage, WorkPage, RolesSettingsPage } from "../pages";

export const App: FC = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Authorization />}
            />
            <Route
                path="/clientpage"
                element={<ClientPage />}
            />
            <Route
                path="/managerpage"
                element={<ManagerPage />}
            />
            <Route
                path="/adminpage"
                element={<AdminPage />}
            />
            <Route
                path="/workpage"
                element={<WorkPage />}
            />
            <Route
                path="/rolessettingspage"
                element={<RolesSettingsPage />}
            />
            <Route
                path="*"
                element={<h1 style={{ marginTop: "100px" }}>Sorry Not Found!</h1>}
            />
        </Routes>
    );
};
