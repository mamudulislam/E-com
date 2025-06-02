import React from 'react'
import ProductCard from '../componentes/Productcard'
import { Helmet } from 'react-helmet-async'
import Container from '../golobalcomponentes/Containear'

const Perfumes = () => {
    const Perfumes = [
        {
            name: 'Royal Sapphire - 6ml',
            badges: 30,
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FLpQ3Z3AwA3ZxdIzkyQo.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Red African - 6ml',
            badges: 30,
            price: 550,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FLpQ3Z3AwA3ZxdIzkyQo.jpg&w=1080&q=75',
            link: '',
        }
    ]
    return (
        <div>
            <Helmet>
                <title>Perfumes</title>
            </Helmet>
            <Container>
                <div className="mt-20 mb-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Perfumes.map((product, index) => (
                        <ProductCard key={index} {...product} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Perfumes