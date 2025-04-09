import React, { useState } from 'react';
import { FaUserCircle, FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const navItems = [
    { label: 'ATTAR', subItems: ['1item', '2item', '3item', '4item'] },
    { label: 'PANJABI', subItems: ['1item', '2item'] },
    { label: 'T-SHIRT', subItems: [] },
    { label: 'PANT & TROUSER', subItems: ['1item'] },
    { label: 'NATURAL FOODS', subItems: [] },
    { label: "MEN'S CLOTHING", subItems: ['1item', '2item', '3item'] },
    { label: 'COMBO', subItems: [] },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="w-full border-b">
            <div className="container mx-auto">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-6 py-4">
                    <h1 className="text-xl font-semibold">
                        BELIEVER’S SIGN<sup>®</sup>
                    </h1>

                    {/* Search */}
                    <div className="flex-1 max-w-2xl mx-6 hidden md:block">
                        <div className="flex border border-black rounded">
                            <input type="text" placeholder="Search for products" className="w-full px-4 py-2 outline-none" />
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
                        <div className="md:hidden" onClick={toggleMenu}>
                            <FaBars />
                        </div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex border-t">
                    <div className="flex items-center px-6 py-3 gap-6 text-sm font-medium">
                        {navItems.map((item, i) => (
                            <div key={i} className="relative group">
                                <div className="flex items-center gap-1 cursor-pointer">
                                    <span>{item.label}</span>
                                    {item.subItems.length > 0 && <IoIosArrowDown size={14} />}
                                </div>

                                {/* Dropdown */}
                                {item.subItems.length > 0 && (
                                    <div className="absolute top-full left-0 w-40 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                                        {item.subItems.map((subItem, j) => (
                                            <button
                                                key={j}
                                                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                                            >
                                                {subItem}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} px-6 py-3`}>
                    <div className="flex flex-col gap-4">
                        {navItems.map((item, i) => (
                            <div key={i}>
                                <div className="flex items-center justify-between" onClick={() => toggleMenu()}>
                                    <span>{item.label}</span>
                                    {item.subItems.length > 0 && <IoIosArrowDown size={14} />}
                                </div>
                                {/* Show subitems on mobile */}
                                {item.subItems.length > 0 && (
                                    <div className="ml-4 mt-2 space-y-1 text-gray-700">
                                        {item.subItems.map((subItem, j) => (
                                            <div key={j} className="text-sm">{subItem}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

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

                    <div className="flex justify-end mt-4" onClick={toggleMenu}>
                        <FaTimes />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
