import React from "react";
import { Route, Routes } from "react-router";
import UserLogin from "./pages/user/UserLogin";
import UserSignUp from "./pages/user/UserSignUp";
import CaptainLogin from "./pages/captain/CaptainLogin";
import CaptainSignup from "./pages/captain/CaptainSignup";
import Start from "./pages/Start";
import Home from "./pages/user/Home";
import UserProtectedWrapper from "./pages/wrappers/UserProtectedWrapper";
import Logout from "./pages/user/Logout";
import CaptainProtectedWrapper from "./pages/wrappers/CaptainProtectedWrapper";
import Captain from "./pages/captain/Captain";
import CaptainLogout from "./pages/captain/CaptainLogout";
import AuthPagesWrapper from "./pages/wrappers/AuthPagesWrapper";
import Riding from "./pages/user/Riding";
import CaptainRiding from "./pages/captain/CaptainRiding";

const App = () => {
    return (
        <>
            <Routes>
                <Route element={<AuthPagesWrapper />}>
                    <Route path="/" element={<Start />} />
                    <Route path="/login" element={<UserLogin />} />
                    <Route path="/signup" element={<UserSignUp />} />
                    <Route path="/captain-login" element={<CaptainLogin />} />
                    <Route path="/captain-signup" element={<CaptainSignup />} />
                </Route>

                <Route element={<UserProtectedWrapper />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/riding" element={<Riding />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>

                <Route element={<CaptainProtectedWrapper />}>
                    <Route path="/captain" element={<Captain />} />
                    <Route path="/captain-riding" element={<CaptainRiding />} />
                    <Route path="/captain-logout" element={<CaptainLogout />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
