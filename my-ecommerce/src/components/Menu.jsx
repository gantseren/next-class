"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Dropdown from "react-bootstrap/Dropdown" // Add this import

function Menu() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json))
  }, [])

  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>Home</Nav.Link>
            <Nav.Link href='#action2'>Link</Nav.Link>
            <NavDropdown title='Categories' id='navbarScrollingDropdown'>
              {categories.map((category, index) => (
                <NavDropdown.Item
                  as={Link}
                  key={index}
                  href={`/products/category/${category.toLowerCase()}`}
                >
                  {category}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#' disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
          <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
              Singer
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} href={`/singer/login`}>
                Login
              </Dropdown.Item>
              <Dropdown.Item as={Link} href={`/singer/register`}>
                Register
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
