import React from "react";
import map from "/map.png";
import UberLogo from "/driver.jpg";
import { Link } from "react-router";
import CaptainDetails from "../../components/CaptainDetails";

const CaptainRiding = () => {
    return (
        <div className="h-screen w-screen relative overflow-hidden">
            <Link
                to="/captain-logout" 
                className="fixed top-4 right-4 h-10 w-10 bg-white flex items-center justify-center rounded-full"
            >
                <i className="text-lg ri-logout-box-r-line"></i>
            </Link>
            <div className="p-4 absolute">
                <img className="w-15" src={UberLogo} alt="" />
            </div>
            <div className="h-4/5 w-screen">
                <img className="w-full h-full object-cover" src={map} alt="" />
            </div>
            <div className="h-1/5 flex items-center relative justify-between p-6 bg-yellow-400">
                <div
                    className="text-center text-3xl w-full absolute text-black left-0 top-3 leading-3"
                    onClick={() => {
                        setRidePopupPanel(false);
                    }}
                >
                    <i className="ri-arrow-up-wide-line"></i>
                </div>
                <h4 className="text-xl font-semibold">4 KM away</h4>
                <button className="bg-green-600 font-semibold text-base py-3 px-10 text-white rounded-md">
                    Complete Ride
                </button>
            </div>
        </div>
    );
};

export default CaptainRiding;
