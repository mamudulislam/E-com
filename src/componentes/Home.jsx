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
            name: 'Royal Sapphire - 6ml',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FAvjgdoY-Bfu5Dir_BAf.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Red African - 6ml',
            price: 550,
            discountedPrice: 440,
            image: 'https://api.believerssign.com.bd/public/product/5Km85tIvt29SWEfHk8z.jpg',
            link: '',
        }, {
            name: 'Safa - 6ml',
            price: 550,
            discountedPrice: 440,
            image: 'https://api.believerssign.com.bd/public/product/5Km85tIvt29SWEfHk8z.jpg',
            link: '',
        }, {
            name: 'Safa - 6ml',
            price: 550,
            discountedPrice: 440,
            image: 'https://api.believerssign.com.bd/public/product/5Km85tIvt29SWEfHk8z.jpg',
            link: '',
        }, {
            name: 'Safa - 6ml',
            price: 550,
            discountedPrice: 440,
            image: 'https://api.believerssign.com.bd/public/product/5Km85tIvt29SWEfHk8z.jpg',
            link: '',
        },
    ];

    const panjabi__product = [
        {
            name: 'Fine Cotton Panjabi - 406',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2Fou1JjkxIW9Ysya6KZTj.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Fine Cotton Panjabi - 405',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FFTwtMG3p1UcFt620Dcn.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Fine Cotton Panjabi - 404',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FEh7pGX_7KwxFqnFQchp.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Platinum China Bamboo - 904',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FpMd1rW7dkpN1kB0CAbA.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Cotton Panjabi - 112',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F3IMvVo_bX3RiSs5M6yw.jpg&w=1080&q=75',
            link: '',
        },
    ];

    const T_shirt = [
        {
            name: 'Full Sleeve T-shirt - Musafir',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FuuaAt8WdWob1zG9K_oj.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Full Sleeve T-shirt - Stay Focus',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2Fa7FeCWu6KEecjy-V-h6.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Full Sleeve T-shirt - Never Give Up',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2Futg7mVVf5nWhaSilmXm.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Full Sleeve Dawah Jersey - SJ15',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FktsgBf6QUjoFO-eqyyE.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Full Sleeve Dawah Jersey - SJ16',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FktsgBf6QUjoFO-eqyyE.jpg&w=1080&q=75',
            link: '',
        },
    ];

    const pant_trouser = [
        {
            name: 'Premium Ottoman Trouser - Ash',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F7g33WOMCfxwHWk9qqZC.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Mens Denim Pant - KF04',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FxK72STJbx1DebMKfiSZ.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Mens Denim Pant - KF04',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FxK72STJbx1DebMKfiSZ.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Full Sleeve Dawah Jersey - SJ15',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FktsgBf6QUjoFO-eqyyE.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Full Sleeve Dawah Jersey - SJ16',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FktsgBf6QUjoFO-eqyyE.jpg&w=1080&q=75',
            link: '',
        },
    ];

    const Natural_foods = [
        {
            name: 'Summer Super Food Combo',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FmunLb1BgQlybT5XdXqg.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Litchi Flower Honey - 2kg',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F6MN0Au-Pm1sbxZ--2nS.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Ajwa Premium - 1 kg',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FCQc1RY05QTEEa9oNW2p.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Sufri Mariyam Premium - 1 kg',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FbspIwgF_HPtyKmu9XCe.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Premium Dates Combo - 4 in 1',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FMi-dppX322WjXUI1rJX.jpg&w=1080&q=75',
            link: '',
        },
    ];


    const showes_clothing = [
        {
            name: 'Y252015 White & Gray',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FF-VQ5av3bJANIFKkDZ8.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Y251001 - White & Blue',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FLpHLWHJVrcdDtpjZt-r.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Y-242015 White & Gray',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FkQ8fABySSVyPMZidCWa.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Premium Exclusive- Gray & Green',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F-QXY015VBzAh1YHodDS.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Premium Blue & Yellow',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F-QXY015VBzAh1YHodDS.jpg&w=1080&q=75',
            link: '',
        },
    ];

    return (
        <>
            {/* Banner */}
            <div className="mt-[22px] mb-[30px]">
                <img src={Banner} alt="Banner..." className="w-full h-auto max-w-full object-cover" />
            </div>

            {/* TOP__CATEGORIES */}
            <div className="flex items-center justify-center w-full my-6 px-6 py-4">
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
            <div className="px-4 py-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {attarProducts.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
            {/* panjabi__product */}
            < div className="flex items-center px-6 py-4" >
                <p className="uppercase font-medium text-[22px] xls:text-lg xms:text-lg xs:text-lg">panjabi</p>
                <div className="flex-grow border-t border-gray-300 mx-4"></div>
                <a className="px-4 py-2 text-white text-sm bg-secondary rounded-full bg-black" href="/category/panjabi">View All</a>
            </div >
            {/* panjabi__product */}
            <div className="px-4 py-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    panjabi__product.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))
                }
            </div>
            {/* t-shirt */}
            < div className="flex items-center px-6 py-4" >
                <p className="uppercase font-medium text-[22px] xls:text-lg xms:text-lg xs:text-lg">t-shirt</p>
                <div className="flex-grow border-t border-gray-300 mx-4">
                </div>
                <a className="px-4 py-2 text-white text-sm bg-secondary rounded-full bg-black" href="/category/t-shirt">View All</a>
            </div >
            {/* t_shirt_product */}
            <div className="px-4 py-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    T_shirt.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))
                }
            </div>
            {/* pant & trouser */}
            <div className="flex items-center px-6 py-4">
                <p className="uppercase font-medium text-[22px] xls:text-lg xms:text-lg xs:text-lg">pant &amp; trouser</p>
                <div className="flex-grow border-t border-gray-300 mx-4">
                </div>
                <a className="px-4 py-2 text-white text-sm bg-secondary rounded-full bg-black" href="/category/pant-trouser">View All</a>
            </div >
            {/* pant_trouser */}
            <div className="px-4 py-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    pant_trouser.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))
                }
            </div>
            {/* Natural_foods */}
            <div className="flex items-center px-6 py-4">
                <p className="uppercase font-medium text-[22px] xls:text-lg xms:text-lg xs:text-lg">natural&nbsp;foods</p>
                <div className="flex-grow border-t border-gray-300 mx-4"></div>
                <a className="px-4 py-2 text-white text-sm bg-secondary rounded-full bg-black" href="/category/natural-foods">View All</a>
            </div>
            {/* Natural_foods_add_product */}
            <div className="px-4 py-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    Natural_foods.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))
                }
            </div>

            {/* men's clothing */}
            <div class="flex items-center px-6 py-4">
                <p class="uppercase font-medium text-[22px] xls:text-lg xms:text-lg xs:text-lg">men's clothing</p>
                <div class="flex-grow border-t border-gray-300 mx-4">
                </div>
                <a class="px-4 py-2 text-white text-sm bg-secondary rounded-full bg-black" href="/category/mens-clothing">View All</a>
            </div>
            {/* men's_showes_clothing__product */}
            <div className="px-4 py-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    showes_clothing.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))
                }
            </div>
            <h2>helowww bd</h2>
        </>
    );
};

export default Home;