import React from 'react'
import ProductCard from '../componentes/Productcard'
import { Helmet } from 'react-helmet-async'

const Tupi = () => {
    const Tupi = [
        {
            name: 'Firoz Ambush Tupi - Blue Floral',
            badges: 30,
            price: 650,
            discountedPrice: 350,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FgjrcD0b5N6Mp6GCq5V8.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Firoz Ambush Tupi - Blue Floral',
            badges: 30,
            price: 650,
            discountedPrice: 350,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FgjrcD0b5N6Mp6GCq5V8.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Firoz Ambush Tupi - Blue Floral',
            badges: 30,
            price: 650,
            discountedPrice: 350,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FgjrcD0b5N6Mp6GCq5V8.jpg&w=1080&q=75',
            link: '',
        },

    ]

    return (
        <div>
            <Helmet>
                <title>Tupi</title>
            </Helmet>
            <div className="px-4 py-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Tupi.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
    )
}

export default Tupi