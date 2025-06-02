import React from 'react'
import ProductCard from '../componentes/Productcard';
import { Helmet } from 'react-helmet-async';
import Container from '../golobalcomponentes/Containear';

const NaturalFoods = () => {
    const Natural_foods = [
        {
            name: 'Summer Super Food Combo',
            price: 550,
            badges: 30,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FmunLb1BgQlybT5XdXqg.jpg&w=1080&q=75',
            link: '',
        },
        {
            name: 'Litchi Flower Honey - 2kg',
            price: 550,
            badges: 30,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2F6MN0Au-Pm1sbxZ--2nS.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Ajwa Premium - 1 kg',
            price: 550,
            badges: 30,

            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FCQc1RY05QTEEa9oNW2p.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Sufri Mariyam Premium - 1 kg',
            price: 550,
            badges: 30,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FbspIwgF_HPtyKmu9XCe.jpg&w=1080&q=75',
            link: '',
        }, {
            name: 'Premium Dates Combo - 4 in 1',
            price: 550,
            badges: 30,
            discountedPrice: 440,
            image: 'https://www.believerssign.com.bd/_next/image?url=https%3A%2F%2Fapi.believerssign.com.bd%2Fpublic%2Fproduct%2FMi-dppX322WjXUI1rJX.jpg&w=1080&q=75',
            link: '',
        },
    ];

    return (
        <div>
            <Helmet>
                <title>NaturalFoods</title>
            </Helmet>
            <Container>
                <div className="mt-20 mb-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        Natural_foods.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default NaturalFoods