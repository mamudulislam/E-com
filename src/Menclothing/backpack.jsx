import React from 'react'
import { Helmet } from 'react-helmet-async'
import Container from '../golobalcomponentes/Containear'

const backpack = () => {
    return (
        <div>
            <Helmet>
                <title>backpack</title>
            </Helmet>
            <Container>
                <div className='mt-20 mb-20'>
                    <h1 class="p-2.5 text-3xl text-gray-500 my-6 mx-27">THis is backpack</h1>
                </div>
            </Container>
        </div>
    )
}

export default backpack