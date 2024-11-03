// src/components/Root.js

import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Root = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        let res = await fetch('https://fakestoreapi.com/products');
        let prodList = await res.json();
        setProducts(prodList);
    }

    if (products.length === 0) {
        return <h1>Fetching data...</h1>;
    }

    return (
        <div>
            <Navbar />
            <Outlet context={products} />
        </div>
    );
};

export default Root;
