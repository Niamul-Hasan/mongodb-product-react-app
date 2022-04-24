import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/products/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(remainData => {
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
                console.log(remainData);
            })

    }
    return (
        <div>
            <h1 style={{ color: 'teal' }}>This is Home Page</h1>
            {
                products.map(product => <p key={product._id}>{product.name}
                    <Button style={{ color: 'red', marginLeft: '10px' }} onClick={() => handleDelete(product._id)}>X</Button>
                    <Button style={{ backgroundColor: 'orange', marginLeft: '10px' }}
                        onClick={() => navigate(`/update/${product._id}`)}

                    >Edit</Button>
                </p>)
            }
            <Button as={Link} to="add">Go For Adding</Button>
        </div>
    );
};

export default Home;