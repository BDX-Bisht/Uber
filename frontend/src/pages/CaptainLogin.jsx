import React, { useState } from "react";
import driver from "/driver.jpg";
import { Link } from "react-router";

const CaptainLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setEmail("");
        setPassword("");
        setUserData({ email, password });
    };

    return (
        <div className="p-7 h-screen flex flex-col justify-between gap-4">
            <div>
                <img className="w-20 mb-8" src={driver} alt="" />
                <form onSubmit={handleFormSubmit}>
                    <h3 className="text-lg font-medium mb-2">
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
                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>
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
                    <button className="bg-[#111] text-white font-semibold rounded px-4 mb-3 py-2 w-full text-lg">
                        Login
                    </button>
                    <p className="text-center text-sm font-semibold">
                        Join a fleet?{" "}
                        <Link to="/captain-signup" className="text-blue-500">
                            Register as a Captain
                        </Link>
                    </p>
                </form>
            </div>
            <div>
                <Link
                    to="/login"
                    className="bg-sky-600 block text-center text-white font-semibold rounded px-4 py-2 w-full text-lg"
                >
                    Sign in as User
                </Link>
            </div>
        </div>
    );
};

export default CaptainLogin;
