import { Route, Routes } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import ClientPage from "./pages/ClientPage/ClientPage";
import CreateRequestPage from "./pages/CreatRequestPage/CreateRequestPage";
import Notification from "./pages/Notification/Notification";

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
            path="/notification"
            element={<Notification/>}
         />
         <Route
            path="/requestpage"
            element={<CreateRequestPage/>}
         />
      </Routes>
   );
};

export default App;
