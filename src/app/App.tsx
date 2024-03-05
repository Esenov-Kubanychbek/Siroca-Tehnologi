import { Route, Routes } from "react-router-dom";
import { Authorization } from "../pages/Authorization";
import { ClientPage } from "../pages/ClientPage";
import { ManagerPage, ManagerCreate } from "../pages/Manager";
import {
   AdminPage,
   Companies,
   CreateCompany,
   CreateItem,
   CreatePosition,
   CreateUser,
   Positions,
   Roles,
   Users,
} from "../pages/Admin";

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
