import React from "react";
import map from "/map.png";
import UberLogo from "/uber.png";
import driver from "/driver.png";
import userCar from "/user-car.png";
import { Link } from "react-router";

const Riding = () => {
    return (
        <>
            <div className="h-screen w-screen relative overflow-hidden">
                <Link
                    to="/"
                    className="fixed top-4 right-4 h-10 w-10 bg-white flex items-center justify-center rounded-full"
                >
                    <i className="text-lg font-bold ri-home-5-fill"></i>
                </Link>
                <div className="p-4 absolute">
                    <img className="w-30" src={UberLogo} alt="" />
                </div>
                <div className="h-1/2 w-screen">
                    <img
                        className="w-full h-full object-cover"
                        src={map}
                        alt=""
                    />
                </div>
                <div className="h-1/2">
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img
                                    className="w-16 h-16 object-contain relative z-1"
                                    src={driver}
                                    alt=""
                                />
                                <img
                                    className="w-30 h-30 object-contain relative right-10 -z-1"
                                    src={userCar}
                                    alt=""
                                />
                            </div>
                            <div className="text-end">
                                <div className="text-gray-600 text-base">
                                    Santh
                                </div>
                                <div className="text-2xl font-semibold">
                                    DL-5CL-1151
                                </div>
                                <div className="text-gray-600 text-base">
                                    Maruti Suzuki EECO
                                </div>
                                <div className="text-base">
                                    <i className="text-gray-600 ri-star-fill"></i>{" "}
                                    4.9
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex items-center gap-5">
                                <i className="ri-map-pin-2-fill"></i>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold">
                                        344/11-A
                                    </h3>
                                    <p className="text-gray-500">
                                        Patel Nagar, Delhi
                                    </p>
                                    <hr className="w-full text-gray-200 border my-2" />
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <i className="ri-bank-card-2-line"></i>
                                <div>
                                    <h3 className="text-lg font-bold">
                                        ₹ 129.20
                                    </h3>
                                    <p className="text-gray-500">Cash, Cash</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-5 bg-green-600 font-semibold text-base py-2 text-white rounded-md">
                            Make a payment
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Riding;
