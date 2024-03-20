import { Route, Routes } from "react-router-dom";
import { Authorization, ClientPage, ManagerPage, AdminPage, WorkPage } from "../pages";
import { Notification } from "../widgets";
import SuccesModal from "../widgets/Modals/SuccessModal/SuccessModal";
import ReadyModal from "../widgets/Modals/ReadyModal/ReadyModal";
import RolesSettings from "../widgets/Admin/Roles/components/settings/RolesSettings";

const App = () => {
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
                path="/notific"
                element={<Notification />}
            />
            <Route path="/rolesettings" element={<RolesSettings/>}/>
            <Route
                path="*"
                element={<h1 style={{ marginTop: "100px" }}>Sorry Not Found!</h1>}
            />
            <Route
                path="/succes"
                element={<SuccesModal />}
            />
            <Route
                path="/ready"
                element={<ReadyModal />}
            />
        </Routes>
    );
};

export default App;
