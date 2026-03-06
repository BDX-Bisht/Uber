import React from "react";
import { Link } from "react-router";

const Home = () => {
    return (
        <div className="h-screen flex justify-between flex-col w-full bg-red-400 bg-[url(https://images.pexels.com/photos/14340513/pexels-photo-14340513.jpeg)] bg-cover bg-center">
            <img
                className="w-60 p-2"
                src="https://imgs.search.brave.com/wCminu2A6ZbB1QN22aV0P2w4YjoK0u6ZzS-JeyJ1hEs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjcv/MTI3LzQ1MS9zbWFs/bC91YmVyLWxvZ28t/dWJlci1pY29uLXRy/YW5zcGFyZW50LWZy/ZWUtcG5nLnBuZw"
                alt=""
            />
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
