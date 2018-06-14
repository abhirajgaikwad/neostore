import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem , Form, FormGroup, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar expand="md">
                    <Container>
                        <NavbarBrand href="/">NeoStore</NavbarBrand>
                        <Form>
                            <FormGroup className="mb-0">
                            <InputGroup>
                                <Input type="search" name="search" id="exampleSearch" placeholder="Search..." />
                                <InputGroupAddon addonType="append">Search</InputGroupAddon>
                            </InputGroup>
                            </FormGroup>
                        </Form>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Cart</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                Account
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Login
                                    </DropdownItem>
                                    <DropdownItem>
                                        Register
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;