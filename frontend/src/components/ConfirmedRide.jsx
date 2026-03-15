import React from "react";
import car from "/car.webp";

const ConfirmedRide = ({
    setConfirmRidePanel,
    setVehiclePanel,
    setVehicleFound,
}) => {
    return (
        <div>
            <div
                className="text-center text-3xl text-gray-300 leading-3"
                onClick={() => {
                    setVehiclePanel(true);
                    setConfirmRidePanel(false);
                }}
            >
                <i className="ri-arrow-down-wide-line"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Confirm your ride</h3>

            <div className="flex flex-col gap-4 items-center justify-center">
                <img src={car} className="w-40 py-2" alt="" />
                <hr className="w-full text-gray-200 border" />
                <div className="w-full">
                    <div className="flex items-center gap-5">
                        <i className="ri-map-pin-2-fill"></i>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold">344/11-A</h3>
                            <p className="text-gray-500">Patel Nagar, Delhi</p>
                            <hr className="w-full text-gray-200 border my-2" />
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <i className="ri-checkbox-blank-fill"></i>
                        <div>
                            <h3 className="text-lg font-bold">
                                Third Wave Coffee
                            </h3>
                            <p className="text-gray-500">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Perspiciatis, impedit!
                            </p>
                            <hr className="w-full text-gray-200 border my-2" />
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <i className="ri-bank-card-2-line"></i>
                        <div>
                            <h3 className="text-lg font-bold">₹ 129.20</h3>
                            <p className="text-gray-500">Cash, Cash</p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => {
                        setVehicleFound(true);
                        setConfirmRidePanel(false)
                    }}
                    className="w-full bg-green-600 font-semibold text-base py-2 text-white rounded-md"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default ConfirmedRide;
