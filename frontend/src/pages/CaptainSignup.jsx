import React, { useState } from "react";
import driver from "/driver.jpg";
import { Link } from "react-router";

const CaptainSignup = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setUserData({
            fullname: {
                firstname,
                lastname,
            },
            email,
            password,
        });
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <div className="p-7 h-screen flex flex-col justify-between gap-4">
                <div>
                    <img className="w-20 mb-8" src={driver} alt="" />
                    <form onSubmit={handleFormSubmit}>
                        <h3 className="text-base font-medium mb-2">
                            What's captain name
                        </h3>
                        <div className="flex gap-2 mb-5">
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="firstname"
                                className="bg-[#eee] rounded px-4 w-1/2 py-2 text-sm placeholder:text-sm"
                                value={firstname}
                                onChange={(e) => {
                                    setFirstname(e.target.value);
                                }}
                            />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="lastname"
                                className="bg-[#eee] rounded px-4 w-1/2 py-2 text-sm placeholder:text-sm"
                                value={lastname}
                                onChange={(e) => {
                                    setLastname(e.target.value);
                                }}
                            />
                        </div>
                        <h3 className="text-base font-medium mb-2">
                            What's your email
                        </h3>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="email@example.com"
                            className="bg-[#eee] rounded px-4 mb-6 py-2 w-full text-sm placeholder:text-sm"
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
                            className="bg-[#eee] rounded px-4 mb-5 py-2 w-full text-sm placeholder:text-sm"
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <button className="bg-[#111] text-white font-semibold rounded px-4 mb-3 py-2 w-full text-base">
                            Signup
                        </button>
                        <p className="text-center text-sm font-semibold">
                            Already a captain?{" "}
                            <Link to="/captain-login" className="text-blue-500">
                                Login here
                            </Link>
                        </p>
                    </form>
                </div>
                <div>
                    <div className="text-[12px] leading-tight text-gray-400 font-semibold">
                        By proceeding, you consent to get calls, WhatsApp or SMS
                        messages, including by automated means, from Uber and
                        its affiliates to the number provided.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaptainSignup;
