import driver from "/driver.png";
import React from "react";

const ConfirmRidePopup = ({ setConfirmRidePopupPanel }) => {
    return (
        <>
            <div
                className="text-center text-3xl text-gray-300 leading-3 mb-4"
                onClick={() => {
                    setConfirmRidePopupPanel(false);
                }}
            >
                <i className="ri-arrow-down-wide-line"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Confirm this ride to start</h3>
            <div className="flex items-center justify-between mt-6 bg-orange-50 px-4 py-3 rounded-lg">
                <div className="flex items-center gap-3">
                    <img className="w-12" src={driver} alt="" />
                    <h2 className="text-lg font-medium">Harsh Patel</h2>
                </div>
                <h5 className="text-lg font-semibold">1.2 KM</h5>
            </div>
            <div className="mt-6">
                <div className="flex items-center gap-5">
                    <i className="ri-map-pin-2-fill"></i>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold">344/11-A</h3>
                        <p className="text-gray-500">Patel Nagar, Delhi</p>
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
            <div className="mt-6 w-full grid grid-cols-2 gap-2">
                <button
                    onClick={() => {
                        setConfirmRidePopupPanel(false);
                    }}
                    className="bg-red-600 text-white font-semibold text-base py-2 rounded-md"
                >
                    Cancel
                </button>
                <button className="bg-green-600 font-semibold text-base py-2 text-white rounded-md">
                    Confirm
                </button>
            </div>
        </>
    );
};

export default ConfirmRidePopup;
