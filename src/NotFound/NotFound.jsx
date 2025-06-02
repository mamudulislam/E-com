import React from 'react';
import Container from '../golobalcomponentes/Containear';

const NotFound = () => {
    return (

        <Container>
            <div>
                <div className='mt-20 mb-20'>
                    <div className="text-center animate-fadeIn">
                        <h1 className="text-8xl font-extrabold text-black tracking-wide animate-bounce">
                            404
                        </h1>
                        <p className="mt-6 text-2xl text-black opacity-80 animate-pulse">
                            Oops! The page you're looking for is lost in space.
                        </p>
                        <a href="/" className="mt-8 inline-block px-8 py-3 text-xl font-semibold text-white bg-black rounded-lg shadow-xl hover:bg-gray-800 hover:scale-105 transform transition-all hover:animate-pulse">
                            Take Me Home
                        </a>
                    </div>
                </div>
            </div>
        </Container >

    );
};

export default NotFound;
