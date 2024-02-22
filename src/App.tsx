import { Route, Routes } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import ClientPage from "./pages/ClientPage/ClientPage";

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
      </Routes>
   );
};

export default App;
