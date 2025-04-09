import React, { useState } from 'react';
import { FaUserCircle, FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="w-full border-b">
            <div className="container mx-auto">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl font-semibold">
                            BELIEVER’S SIGN<sup>®</sup>
                        </h1>
                    </div>

                    {/* Search Bar (visible on mobile and larger screens) */}
                    <div className="flex-1 max-w-2xl mx-6 hidden md:block">
                        <div className="flex border border-black rounded">
                            <input
                                type="text"
                                placeholder="Search for products"
                                className="w-full px-4 py-2 outline-none"
                            />
                            <button className="bg-black text-white px-4 flex items-center justify-center">
                                <FaSearch />
                            </button>
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-6 text-2xl">
                        <FaUserCircle />
                        <div className="relative">
                            <FaShoppingCart />
                            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                                0
                            </span>
                        </div>
                        {/* Mobile Hamburger */}
                        <div className="md:hidden" onClick={toggleMenu}>
                            <FaBars />
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} px-6 py-3`}>
                    <div className="flex flex-col gap-4">
                        {['ATTAR', 'PANJABI', 'T-SHIRT', 'PANT & TROUSER', 'NATURAL FOODS', "MEN'S CLOTHING", 'COMBO'].map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <span>{item}</span>
                                {!['COMBO', 'NATURAL FOODS'].includes(item) && (
                                    <IoIosArrowDown size={14} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Search Bar under the mobile menu */}
                    <div className="flex border border-black rounded mt-4">
                        <input
                            type="text"
                            placeholder="Search for products"
                            className="w-full px-4 py-2 outline-none"
                        />
                        <button className="bg-black text-white px-4 flex items-center justify-center">
                            <FaSearch />
                        </button>
                    </div>

                    {/* Close Menu */}
                    <div className="flex justify-end mt-4" onClick={toggleMenu}>
                        <FaTimes />
                    </div>
                </div>

                {/* Navigation Menu for Tablet and Desktop */}
                <div className="hidden md:flex border-t">
                    <div className="flex items-center px-6 py-3 gap-6 text-sm font-medium">
                        {['ATTAR', 'PANJABI', 'T-SHIRT', 'PANT & TROUSER', 'NATURAL FOODS', "MEN'S CLOTHING", 'COMBO'].map((item, i) => (
                            <div key={i} className="flex items-center gap-1 cursor-pointer">
                                <span>{item}</span>
                                {!['COMBO', 'NATURAL FOODS'].includes(item) && (
                                    <IoIosArrowDown size={14} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
