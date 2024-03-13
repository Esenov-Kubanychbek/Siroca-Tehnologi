import { Route, Routes } from "react-router-dom";
import { Authorization, ClientPage, ManagerPage, AdminPage, WorkPage } from "../pages";
import CallToAdmin from "../widgets/CallToAdmin/CallToAdmin";

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
                path="*"
                element={<h1 style={{ marginTop: "100px" }}>Sorry Not Found!</h1>}
            />
        </Routes>
    );
};

export default App;
