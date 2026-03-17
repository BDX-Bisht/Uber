import React from "react";
import driver from "/driver.png";

const CaptainDetails = () => {
    return (
        <>
            <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <img className="w-13" src={driver} alt="" />
                        <div>
                            <div className="text-xl font-semibold">
                                Dipanshu Bisht
                            </div>
                            <div className="text-gray-600 text-sm">
                                Basic Level
                            </div>
                        </div>
                    </div>
                    <div className="text-end">
                        <div className="text-lg font-semibold">₹ 200.10</div>
                        <div className="text-xs text-gray-600">Earned</div>
                    </div>
                </div>
                <div className="w-full mt-6 bg-gray-100 rounded-lg px-6 py-3 flex items-center justify-between text-center">
                    <div>
                        <i className="text-xl font-thin ri-time-line"></i>
                        <div className="text-md font-medium">10.2</div>
                        <div className="text-xs text-gray-400">
                            Hours Online
                        </div>
                    </div>
                    <div>
                        <i className="text-xl font-thin ri-dashboard-3-line"></i>
                        <div className="text-md font-medium">30 KM</div>
                        <div className="text-xs text-gray-400">
                            Total Distance
                        </div>
                    </div>
                    <div>
                        <i className="text-xl font-thin ri-booklet-line"></i>
                        <div className="text-md font-medium">30 KM</div>
                        <div className="text-xs text-gray-400">
                            Total Distance
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaptainDetails;
