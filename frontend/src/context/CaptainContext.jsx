import React, { createContext, useState } from "react";

export const CaptainUserContext = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    const value = {
        isLoading,
        setIsLoading,
        captain,
        setCaptain,
        updateCaptain,
        error,
        setError,
    };

    return (
        <div>
            <CaptainUserContext.Provider value={value}>
                {children}
            </CaptainUserContext.Provider>
        </div>
    );
};

export default CaptainContext;
