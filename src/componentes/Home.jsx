import React from 'react'
import Banner from '../assets/Banner.png'

const Home = () => {
    return (
        <>
            <div className="mt-[22px] mb-[30px]">
                <img src={Banner} alt="Banner..." className="w-full h-auto max-w-[100%] object-cover" />
            </div>
        </>
    )
}

export default Home;
