import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import './Footer.css';

class Footer extends Component {
    render() {
        const companyData = {
            name: 'Neosoft',
            description: 'NeoSOFT Technologies is here at your quick and easy service for shooping .',
            email: 'contact@neosofttech.com',
            phone: '+91 0000000000',
            location: 'Mumbai, India'
        }
        return (
            <footer className="text-center">
                <Container>
                    <Row className="">
                        <Col xs="4">
                            <h4 className="text-center">About Company</h4>
                            <p>{companyData.description}</p>
                            <h5 className="text-center">Contact information</h5>
                            <p>Email: {companyData.email}</p>
                            <p>Phone: {companyData.phone}</p>
                            <p>{companyData.location}</p>
                        </Col>
                        <Col xs="4">
                            <h4 className="text-center">Information</h4>
                            <p>Terms &amp; Conditions</p>
                            <p>Guarantee &amp; Return Policy</p>
                            <p>Contact Us</p>
                            <p>Privacy Policy</p>
                            <p>Locate Us</p>
                        </Col>
                        <Col xs="4">
                            <h4 className="text-center">Newsletter</h4>
                            <p>Sign up to get exclusive offers from our favorite brands and to be well up in the news.</p>
                            <Form>
                                <FormGroup>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="your email..." />
                                </FormGroup>
                                <Button>Subscribe</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;