import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { CaptainUserContext } from "../../context/CaptainContext";

const CaptainProtectedWrapper = () => {
    const token = localStorage.getItem("captain-token");

    const { captain, setCaptain } = useContext(CaptainUserContext);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/captain-login");
        }
    }, [token]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
                headers: { Authorization: token },
            })
            .then((res) => {
                if (res.status === 200) {
                    setCaptain(res.data);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
                localStorage.removeItem("captain-token");
                navigate("/captain-login");
            });
    }, []);

    if (isLoading) {
        return <>Loading...</>;
    }

    return (
        <>
            <Outlet />
        </>
    );
};

export default CaptainProtectedWrapper;
