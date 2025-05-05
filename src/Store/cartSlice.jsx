// src/Store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.name === newItem.name);

            if (!existingItem) {
                state.items.push({
                    name: newItem.name,
                    price: newItem.discountedPrice || newItem.price,
                    quantity: 1,
                    totalPrice: newItem.discountedPrice || newItem.price,
                    image: newItem.image,
                });
            } else {
                existingItem.quantity += 1;
                existingItem.totalPrice += existingItem.price;
            }

            state.totalQuantity += 1;
            state.totalAmount += newItem.discountedPrice || newItem.price;
        },

        removeItemFromCart(state, action) {
            const name = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount -= existingItem.totalPrice;
                state.items = state.items.filter(item => item.name !== name);
            }
        },

        increaseQuantity(state, action) {
            const item = state.items.find(i => i.name === action.payload);
            if (item) {
                item.quantity += 1;
                item.totalPrice += item.price;
                state.totalQuantity += 1;
                state.totalAmount += item.price;
            }
        },

        decreaseQuantity(state, action) {
            const item = state.items.find(i => i.name === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.totalPrice -= item.price;
                state.totalQuantity -= 1;
                state.totalAmount -= item.price;
            } else if (item && item.quantity === 1) {
                state.totalQuantity -= 1;
                state.totalAmount -= item.price;
                state.items = state.items.filter(i => i.name !== action.payload);
            }
        },

        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },
    },
});

export const {
    addItemToCart,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
