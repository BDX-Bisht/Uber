import React from "react";
import driver from "/driver.png";
import userCar from "/user-car.png";

const WaitingForDriver = () => {
    return (
        <div className="">
            <div className="flex p-4 justify-between items-center border-b border-gray-300">
                <div className="text-lg font-semibold">
                    Meet at the pickup point
                </div>
                <div className="bg-black text-white flex text-center px-4 py-2 text-md font-medium">
                    2 <br />
                    min
                </div>
            </div>
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
                        <div className="text-gray-600 text-base">Santh</div>
                        <div className="text-2xl font-semibold">
                            DL-5CL-1151
                        </div>
                        <div className="text-gray-600 text-base">
                            Maruti Suzuki EECO
                        </div>
                        <div className="text-base">
                            <i className="text-gray-600 ri-star-fill"></i> 4.9
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-6 px-8">
                    <div className="flex flex-col gap-1 items-center">
                        <div className="h-12 w-12 rounded-full bg-[#f0edee] flex items-center justify-center">
                            <i className="ri-shield-check-fill text-lg text-blue-500"></i>
                        </div>
                        <div className="font-semibold">Safety</div>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <div className="h-12 w-12 rounded-full bg-[#f0edee] flex items-center justify-center">
                            <i className="ri-gps-fill text-lg text-blue-500"></i>
                        </div>
                        <div className="font-semibold">Share my trip</div>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <div className="h-12 w-12 rounded-full bg-[#f0edee] flex items-center justify-center">
                            <i className="ri-phone-fill text-lg text-blue-500"></i>
                        </div>
                        <div className="font-semibold">Call Driver</div>
                    </div>
                </div>
                <hr className="w-full text-gray-200 border my-4" />
                <div className="flex items-center gap-5">
                    <i className="ri-map-pin-2-fill"></i>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold">344/11-A</h3>
                        <p className="text-gray-500">Patel Nagar, Delhi</p>
                        <hr className="w-full text-gray-200 border my-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitingForDriver;
