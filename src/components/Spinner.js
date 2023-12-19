import React from "react";
import '../assets/css/Spinner.css';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="lds-heart">
                <div></div>
            </div>
        </div>
    );
}

export default Spinner;
