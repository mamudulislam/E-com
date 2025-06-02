import React from 'react'
import ProductCard from '../componentes/Productcard'
import { Helmet } from 'react-helmet-async'
import Container from '../golobalcomponentes/Containear'

const pant = () => {
    const pant = [
        {
            name: 'Mens Denim Pant - KF04',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F4y-yaeE4JKQYZdVXgHd.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Mens Denim Pant - KF04',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F4y-yaeE4JKQYZdVXgHd.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Mens Denim Pant - KF04',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F4y-yaeE4JKQYZdVXgHd.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Mens Denim Pant - KF04',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F4y-yaeE4JKQYZdVXgHd.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Mens Denim Pant - KF04',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F4y-yaeE4JKQYZdVXgHd.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Mens Denim Pant - KF04',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F4y-yaeE4JKQYZdVXgHd.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Mens Denim Pant - KF04',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F4y-yaeE4JKQYZdVXgHd.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Mens Denim Pant - KF04',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F4y-yaeE4JKQYZdVXgHd.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Mens Denim Pant - KF04',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F4y-yaeE4JKQYZdVXgHd.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Mens Denim Pant - KF04',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F4y-yaeE4JKQYZdVXgHd.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Mens Denim Pant - KF04',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F4y-yaeE4JKQYZdVXgHd.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Mens Denim Pant - KF04',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F4y-yaeE4JKQYZdVXgHd.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Mens Denim Pant - KF04',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F4y-yaeE4JKQYZdVXgHd.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Mens Denim Pant - KF04',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F4y-yaeE4JKQYZdVXgHd.jpg&w=1080&q=75',
            link: '',
        },

    ]
    return (
        <div>
            <Helmet>
                <title>pant</title>
            </Helmet>
            <Container>
                <div className="mt-20 mb-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {pant.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default pant