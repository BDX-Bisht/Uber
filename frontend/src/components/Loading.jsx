import React from "react";

const Loading = () => {
    return (
        <>
            <div className="h-screen w-full flex flex-col animate-pulse">
                {/* MAP Skeleton */}
                <div className="flex-1 bg-gray-300 relative">
                    {/* Logo */}
                    <div className="absolute top-4 left-4 h-8 w-24 bg-gray-200 rounded"></div>

                    {/* Car Pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="h-10 w-6 bg-gray-200 rounded-md"></div>
                    </div>
                </div>

                {/* Bottom Sheet Skeleton */}
                <div className="bg-white rounded-t-3xl p-5 space-y-4 shadow-lg">
                    {/* Title */}
                    <div className="h-6 w-32 bg-gray-300 rounded"></div>

                    {/* Input 1 */}
                    <div className="flex items-center space-x-3 bg-gray-200 rounded-xl p-4">
                        <div className="h-8 w-1 bg-gray-300 rounded"></div>
                        <div className="h-4 w-40 bg-gray-300 rounded"></div>
                    </div>

                    {/* Input 2 */}
                    <div className="flex items-center space-x-3 bg-gray-200 rounded-xl p-4">
                        <div className="h-8 w-1 bg-gray-300 rounded"></div>
                        <div className="h-4 w-48 bg-gray-300 rounded"></div>
                    </div>

                    {/* Button Skeleton */}
                    <div className="h-12 w-full bg-gray-300 rounded-xl mt-3"></div>
                </div>
            </div>
        </>
    );
};

export default Loading;
