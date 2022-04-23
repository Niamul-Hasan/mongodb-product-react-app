import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h1 style={{ color: 'teal' }}>This is Home Page</h1>
            {
                products.map(product => <p key={product._id}>{product.name}</p>)
            }
            <Button as={Link} to="add">Go For Adding</Button>
        </div>
    );
};

export default Home;