import React, { useEffect, useState } from 'react';
import {
    FaUserCircle,
    FaShoppingCart,
    FaSearch,
    FaBars,
    FaTimes,
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Add this import

const navItems = [
    {
        label: 'ATTAR',
        subItems: [
            { label: 'Series 240', path: '/Attar/Series240' },
            { label: 'Serious Premium', path: '/Attar/seriouspremium' },
            { label: 'Atomizer', path: '/Attar/Atomizer' },
            { label: 'Perfumes', path: '/Attar/Perfumes' },
            { label: 'Combo', path: '/Attar/Combo' },
            { label: 'Wholesale', path: '/Attar/Wholesale' },
        ],
    },
    {
        label: 'PANJABI',
        subItems: [
            { label: 'Platinum', path: '/panjabi/Platinum' },
            { label: 'Elegant', path: '/panjabi/elegant' },
            { label: 'Printed', path: '/panjabi/printed' },
            { label: 'Chikankar', path: '/panjabi/chikankar' },
        ],
    },
    {
        label: 'T-SHIRT',
        subItems: [
            { label: 'Half Sleeve', path: '/T-SHIRT/HalfSleeve' },
            { label: 'Full Sleeve', path: '/T-SHIRT/FullSleeve' },
        ],
    },
    {
        label: 'PANT & TROUSER',
        subItems: [
            { label: 'Pant', path: '/PANT-TROUSER/pant' },
            { label: 'T-shirt', path: '/PANT-TROUSER/Tshirt' },
            { label: 'Pajama', path: '/PANT-TROUSER/Pajama' },
        ],
    },
    {
        label: 'NATURAL FOODS',
        subItems: [],
        path: '/NaturalFoods/NaturalFoods',
    },
    {
        label: "MEN'S CLOTHING",
        subItems: [
            { label: 'Tupi', path: '/Menclothing/Tupi' },
            { label: 'Thobe', path: '/Menclothing/Thobe' },
            { label: 'Sneakers', path: '/Menclothing/sneakers' },
            { label: 'Backpack', path: '/Menclothing/Backpack' },
        ],
    },
    {
        label: 'COMBO',
        subItems: [],
        path: '/Combo/Comboes',
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isSticky, setIsSticky] = useState(false);
    const [showLoginDropdown, setShowLoginDropdown] = useState(false);

    // Get cart total quantity from Redux store
    const cartTotalQuantity = useSelector(state => state.cart.totalQuantity);

    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleDropdownToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.login-wrapper')) {
                setShowLoginDropdown(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className={`w-full border-b z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 bg-white shadow-md' : 'relative'}`}>
            <div className="container mx-auto px-4 sm:px-6">
                {/* Top Bar */}
                <div className="flex items-center justify-between py-4">
                    <h1 className="text-xl font-semibold cursor-pointer">
                        <Link to="/">BELIEVER'S SIGN<sup>®</sup></Link>
                    </h1>

                    {/* Desktop Search */}
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
                    <div className="flex items-center gap-6 text-2xl relative">
                        {/* Account Icon */}
                        {/* User Icon Only */}
                        <Link to="/login">
                            <FaUserCircle className="cursor-pointer text-2xl" />
                        </Link>
                        {/* Cart Icon - Updated with Redux */}
                        <div className="relative">
                            <Link to="/cart">
                                <FaShoppingCart />
                                {cartTotalQuantity > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                                        {cartTotalQuantity}
                                    </span>
                                )}
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                            <FaBars />
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex border-t">
                    <div className="flex items-center px-6 py-3 gap-6 text-sm font-medium">
                        {navItems.map((item, i) => {
                            const isParentActive =
                                item.subItems?.some((sub) => location.pathname === sub.path) ||
                                location.pathname === item.path;

                            return (
                                <div key={i} className="relative group">
                                    {item.subItems.length > 0 ? (
                                        <div className={`flex items-center gap-1 cursor-pointer ${isParentActive ? 'text-blue-600 font-semibold' : ''}`}>
                                            <span>{item.label}</span>
                                            <IoIosArrowDown size={14} />
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className={`cursor-pointer hover:text-gray-700 ${location.pathname === item.path ? 'text-blue-600 font-semibold' : ''}`}
                                        >
                                            {item.label}
                                        </Link>
                                    )}

                                    {item.subItems.length > 0 && (
                                        <div className="absolute top-full left-0 w-44 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                                            {item.subItems.map((subItem, j) => (
                                                <Link
                                                    key={j}
                                                    to={subItem.path}
                                                    className={`block px-4 py-2 hover:bg-gray-100 text-sm ${location.pathname === subItem.path ? 'text-blue-600 font-semibold' : ''}`}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Overlay */}
                {isMenuOpen && (
                    <div className="fixed bg-white bg-opacity-50 " onClick={toggleMenu} />
                )}

                {/* Mobile Slide Menu */}
                <div className={`fixed top-0 right-0 w-3/4 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden overflow-y-auto`}>
                    <div className="px-6 py-6 space-y-4">
                        {navItems.map((item, i) => (
                            <div key={i}>
                                <div
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() => {
                                        if (item.subItems.length > 0) {
                                            handleDropdownToggle(i);
                                        } else if (item.path) {
                                            toggleMenu();
                                            navigate(item.path);
                                        }
                                    }}
                                >
                                    <span className={`${location.pathname === item.path || item.subItems?.some((sub) => location.pathname === sub.path) ? 'text-blue-600 font-semibold' : ''}`}>
                                        {item.label}
                                    </span>
                                    {item.subItems.length > 0 && (
                                        <IoIosArrowDown size={14} className={`transition-transform duration-300 ${openDropdown === i ? 'rotate-180' : ''}`} />
                                    )}
                                </div>
                                {item.subItems.length > 0 && (
                                    <div className={`ml-4 transition-all duration-300 ease-in-out overflow-hidden ${openDropdown === i ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                        <div className="space-y-1 text-gray-700">
                                            {item.subItems.map((subItem, j) => (
                                                <Link
                                                    key={j}
                                                    to={subItem.path}
                                                    className={`block text-sm hover:text-black ${location.pathname === subItem.path ? 'text-blue-600 font-semibold' : ''}`}
                                                    onClick={toggleMenu}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
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
        </div>
    );
};

export default Navbar;