import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddProducts = () => {
    const nameRef = useRef('');
    // const brandRef = useRef('');
    const priceRef = useRef('');


    const handleAddProduct = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        // const brand = brandRef.current.value;
        const price = priceRef.current.value;
        const product = { name, price }
        console.log(product);

        fetch('http://localhost:4000/products', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(product => {
                console.log("success", product);
            })

    }

    return (
        <div>
            <h1>This is from add</h1>
            <div className="container mx-auto my-3 w-50">
                <Form onSubmit={handleAddProduct}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={nameRef} type="text" placeholder="Enter name" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={brandRef} type="text" placeholder="Enter brand" />
                    </Form.Group> */}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={priceRef} type="number" placeholder="Price" />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                        Add
                    </Button>
                </Form>
            </div>
            <Button as={Link} to='/'>Home</Button>
        </div>
    );
};

export default AddProducts;