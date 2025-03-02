import ExpenseWrapper from "./components/ExpenseWrapper";
import Navbar from "./components/Navbar";
import './assets/css/styles.css'
import { Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/login";
import AuthLayout from "./pages/auth/AuthLayout";
import MainLayout from "./pages/MainLayout";

function App() {

  return (
    <>
      <div className="app w-10/12 mx-auto">
        <Routes>
          <Route path="/auth" element={<AuthLayout />} >
            {/* <Route path="/register" element={<h1>Register</h1>} /> */}
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </div>
    </>
  )
}

export default App
