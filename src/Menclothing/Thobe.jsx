import React from 'react'
import ProductCard from '../componentes/Productcard'
import { Helmet } from 'react-helmet-async'
import Container from '../golobalcomponentes/Containear'

const Thobe = () => {
    const Thobe = [
        {
            name: 'Premium Cotton Thobe - 903',
            badges: 30,
            price: 2590,
            discountedPrice: 1990,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FsfP_I8e6MJqrF3KIBq9.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Premium Cotton Thobe - 903',
            badges: 30,
            price: 2590,
            discountedPrice: 1990,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FsfP_I8e6MJqrF3KIBq9.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Premium Cotton Thobe - 903',
            badges: 30,
            price: 2590,
            discountedPrice: 1990,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FsfP_I8e6MJqrF3KIBq9.jpg&w=1080&q=75',
            link: '',
        },

    ]

    return (
        <div>
            <Helmet>
                <title>Thobe</title>
            </Helmet>
            <Container>
                <div className="mt-20 mb-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Thobe.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Thobe