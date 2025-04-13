import React from 'react'
import ProductCard from '../componentes/Productcard'

const HalfSleeve = () => {
    const HalfSleeve = [
        {
            name: 'Royal Sapphire - 6ml',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FuuaAt8WdWob1zG9K_oj.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Royal Sapphire - 6ml',
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FuuaAt8WdWob1zG9K_oj.jpg&w=1080&q=75',
            link: '',
        },

    ]
    return (
        <div>
            <div className="px-4 py-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {HalfSleeve.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
    )
}

export default HalfSleeve