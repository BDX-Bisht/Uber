import UberLogo from "/uber.png";
import map from "/map.png";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../../components/LocationSearchPanel";

const Home = () => {
    const [pickUp, setPickUp] = useState("");
    const [destination, setDestination] = useState("");
    const [openPanel, setOpenPanel] = useState(false);
    const panelRef = useRef(null);
    const panelClose = useRef(null);

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

    return (
        <div className="h-screen w-screen relative">
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
                <div className="h-[0%] bg-white border-t" ref={panelRef}>
                    <LocationSearchPanel />
                </div>
            </div>
        </div>
    );
};

export default Home;
