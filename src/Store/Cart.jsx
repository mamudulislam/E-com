import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    clearCart,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
} from '../Store/cartSlice';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveItem = (name) => {
        dispatch(removeItemFromCart(name));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleIncrease = (name) => {
        dispatch(increaseQuantity(name));
    };

    const handleDecrease = (name) => {
        dispatch(decreaseQuantity(name));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

            {cart.totalQuantity === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty</p>
            ) : (
                <>
                    <div className="space-y-4">
                        {cart.items.map((item) => (
                            <div
                                key={item.name}
                                className="flex flex-col sm:flex-row items-center justify-between border-b pb-4"
                            >
                                <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded mr-4"
                                    />
                                    <div>
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-sm text-gray-600">{item.price}৳ each</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleDecrease(item.name)}
                                        className="px-2 py-1 bg-gray-200 rounded"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => handleIncrease(item.name)}
                                        className="px-2 py-1 bg-gray-200 rounded"
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="flex items-center gap-4 mt-2 sm:mt-0">
                                    <p className="font-medium">{item.totalPrice}৳</p>
                                    <button
                                        onClick={() => handleRemoveItem(item.name)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 border-t pt-4">
                        <div className="flex justify-between mb-4">
                            <span className="font-bold">Total:</span>
                            <span className="font-bold">{cart.totalAmount}৳</span>
                        </div>
                        <div className="flex justify-between">
                            <button
                                onClick={handleClearCart}
                                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                Clear Cart
                            </button>
                            <button className="px-4 py-2 bg-black text-white rounded">
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
