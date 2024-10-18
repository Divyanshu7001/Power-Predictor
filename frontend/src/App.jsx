import React, { useContext, useEffect } from "react";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Context } from "./main";
import axios from "axios";
import Home from "./components/pages/home/Home";
import Footer from "./components/layout/Footer";
import Login from "./components/pages/register/Login";
import Register from "./components/pages/register/Register";
import Options from "./components/pages/dashboard/options/Options";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Chat from "./components/pages/dashboard/chat/Tip";
import Prediction from "./components/pages/dashboard/analytics/Prediction";
import Analytics from "./components/pages/dashboard/analytics/Analytics";
import PasswordReset from "./components/pages/dashboard/options/PasswordReset";
import ProfileSetting from "./components/pages/dashboard/options/ProfileSetting";
import ScrollToTop from "./components/utils/ScrollToTop";

function AppWrapper() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/options" element={<Options />}>
          <Route path="security" element={<PasswordReset />} />
          <Route path="profile" element={<ProfileSetting />} />
        </Route>
        <Route path="/dashboard/tips" element={<Chat />} />
        <Route path="/dashboard/predictions" element={<Prediction />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
      </Routes>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default function App() {
  const { setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_USER_URI}/getUser`,
          { withCredentials: true }
        );

        if (response.data.user) {
          setIsAuthenticated(true);
          setUser(response.data.user);
          localStorage.setItem("user", JSON.stringify(response.data.user));
        } else {
          setIsAuthenticated(false);
          setUser({});
          console.log("User is not authenticated");
        }
      } catch (error) {
        console.error(
          "Error fetching user:",
          error.response?.data || error.message
        );
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [setIsAuthenticated, setUser]);
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
