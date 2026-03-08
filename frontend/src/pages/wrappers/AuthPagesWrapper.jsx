import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const AuthPagesWrapper = () => {
    const userToken = localStorage.getItem("user-token");
    const captainToken = localStorage.getItem("captain-token");

    const navigate = useNavigate();

    useEffect(() => {
        if (userToken) {
            navigate("/home");
        }
        if (captainToken) {
            navigate("/captain");
        }
    }, [userToken, captainToken]);

    return (
        <>
            <Outlet />
        </>
    );
};

export default AuthPagesWrapper;
