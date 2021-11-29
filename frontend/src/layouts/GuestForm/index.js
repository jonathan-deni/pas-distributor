import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class GuestForm extends Component {
    render() {
        return (
            <section id="guestForm" className="container-guestform">
                <div className="form-title">Guest Form</div>
                <div className="title-form">
                    <Form>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for=" name">Name</Label>
                                    <Input type="name" name=" name" id="name" placeholder="Name" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="phoneNum">Phone Number</Label>
                                    <Input type="number" name="phoneNum" id="phoneNum" placeholder="088888888888" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="textarea" name="address" id="address" placeholder="Sudirman Street no.24 Jakarta" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Attendees</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="greetings">Greetings</Label>
                            <Input type="textarea" name="greetings" id="greetings" />
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" name="check" id="exampleCheck" />
                            <Label for="exampleCheck" check>Check me out</Label>
                        </FormGroup>
                        <Row form md ={3}>
                            <Col md={6}>
                            </Col>
                            <Col md={1}>
                                <Button>Submit</Button>
                            </Col>
                            <Col md={6}>
                            </Col>
                        </Row>
                        
                    </Form>
                </div>
            </section>
        );
    }
}
