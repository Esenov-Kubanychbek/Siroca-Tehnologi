import { Route, Routes } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import ClientPage from "./pages/ClientPage/ClientPage";
import CreateRequestPage from "./pages/CreatRequestPage/CreateRequestPage";

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
            path="/createRequestPage"
            element={<CreateRequestPage/>}
         />
      </Routes>
   );
};

export default App;
