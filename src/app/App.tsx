import { Route, Routes } from "react-router-dom";
import Authorization from "../pages/Authorization/Authorization";
import ClientPage from "../pages/ClientPage/ClientPage";
import ManagerPage from "../pages/Manager/ManagerPage";
import ManagerCreate from "../pages/Manager/ManagerCreate";
import AdminPage from "../pages/Admin/AdminPage/AdminPage";
import CreateItem from "../pages/Admin/CreateItem/CreateItem";
import CreateCompany from "../pages/Admin/CreateCompany/CreateCompany";
import CreateUser from "../pages/Admin/CreateUser/CreateUser";
import CreatePosition from "../pages/Admin/CreatePosition/CreatePosition";
import Companies from "../pages/Admin/Companies/Companies";
import Users from "../pages/Admin/Users/Users";
import Positions from "../pages/Admin/Positions/Positions";
import Roles from "../pages/Admin/Roles/Roles";

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
            path="/managercreate"
            element={<ManagerCreate />}
         />
         <Route
            path="/adminpage"
            element={<AdminPage />}
         />
         <Route
            path="/createitem"
            element={<CreateItem />}
         />
         <Route
            path="/createcompany"
            element={<CreateCompany />}
         />
         <Route
            path="/createuser"
            element={<CreateUser />}
         />
         <Route
            path="/createposition"
            element={<CreatePosition />}
         />
         <Route
            path="/companies"
            element={<Companies />}
         />
         <Route
            path="/users"
            element={<Users />}
         />
         <Route
            path="/positions"
            element={<Positions />}
         />
         <Route
            path="/roles"
            element={<Roles />}
         />
         <Route
            path="*"
            element={<h1 style={{ marginTop: "100px" }}>Sorry Not Found!</h1>}
         />
      </Routes>
   );
};

export default App;
