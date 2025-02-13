import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthorizationPage, WorkPage, RolesSettingsPage, MainPage } from "@/pages";
import { PATHS } from "@/shared/variables/variables";

export const App: FC = () => {
    return (
        <Routes>
            <Route
                path={PATHS.auth}
                element={<AuthorizationPage />}
            />
            <Route
                path={PATHS.main}
                element={<MainPage />}
            />
            <Route
                path={PATHS.work}
                element={<WorkPage />}
            />
            <Route
                path={PATHS.rolessettings}
                element={<RolesSettingsPage />}
            />
            <Route
                path="*"
                element={<h1 style={{ marginTop: "100px" }}>Sorry Not Found!</h1>}
            />
        </Routes>
    );
};
