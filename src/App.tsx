import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import MainPage from "./pages/MainPage/MainPage";
import Profile from "./pages/Profile/Profile";


const App = () => {
  return (
    <Routes>
      <Route
        path="/registration"
        element={<Registration />}
      />
      <Route
        path="/"
        element={<MainPage />}
      />
      <Route
        path="/profile"
        element={<Profile/>}
      />
    </Routes>
  )
}

export default App
