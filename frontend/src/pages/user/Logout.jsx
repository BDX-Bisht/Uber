import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
    const token = localStorage.getItem("user-token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }

        axios
            .get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                headers: {
                    Authorization: token,
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    localStorage.removeItem("user-token");
                    navigate("/login");
                }
            });
    }, [token]);

    return <div></div>;
};

export default Logout;
