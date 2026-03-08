import React, { useContext, useState } from "react";
import UberLogo from "/uber.png";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { UserDataContext } from "../../context/UserContext";

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { setUser } = useContext(UserDataContext);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const userData = { email, password };

        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/users/login`,
            userData,
        );

        if (response.status == 200) {
            const data = response.data;
            setUser(data.user);
            localStorage.setItem("user-token", data.token);
            navigate("/home");
        }

        setEmail("");
        setPassword("");
    };

    return (
        <div className="p-7 h-screen flex flex-col justify-between gap-4">
            <div>
                <img className="w-40 mb-8" src={UberLogo} alt="" />
                <form onSubmit={handleFormSubmit}>
                    <h3 className="text-base font-medium mb-2">
                        What's your email
                    </h3>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="email@example.com"
                        className="bg-[#eee] rounded px-4 mb-7 py-2 w-full text-sm placeholder:text-sm"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <h3 className="text-base font-medium mb-2">
                        Enter Password
                    </h3>
                    <input
                        type="password"
                        name="password"
                        id=""
                        placeholder="*****"
                        className="bg-[#eee] rounded px-4 mb-7 py-2 w-full text-sm placeholder:text-sm"
                        required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button className="bg-[#111] text-white font-semibold rounded px-4 mb-3 py-2 w-full text-base">
                        Login
                    </button>
                    <p className="text-center text-sm font-semibold">
                        New here?{" "}
                        <Link to="/signup" className="text-blue-500">
                            Create New Account
                        </Link>
                    </p>
                </form>
            </div>
            <div>
                <Link
                    to="/captain-login"
                    className="bg-gray-500 block text-center text-white font-semibold rounded px-4 py-2 w-full text-base"
                >
                    Sign in as Captain
                </Link>
            </div>
        </div>
    );
};

export default UserLogin;
