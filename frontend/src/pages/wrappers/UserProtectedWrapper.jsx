import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../../context/UserContext";
import { Outlet, useNavigate } from "react-router";
import axios from "axios";

const UserProtectedWrapper = () => {
    const { user, setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem("user-token");

    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
                headers: { Authorization: token },
            })
            .then((res) => {
                if (res.status === 200) {
                    setUser(res.data);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
                localStorage.removeItem("user-token");
                navigate("/login");
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{<Outlet />}</>;
};

export default UserProtectedWrapper;
