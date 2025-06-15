import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#111418] brightness-[0.8] text-gray-300 py-6 px-5 relative z-2">
            <div className="container mx-auto px-2 md:px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="text-xs md:text-sm">
                    Copyright &copy;&nbsp;&nbsp;
                    {new Date().getFullYear()}&nbsp;&nbsp;
                    <span className="text-[#20c997] font-semibold">Sachil.&nbsp;&nbsp;</span> All rights reserved.
                </div>
                <div className="flex text-xs md:text-sm">
                    <p>Terms & Policy</p>&nbsp;&nbsp;&nbsp;
                    <p>Disclaimer</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;