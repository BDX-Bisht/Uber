import React from "react";

const LocationSearchPanel = ({ setOpenPanel, setVehiclePanel }) => {
    const locations = [
        "Connaught Place, New Delhi",
        "Bandra West, Mumbai",
        "Indiranagar, Bengaluru",
        "Park Street, Kolkata",
        "Malviya Nagar, Jaipur",
        "Banjara Hills, Hyderabad",
        "T Nagar, Chennai",
        "Koregaon Park, Pune",
        "Satellite, Ahmedabad",
        "Panaji, Goa",
    ];

    return (
        <div>
            <div className="flex flex-col gap-2">
                {locations.map((item, index) => (
                    <div
                        key={index + 1}
                        className="flex border-2 border-gray-100 p-3 rounded-xl active:border-gray-600 items-center gap-3 justify-start"
                        onClick={() => {
                            setVehiclePanel(true);
                            setOpenPanel(false);
                        }}
                    >
                        <div className="bg-[#eee] rounded-full flex items-center justify-center h-8 w-11">
                            <i className="ri-map-pin-line text-base"></i>
                        </div>
                        <h4 className="text-base font-semibold">{item}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LocationSearchPanel;
