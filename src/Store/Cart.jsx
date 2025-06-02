import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    clearCart,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
} from '../Store/cartSlice';
import Container from '../golobalcomponentes/Containear';

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
        <Container>
            <div className="mt-20 mb-20 px-4">
                <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">🛒 Your Shopping Cart</h1>

                {cart.totalQuantity === 0 ? (
                    <p className="text-center text-gray-500 text-lg">Your cart is empty. Start shopping now!</p>
                ) : (
                    <>
                        <div className="space-y-6">
                            {cart.items.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md p-4 rounded-lg"
                                >
                                    <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded mr-4 border"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-lg">{item.name}</h3>
                                            <p className="text-sm text-gray-600">{item.price}৳ each</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => handleDecrease(item.name)}
                                            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full text-lg font-bold"
                                        >
                                            −
                                        </button>
                                        <span className="text-md font-medium">{item.quantity}</span>
                                        <button
                                            onClick={() => handleIncrease(item.name)}
                                            className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full text-lg font-bold"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className="flex flex-col items-center gap-2 mt-3 sm:mt-0">
                                        <p className="font-medium text-lg">{item.totalPrice}৳</p>
                                        <button
                                            onClick={() => handleRemoveItem(item.name)}
                                            className="text-black bg-white border border-black rounded-md px-4 py-1 text-sm font-medium hover:bg-black hover:text-white transition duration-200 ease-in-out"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 border-t pt-6">
                            <div className="flex justify-between text-lg mb-4 font-semibold">
                                <span>Total:</span>
                                <span>{cart.totalAmount}৳</span>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between gap-4">
                                <button
                                    onClick={handleClearCart}
                                    className="w-full sm:w-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                                >
                                    🧹 Clear Cart
                                </button>
                                <button
                                    className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                                >
                                    ✅ Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Container>
    );
};

export default Cart;
