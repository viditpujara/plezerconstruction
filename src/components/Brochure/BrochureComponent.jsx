"use client"
import { useState } from "react";
const BrochureComponent = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleClick = async () => {
        setIsDownloading(true);
        try {
            const response = await fetch("/HappyHomesBrochure.pdf");
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "HappyHomesBrochure.pdf";
            link.click();
            window.URL.revokeObjectURL(url);
        } finally {
            setIsDownloading(false);
        }

    };
    return (

        <div className="flex justify-around items-center m-5 p-4">
            <div className="px-4 py-2 bg-primary rounded-lg hover:scale-105 transform ease-in-out duration-300 text-white text-3xl">
                <button onClick={handleClick} disabled={isDownloading}>
                    {isDownloading ? "Downloading..." : "Download Brochure"}
                </button>
                <button onClick={handleClick} disabled={isDownloading}>
                    {isDownloading ? "Downloading..." : "Download Brochure"}
                </button>
            </div>
        </div>

    )
};
export default BrochureComponent;