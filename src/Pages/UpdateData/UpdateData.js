import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const UpdateData = () => {
    const { updateId } = useParams();
    console.log(updateId);


    const nameRef = useRef('');
    const priceRef = useRef('');


    const handleUpdateProduct = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const product = { name, price }
        console.log(product);

        fetch(`http://localhost:4000/products/${updateId}`, {
            method: "PUT",
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
            <h1>This is from Update Page</h1>
            <div className="container mx-auto my-3 w-50">
                <Form onSubmit={handleUpdateProduct}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={nameRef} type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={priceRef} type="number" placeholder="Price" />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Update
                    </Button>
                </Form>
            </div>
            <Button as={Link} to='/'>Home</Button>
        </div>
    );
};

export default UpdateData;