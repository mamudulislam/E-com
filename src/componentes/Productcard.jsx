// componentes/Productcard.jsx
import React from 'react';

const ProductCard = ({ name, price, discountedPrice, image, link }) => {
    return (
        <div>
            <div className="group relative border border-black rounded-t">
                <div className="relative overflow-hidden group">
                    <a href={link}>
                        <img
                            alt={name}
                            width={500}
                            height={500}
                            decoding="async"
                            className="rounded w-full h-full transform transition-transform duration-[1400ms] group-hover:scale-[1.3]"
                            src={image}
                            style={{ color: 'transparent' }}
                        />
                    </a>
                </div>
                <button className="absolute top-2 left-2 rounded-full bg-secondary text-white text-xs px-3 py-1 bg-black">
                    20 %
                </button>
                <div className="mt-3 p-2">
                    <p className="text-[#333] font-medium text-[15px] text-center">{name}</p>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                        <p className="text-sm line-through">{price}৳</p>
                        <p className="text-secondary font-bold text-sm">{discountedPrice}৳</p>
                    </div>
                </div>
                <div className="w-full flex justify-between space-x-2">
                    <button className="bg-secondary text-white w-full py-2 text-sm capitalize font-semibold bg-black">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
