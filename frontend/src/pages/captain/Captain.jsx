import React from "react";
import { Link } from "react-router";
import map from "/map.png";
import UberLogo from "/driver.jpg";

import CaptainDetails from "../../components/CaptainDetails";
import RidePopup from "../../components/RidePopup";

const Captain = () => {
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
            <div className="h-3/5 w-screen">
                <img className="w-full h-full object-cover" src={map} alt="" />
            </div>
            <div className="h-2/5">
                <CaptainDetails />
            </div>
            <div className="fixed w-full rounded-t-2xl bottom-0 z-10 px-3 pb-6 pt-4 bg-white">
                <RidePopup />
            </div>
        </div>
    );
};

export default Captain;
