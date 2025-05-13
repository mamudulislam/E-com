import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8">
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-semibold">Sign In</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-orange-500 hover:underline">
                            Create one
                        </Link>
                    </p>
                </div>
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="relative">
                        <label className="block text-sm font-medium mb-1">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="Enter your password"
                        />
                        <span className="absolute right-3 top-9 text-gray-500 cursor-pointer">👁️</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <Link to="/forgot-password" className="text-orange-500 hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                    >
                        LOG IN
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
