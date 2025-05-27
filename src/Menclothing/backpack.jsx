import React from 'react'
import { Helmet } from 'react-helmet-async'

const backpack = () => {
    return (
        <div>
            <Helmet>
                <title>backpack</title>
            </Helmet>
            <div>
                <h1 class="p-2.5 text-3xl text-gray-500 my-6 mx-27">THis is backpack</h1>
            </div>
        </div>
    )
}

export default backpack