import React from 'react';
import { Card, Button } from 'react-bootstrap';

const User = (props) => {
    return (
        <Card className="" border="primary" style={{ width: '18rem' }}>
            <Card.Header>Name - {props.name}</Card.Header>
            <Card.Body>
                <Card.Title>ID - {props.id}</Card.Title>
                <Card.Text>
                    {props.name}
                </Card.Text>
                <Button variant="primary"><b>Ratings</b> - {props.stars}</Button>
            </Card.Body>
        </Card>
    )
}
export default User;