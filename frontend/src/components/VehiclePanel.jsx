import React from "react";
import car from "/car.webp";
import bike from "/bike.webp";
import auto from "/auto.png";

const VehiclePanel = ({
    setOpenPanel,
    setVehiclePanel,
    setConfirmRidePanel,
}) => {
    const vehicles = [
        {
            img: car,
            name: "UberGo",
            desc: "Affordable, compact rides",
            price: "₹ 109.84",
        },
        {
            img: bike,
            name: "Moto",
            desc: "Affordable, motorcycle rides",
            price: "₹ 80.84",
        },
        {
            img: auto,
            name: "Auto",
            desc: "Affordable, auto rides",
            price: "₹ 90.84",
        },
    ];

    const confirmRide = () => {
        setConfirmRidePanel(true);
        setVehiclePanel(false);
    };

    return (
        <div>
            <div
                className="text-center text-3xl text-gray-300 leading-3"
                onClick={() => {
                    setOpenPanel(true);
                    setVehiclePanel(false);
                }}
            >
                <i className="ri-arrow-down-wide-line"></i>
            </div>
            <h3 className="text-xl font-semibold mb-5">Choose a vehicle</h3>
            {vehicles.map((item, index) => (
                <div
                    key={index}
                    className="flex border-3 border-gray-200 active:border-black mb-2 rounded-xl w-full p-3 items-start justify-between"
                    onClick={confirmRide}
                >
                    <img
                        className={`w-18 ${item.name.toLowerCase() == "moto" ? "h-12 object-contain" : ""}`}
                        src={item.img}
                    />
                    <div className="w-1/2">
                        <h4 className="font-semibold text-base">
                            {item.name}{" "}
                            <span>
                                <i className="ri-user-fill"></i> 4
                            </span>
                        </h4>
                        <h5 className="font-semibold text-sm">2 mins away</h5>
                        <p className="font-medium text-xs text-gray-600">
                            {item.desc}
                        </p>
                    </div>
                    <h2 className="text-xl font-bold">{item.price}</h2>
                </div>
            ))}
        </div>
    );
};

export default VehiclePanel;
