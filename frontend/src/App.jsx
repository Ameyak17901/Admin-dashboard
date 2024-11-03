import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/DashBoard";
import EditForm from "./components/EditForm";
import AppLayout from "./components/AppLayout";
import AuthProvider from "./authentication/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import AddUserForm from "./components/AddUserForm";
import SignUpForm from "./components/SignUpForm";
// import UserProvider from "./contexts/UserProvider";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<AppLayout />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/user/:id"
                element={
                  <div className="d-flex flex-column w-100 gap-5">
                    <NavBar />
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <EditForm />
                    </div>
                  </div>
                }
              />
              <Route
                path="/profile"
                element={
                  <div className="d-flex flex-column w-100">
                    <NavBar />
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <Profile />
                    </div>
                  </div>
                }
              />
              <Route
                path="/user"
                element={
                  <div className="d-flex flex-column w-100 h-100">
                    <NavBar />
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <AddUserForm />
                    </div>
                  </div>
                }
              />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
