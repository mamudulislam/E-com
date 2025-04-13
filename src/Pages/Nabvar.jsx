
import React, { useEffect, useState } from 'react';
import {
    FaUserCircle,
    FaShoppingCart,
    FaSearch,
    FaBars,
    FaTimes,
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const navItems = [
    {
        label: 'ATTAR',
        subItems: [
            { label: 'Series 240 ', path: '../Attar/Series240' },
            { label: 'serious premium ', path: '../Attar/seriouspremium' },
            { label: 'Atomizer', path: '../Attar/Atomizer' },
            { label: 'Perfumes', path: '../Attar/Perfumes' },
            { label: 'Combo', path: '../Attar/Combo' },
            { label: 'Wholesale', path: '../Attar/Wholesale' },
        ],
    },
    {
        label: 'PANJABI',
        subItems: [
            { label: 'Platinum', path: '../panjabi/Platinum' },
            { label: 'elegant', path: '../panjabi/elegant' },
            { label: 'printed', path: '../panjabi/printed' },
            { label: 'chikankar', path: '../panjabi/chikankar' },
        ],
    },
    {
        label: 'T-SHIRT',
        subItems: [
            { label: 'Half Sleeve', path: '../T-SHIRT/HalfSleeve' },
            { label: 'Full Sleeve', path: '../T-SHIRT/FullSleeve' },
        ],
    },
    {
        label: 'PANT & TROUSER',
        subItems: [
            { label: 'pant', path: '../PANT-TROUSER/pant' },
            { label: 'T-shirt', path: '../PANT-TROUSER/Tshirt' },
            { label: 'Pajama', path: '../PANT-TROUSER/Pajama' },
        ],
    },
    {
        label: 'NATURAL FOODS',
        subItems: [],
    },
    {
        label: "MEN'S CLOTHING",
        subItems: [
            { label: 'Tupi', path: '../Menclothing/Tupi' },
            { label: 'Thobe', path: '../Menclothing/Thobe' },
            { label: 'sneakers', path: '../Menclothing/sneakers' },
            { label: 'backpack', path: '../Menclothing/backpack' },
        ],
    },
    {
        label: 'COMBO',
        subItems: [],
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleDropdownToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    return (
        <div className="w-full border-b relative z-50">
            <div className="container mx-auto">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-6 py-4">
                    <h1 className="text-xl font-semibold cursor-pointer">
                        <Link to="/">BELIEVER’S SIGN<sup>®</sup></Link>
                    </h1>
                    {/* Search */}
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
                        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                            <FaBars />
                        </div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex border-t">
                    <div className="flex items-center px-6 py-3 gap-6 text-sm font-medium">
                        {navItems.map((item, i) => (
                            <div key={i} className="relative group cursor-pointer">
                                <div className="flex items-center gap-1">
                                    <span>{item.label}</span>
                                    {item.subItems.length > 0 && <IoIosArrowDown size={14} />}
                                </div>
                                {item.subItems.length > 0 && (
                                    <div className="absolute top-full left-0 w-44 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                                        {item.subItems.map((subItem, j) => (
                                            <a
                                                key={j}
                                                href={subItem.path}
                                                className="block px-4 py-2 hover:bg-gray-100 text-sm"
                                            >
                                                {subItem.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Overlay */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={toggleMenu}
                    />
                )}

                {/* Mobile Slide-In Menu */}
                <div
                    className={`fixed top-0 right-0 w-3/4 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        } md:hidden overflow-y-auto`}
                >
                    <div className="px-6 py-6 space-y-4">
                        {navItems.map((item, i) => (
                            <div key={i}>
                                <div
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() => handleDropdownToggle(i)}
                                >
                                    <span>{item.label}</span>
                                    {item.subItems.length > 0 && (
                                        <IoIosArrowDown
                                            size={14}
                                            className={`transition-transform duration-300 ${openDropdown === i ? 'rotate-180' : ''
                                                }`}
                                        />
                                    )}
                                </div>

                                {/* Smooth dropdown */}
                                <div
                                    className={`ml-4 transition-all duration-300 ease-in-out overflow-hidden ${openDropdown === i
                                        ? 'max-h-96 opacity-100 mt-2'
                                        : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="space-y-1 text-gray-700">
                                        {item.subItems.map((subItem, j) => (
                                            <a
                                                key={j}
                                                href={subItem.path}
                                                className="block text-sm hover:text-black"
                                            >
                                                {subItem.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Mobile Search */}
                        <div className="flex border border-black rounded mt-6">
                            <input
                                type="text"
                                placeholder="Search for products"
                                className="w-full px-4 py-2 outline-none"
                            />
                            <button className="bg-black text-white px-4 flex items-center justify-center">
                                <FaSearch />
                            </button>
                        </div>

                        {/* Close Button */}
                        <div className="flex justify-end mt-4" onClick={toggleMenu}>
                            <FaTimes className="text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
