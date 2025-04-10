import React from 'react'
import Banner from '../assets/Banner.png'

const Home = () => {
    const products = [
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

    return (
        <>
            <div className="mt-[22px] mb-[30px]">
                <img src={Banner} alt="Banner..." className="w-full h-auto max-w-[100%] object-cover" />
            </div>
            {/* TOP_CATEGORIES */}
            <div class="flex items-center justify-center w-full my-2 md:my-6 lg:my-6 xl:my-6">
                <div class="h-px bg-gray-300 flex-grow"></div>
                <span class="mx-4 uppercase font-medium text-[22px] xls:text-lg xms:text-lg xs:text-lg">TOP CATEGORIES</span>
                <div class="h-px bg-gray-300 flex-grow"></div>
            </div>
            {/* TOP_CATEGORIES */}

            {/* IMG */}
            <div className="flex flex-wrap justify-center gap-4 p-4">
                {products.map((product) => (
                    <div key={product.id} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={product.imgSrc} alt={product.altText} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{product.altText}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {/* After */}
            <div class="flex items-center px-6 py-4">
                <p class="uppercase font-medium text-[22px] xls:text-lg xms:text-lg xs:text-lg">attar</p>
                <div class="flex-grow border-t border-gray-300 mx-4"></div>
                <a class="px-4 py-2 text-white text-sm bg-secondary rounded-full bg-black" href="/category/attar">View All</a>
            </div>

            {/* ATTAR_Product */}

        </>
    )
}

export default Home;
