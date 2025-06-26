import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPanel from "./Pages/UserPanel";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { UserProvider } from "./UserContext";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <UserPanel />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
