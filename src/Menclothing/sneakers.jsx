import React from 'react'
import ProductCard from '../componentes/Productcard'
import { Helmet } from 'react-helmet-async'
import Container from '../golobalcomponentes/Containear'

const sneakers = () => {
    const sneakers = [
        {
            name: 'Premium Kids Sneakers : Y252015',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FiyHHDIBpNqFW71rnHPu.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Premium Kids Sneakers : Y252015',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FiyHHDIBpNqFW71rnHPu.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Premium Kids Sneakers : Y252015',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FiyHHDIBpNqFW71rnHPu.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Premium Kids Sneakers : Y252015',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FiyHHDIBpNqFW71rnHPu.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Premium Kids Sneakers : Y252015',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FiyHHDIBpNqFW71rnHPu.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Premium Kids Sneakers : Y252015',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FiyHHDIBpNqFW71rnHPu.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Premium Kids Sneakers : Y252015',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FiyHHDIBpNqFW71rnHPu.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Premium Kids Sneakers : Y252015',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FiyHHDIBpNqFW71rnHPu.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Premium Kids Sneakers : Y252015',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FiyHHDIBpNqFW71rnHPu.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Premium Kids Sneakers : Y252015',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FiyHHDIBpNqFW71rnHPu.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Premium Kids Sneakers : Y252015',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FiyHHDIBpNqFW71rnHPu.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Premium Kids Sneakers : Y252015',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FiyHHDIBpNqFW71rnHPu.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Premium Kids Sneakers : Y252015',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FiyHHDIBpNqFW71rnHPu.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Premium Kids Sneakers : Y252015',
            badges: 910,
            price: 2400,
            discountedPrice: 1490,
            image: 'https://believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FiyHHDIBpNqFW71rnHPu.jpg&w=1080&q=75',
            link: '',
        },

    ]

    return (
        <div>
            <Helmet>
                <title>sneakers</title>
            </Helmet>
            <Container>
                <div className="mt-20 mb-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {sneakers.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default sneakers