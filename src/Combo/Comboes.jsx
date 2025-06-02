import React from 'react'
import { Helmet } from 'react-helmet-async'
import Container from '../golobalcomponentes/Containear'

const Combo = () => {
    return (
        <div>
            <Helmet>
                <title>comboes</title>
            </Helmet>
            <div>
                <Container>
                    <h1 className='mt-20 mb-20 text-3xl text-gray-500 my-6 mx-27'>
                        THis is combo product
                    </h1>
                </Container>
            </div>
        </div>

    )
}

export default Combo