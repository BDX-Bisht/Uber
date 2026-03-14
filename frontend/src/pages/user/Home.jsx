import UberLogo from "/uber.png";
import car from "/car.webp";
import bike from "/bike.webp";
import auto from "/auto.png";
import map from "/map.png";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../../components/LocationSearchPanel";

const Home = () => {
    const [pickUp, setPickUp] = useState("");
    const [destination, setDestination] = useState("");
    const [openPanel, setOpenPanel] = useState(false);
    const [vehiclePanel, setVehiclePanel] = useState(false);
    const panelRef = useRef(null);
    const panelClose = useRef(null);
    const vehiclePanelRef = useRef(null);

    const onsubmitHandler = (e) => {
        e.preventDefault();
    };

    useGSAP(() => {
        if (openPanel) {
            gsap.to(panelRef.current, {
                height: "75%",
            });
            gsap.to(panelClose.current, {
                opacity: 1,
            });
        } else {
            gsap.to(panelRef.current, {
                height: "0%",
            });
            gsap.to(panelClose.current, {
                opacity: 0,
            });
        }
    }, [openPanel]);

    useGSAP(() => {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: "translateY(0%)",
            });
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: "translateY(100%)",
            });
        }
    }, [vehiclePanel]);

    return (
        <div className="h-screen w-screen relative overflow-hidden">
            <div className="p-4 absolute">
                <img className="w-30" src={UberLogo} alt="" />
            </div>
            <div className="h-screen w-screen">
                <img className="w-full h-full object-cover" src={map} alt="" />
            </div>
            <div className="h-screen absolute top-0 flex flex-col justify-end w-full">
                <div className="h-[25%] bg-white relative rounded-t-2xl p-5">
                    <div
                        onClick={() => {
                            setOpenPanel(false);
                        }}
                        ref={panelClose}
                        className="absolute right-6 text-2xl opacity-0"
                    >
                        <i className="ri-arrow-down-wide-line"></i>
                    </div>
                    <h4 className="text-xl font-bold">Find a trip</h4>
                    <form
                        onSubmit={onsubmitHandler}
                        className="flex flex-col gap-3 mt-4 relative"
                    >
                        <div className="line absolute h-16 w-0.5 top-3 left-4 bg-gray-700 rounded-full"></div>
                        <input
                            type="text"
                            className="bg-[#eee] w-full px-8 py-2 text-base font-medium rounded-lg"
                            placeholder="Add a pickup location"
                            value={pickUp}
                            onChange={(e) => {
                                setPickUp(e.target.value);
                            }}
                            onFocus={() => {
                                setOpenPanel(true);
                            }}
                        />
                        <input
                            type="text"
                            className="bg-[#eee] w-full px-8 py-2 text-base font-medium rounded-lg"
                            placeholder="Enter your destination"
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value);
                            }}
                        />
                    </form>
                </div>
                <div
                    className="h-[0%] bg-white px-6 overflow-auto pb-4"
                    ref={panelRef}
                >
                    <LocationSearchPanel
                        setOpenPanel={setOpenPanel}
                        setVehiclePanel={setVehiclePanel}
                    />
                </div>
            </div>

            <div
                ref={vehiclePanelRef}
                className="fixed w-full rounded-t-2xl translate-y-full bottom-0 z-10 px-3 pb-6 pt-4 bg-white"
            >
                <div
                    className="text-center text-3xl text-gray-300 leading-3"
                    onClick={() => {
                        setOpenPanel(true)
                        setVehiclePanel(false);
                    }}
                >
                    <i className="ri-arrow-down-wide-line"></i>
                </div>
                <h3 className="text-xl font-semibold mb-5">Choose a vehicle</h3>
                <div className="flex border-3 border-gray-200 active:border-black mb-2 rounded-xl w-full p-3 items-start justify-between">
                    <img className="w-18" src={car} />
                    <div className="w-1/2">
                        <h4 className="font-semibold text-base">
                            UberGo{" "}
                            <span>
                                <i className="ri-user-fill"></i> 4
                            </span>
                        </h4>
                        <h5 className="font-semibold text-sm">2 mins away</h5>
                        <p className="font-medium text-xs text-gray-600">
                            Affordable, compact rides
                        </p>
                    </div>
                    <h2 className="text-xl font-bold">₹ 192.20</h2>
                </div>
                <div className="flex border-3 border-gray-200 active:border-black mb-2 rounded-xl w-full p-3 items-start justify-between">
                    <img className="w-18 h-12 object-contain" src={bike} />
                    <div className="w-1/2">
                        <h4 className="font-semibold text-base">
                            Moto{" "}
                            <span>
                                <i className="ri-user-fill"></i> 1
                            </span>
                        </h4>
                        <h5 className="font-semibold text-sm">3 mins away</h5>
                        <p className="font-medium text-xs text-gray-600">
                            Affordable, motorcycle rides
                        </p>
                    </div>
                    <h2 className="text-xl font-bold">₹ 65.20</h2>
                </div>
                <div className="flex border-3 border-gray-200 active:border-black mb-2 rounded-xl w-full p-3 items-start justify-between">
                    <img className="w-18 object-contain" src={auto} />
                    <div className="w-1/2">
                        <h4 className="font-semibold text-base">
                            Auto{" "}
                            <span>
                                <i className="ri-user-fill"></i> 3
                            </span>
                        </h4>
                        <h5 className="font-semibold text-sm">5 mins away</h5>
                        <p className="font-medium text-xs text-gray-600">
                            Affordable, auto rides
                        </p>
                    </div>
                    <h2 className="text-xl font-bold">₹ 120.20</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;
