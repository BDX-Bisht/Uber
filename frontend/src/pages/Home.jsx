import React from "react";
import UberLogo from "/uber.png";
import { Link } from "react-router";

const Home = () => {
    return (
        <div className="h-screen flex justify-between flex-col w-full bg-red-400 bg-[url(https://images.pexels.com/photos/14340513/pexels-photo-14340513.jpeg)] bg-cover bg-center">
            <div className="p-8">
                <img className="w-40" src={UberLogo} alt="" />
            </div>
            <div className="bg-white py-6 px-6">
                <h2 className="text-2xl font-bold">Get started with Uber</h2>
                <Link
                    to="/login"
                    className="w-full block text-center bg-black text-white rounded py-3 mt-5 font-bold"
                >
                    Continue
                </Link>
            </div>
        </div>
    );
};

export default Home;
