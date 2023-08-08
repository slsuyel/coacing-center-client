import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const PaymentFailed = () => {
    return (
        <Container className="mt-5 pt-5">
            <Row>
                <Col md={{ size: 6, offset: 3 }} className='card'>
                    <div className="text-center">
                        <h1 className='my-3'>OPPS!! <br /> Payment Failed</h1>
                        <p>Your payment has been Failed </p>
                        <p>Please try again !</p>
                    </div>
                    <div className='text-center my-4'>
                        <Link style={{ backgroundColor: 'rgb(22, 2, 149)' }}
                            className="btn fw-bold text-warning"
                            to="/"
                        >
                            Go to home
                        </Link>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default PaymentFailed;