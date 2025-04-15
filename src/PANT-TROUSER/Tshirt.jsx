import React from 'react'
import ProductCard from '../componentes/Productcard'

const Tshirt = () => {
    const Tshirt = [
        {
            name: 'Marvel T-shirt',
            badges: 30,
            price: 550,
            discountedPrice: 440,
            image: 'https://static.qns.digital/img/p/2/4/6/6/5/9/5/2466595.jpg',
            link: '',
        },
        {
            name: 'Marvel T-shirt',
            badges: 30,
            price: 550,
            discountedPrice: 440,
            image: 'https://static.qns.digital/img/p/2/4/6/6/5/9/5/2466595.jpg',
            link: '',
        },
        {
            name: 'Marvel T-shirt',
            badges: 30,
            price: 550,
            discountedPrice: 440,
            image: 'https://static.qns.digital/img/p/2/4/6/6/5/9/5/2466595.jpg',
            link: '',
        },

    ]
    return (
        <div>
            <div className="px-4 py-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Tshirt.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
    )
}

export default Tshirt