import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from './golobalcomponentes/Containear';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className="text-sm breadcrumbs px-4 py-3 text-gray-700 bg-gray-100">
            <Container>
                <ol className="flex items-center space-x-1">
                    <li>
                        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                    </li>
                    {pathnames.map((name, index) => {
                        const formattedName = decodeURIComponent(name)
                            .replace(/-/g, ' ')
                            .replace(/^\w/, (c) => c.toUpperCase());

                        return (
                            <li key={index} className="flex items-center">
                                <span className="mx-2">/</span>
                                <span className="text-gray-500 capitalize">{formattedName}</span>
                            </li>
                        );
                    })}
                </ol>
            </Container >
        </nav>
    );
};

export default Breadcrumb;
