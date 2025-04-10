import React from 'react';
import Banner from '../assets/Banner.png';
import ProductCard from '../componentes/Productcard';

const Home = () => {
    const categories = [
        {
            id: 1,
            imgSrc: 'https://api.believerssign.com.bd/public/category/HrJi_hHGUHgtkzXCuuJ.jpg',
            altText: 'Perfume',
        },
        {
            id: 2,
            imgSrc: 'https://api.believerssign.com.bd/public/category/xunnjgmfAqd4SBXwlTS.jpg',
            altText: 'Honey',
        },
        {
            id: 3,
            imgSrc: 'https://api.believerssign.com.bd/public/category/BL9RylkLSguJ7hMw8Zh.jpg',
            altText: 'Shirt',
        },
        {
            id: 4,
            imgSrc: 'https://api.believerssign.com.bd/public/category/xx4msjFYBcFm0QpZO4G.jpg',
            altText: 'Pants',
        },
        {
            id: 5,
            imgSrc: 'https://api.believerssign.com.bd/public/category/26Wd3XWtc3FkyEOwS5i.jpg',
            altText: 'Jersey',
        },
        {
            id: 6,
            imgSrc: 'https://api.believerssign.com.bd/public/category/7ctekJ0vHX96XyWLMhw.jpg',
            altText: 'Cap',
        },
    ];

    const attarProducts = [
        {
            name: 'Royal Sapphire Thameen - 6ml',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FAvjgdoY-Bfu5Dir_BAf.jpg&w=1080&q=75',
            link: '/product/royal-sapphire-thameen-6ml-12vcor',
        },
        {
            name: 'Red African - 6ml',
            price: 550,
            discountedPrice: 440,
            image: 'https://api.believerssign.com.bd/public/product/5Km85tIvt29SWEfHk8z.jpg',
            link: '/product/red-african-6ml-f41ta8',
        }, {
            name: 'Safa - 6ml',
            price: 550,
            discountedPrice: 440,
            image: 'https://api.believerssign.com.bd/public/product/5Km85tIvt29SWEfHk8z.jpg',
            link: '/product/red-african-6ml-f41ta8',
        }, {
            name: 'Safa - 6ml',
            price: 550,
            discountedPrice: 440,
            image: 'https://api.believerssign.com.bd/public/product/5Km85tIvt29SWEfHk8z.jpg',
            link: '/product/red-african-6ml-f41ta8',
        }, {
            name: 'Safa - 6ml',
            price: 550,
            discountedPrice: 440,
            image: 'https://api.believerssign.com.bd/public/product/5Km85tIvt29SWEfHk8z.jpg',
            link: '/product/red-african-6ml-f41ta8',
        },
    ];

    return (
        <>
            {/* Banner */}
            <div className="mt-[22px] mb-[30px]">
                <img src={Banner} alt="Banner..." className="w-full h-auto max-w-full object-cover" />
            </div>

            {/* TOP__CATEGORIES */}
            <div className="flex items-center justify-center w-full my-6">
                <div className="h-px bg-gray-300 flex-grow"></div>
                <span className="mx-4 uppercase font-medium text-[22px] xls:text-lg xms:text-lg xs:text-lg">
                    TOP CATEGORIES
                </span>
                <div className="h-px bg-gray-300 flex-grow"></div>
            </div>

            {/* Category__Cards */}
            <div className="flex flex-wrap justify-center gap-4 p-4">
                {categories.map((category) => (
                    <div key={category.id} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={category.imgSrc} alt={category.altText} className="w-full h-48 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">{category.altText}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* ATTAR__ */}
            <div className="flex items-center px-6 py-4">
                <p className="uppercase font-medium text-[22px] xls:text-lg xms:text-lg xs:text-lg">attar</p>
                <div className="flex-grow border-t border-gray-300 mx-4"></div>
                <a
                    className="px-4 py-2 text-white text-sm bg-black rounded-full"
                    href="/category/attar"
                >
                    View All
                </a>
            </div>

            {/* ATTAR_Product_Cards */}
            <div className="px-6 py-4 grid grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xls:grid-cols-2 xms:grid-cols-2 xs:grid-cols-2 gap-6 md:gap-4 sm:gap-2 xls:gap-2 xms:gap-2 xs:gap-2">
                {attarProducts.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
            {/* panjabi__product */}
            <div class="flex items-center px-6 py-4">
                <p class="uppercase font-medium text-[22px] xls:text-lg xms:text-lg xs:text-lg">panjabi</p>
                <div class="flex-grow border-t border-gray-300 mx-4"></div>
                <a class="px-4 py-2 text-white text-sm bg-secondary rounded-full bg-black" href="/category/panjabi">View All</a>
            </div>
        </>
    );
};

export default Home;
