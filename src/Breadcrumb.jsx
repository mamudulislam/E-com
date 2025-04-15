import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className="text-sm breadcrumbs px-4 py-3 text-gray-700 bg-gray-100">
            <ol className="flex items-center space-x-1">
                <li>
                    <Link to="/" className="text-blue-600 hover:underline">
                        Home
                    </Link>
                </li>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const formattedName = decodeURIComponent(name)
                        .replace(/-/g, ' ')
                        .replace(/^\w/, (c) => c.toUpperCase());

                    return (
                        <li key={routeTo} className="flex items-center">
                            <span className="mx-2">/</span>
                            {isLast ? (
                                <span className="text-gray-500">{formattedName}</span>
                            ) : (
                                <Link
                                    to={routeTo}
                                    className="text-blue-600 hover:underline capitalize"
                                >
                                    {formattedName}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
