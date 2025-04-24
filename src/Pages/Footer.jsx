import React from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-sm">
            <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
                {/* Left Column */}
                <div className="space-y-3">
                    <p>
                        Call us: <span className="font-bold">0173-0000000</span>
                    </p>
                    <p>Email us: <span className="font-bold">example@gmail.com</span></p>
                    <p>
                        Shop Address:{' '}
                        <a
                            href="https://goo.gl/maps/example"
                            className="font-bold underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Elefant Road,Dhaka-1505, Dhaka 1205                        </a>
                    </p>
                    <div className="flex gap-4 mt-4 text-xl">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Middle Column */}
                <div className="space-y-2 font-semibold">
                    <p className="hover:underline cursor-pointer">Sign in</p>
                    <p className="hover:underline cursor-pointer">Create New Account</p>
                    <p className="hover:underline cursor-pointer">My Orders</p>
                    <p className="hover:underline cursor-pointer">Join as a Affiliate Partner</p>
                    <p className="hover:underline cursor-pointer">Complain Box</p>
                </div>

                {/* Right Column */}
                <div className="space-y-2 font-semibold">
                    <p className="hover:underline cursor-pointer">Refund & returned</p>
                    <p className="hover:underline cursor-pointer">About us</p>
                    <p className="hover:underline cursor-pointer">Privacy policy</p>
                    <p className="hover:underline cursor-pointer">Terms & Condition</p>
                    <p className="hover:underline cursor-pointer">Our showrooms</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 text-center py-4 text-xs">
                BELIEVERS SIGN © 2026 POWERED BY{' '}
            </div>
        </footer>
    );
};

export default Footer;
