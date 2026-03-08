import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const CaptainLogout = () => {
    const token = localStorage.getItem("captain-token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/captain-login");
            return;
        }

        axios
            .get(`${import.meta.env.VITE_BASE_URL}/captain/logout`, {
                headers: {
                    Authorization: token,
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    localStorage.removeItem("captain-token");
                    navigate("/captain-login");
                }
            });
    }, [token]);

    return <div></div>;
};

export default CaptainLogout;
