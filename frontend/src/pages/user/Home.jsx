import UberLogo from "/uber.png";

import map from "/map.png";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../../components/LocationSearchPanel";
import VehiclePanel from "../../components/VehiclePanel";
import ConfirmedRide from "../../components/ConfirmedRide";
import LookingForDriver from "../../components/LookingForDriver";
import WaitingForDriver from "../../components/WaitingForDriver";

const Home = () => {
    const [pickUp, setPickUp] = useState("");
    const [destination, setDestination] = useState("");
    const [openPanel, setOpenPanel] = useState(false);
    const [vehiclePanel, setVehiclePanel] = useState(false);
    const [confirmRidePanel, setConfirmRidePanel] = useState(false);
    const [vehicleFound, setVehicleFound] = useState(false);
    const [waitingForDriver, setWaitingForDriver] = useState(false);

    const panelRef = useRef(null);
    const panelClose = useRef(null);
    const vehiclePanelRef = useRef(null);
    const confirmRidePanelRef = useRef(null);
    const vehicleFoundRef = useRef(null);
    const waitingForDriverRef = useRef(null);

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

    useGSAP(() => {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: "translateY(0%)",
            });
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: "translateY(200%)",
            });
        }
    }, [confirmRidePanel]);

    useGSAP(() => {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: "translateY(0%)",
            });
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: "translateY(200%)",
            });
        }
    }, [vehicleFound]);

    useGSAP(() => {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: "translateY(0%)",
            });
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: "translateY(200%)",
            });
        }
    }, [waitingForDriver]);

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
                <div className="h-[0%] bg-white overflow-auto" ref={panelRef}>
                    <div className="px-6 pb-4">
                        <LocationSearchPanel
                            setOpenPanel={setOpenPanel}
                            setVehiclePanel={setVehiclePanel}
                        />
                    </div>
                </div>
            </div>

            <div
                ref={vehiclePanelRef}
                className="fixed w-full rounded-t-2xl translate-y-full bottom-0 z-10 px-3 pb-6 pt-4 bg-white"
            >
                <VehiclePanel
                    setOpenPanel={setOpenPanel}
                    setVehiclePanel={setVehiclePanel}
                    setConfirmRidePanel={setConfirmRidePanel}
                />
            </div>

            <div
                ref={confirmRidePanelRef}
                className="fixed w-full rounded-t-2xl translate-y-full bottom-0 z-10 px-3 pb-6 pt-4 bg-white"
            >
                <ConfirmedRide
                    setConfirmRidePanel={setConfirmRidePanel}
                    setVehiclePanel={setVehiclePanel}
                    setVehicleFound={setVehicleFound}
                />
            </div>

            <div
                ref={vehicleFoundRef}
                className="fixed w-full rounded-t-2xl translate-y-full bottom-0 z-10 px-3 pb-6 pt-4 bg-white"
            >
                <LookingForDriver />
            </div>
            <div
                ref={waitingForDriverRef}
                className="fixed w-full rounded-t-2xl translate-y-full bottom-0 z-10 bg-white"
            >
                <WaitingForDriver />
            </div>
        </div>
    );
};

export default Home;
