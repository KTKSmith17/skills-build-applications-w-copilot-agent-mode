
import './App.css';
import { Navbar, Nav, Container, Table, Button, Card, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import octofitLogo from './octofitapp-small.png';


function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);


  return (
    <div className="App">
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={octofitLogo} alt="OctoFit Logo" className="octofit-logo" />
            OctoFit Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#users">Users</Nav.Link>
              <Nav.Link href="#teams">Teams</Nav.Link>
              <Nav.Link href="#activities">Activities</Nav.Link>
              <Nav.Link href="#leaderboard">Leaderboard</Nav.Link>
              <Nav.Link href="#workouts">Workouts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <h1 className="mb-4">Welcome to OctoFit Tracker</h1>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Sample Data Table</Card.Title>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>thundergod</td>
                  <td>thundergod@mhigh.edu</td>
                  <td><Button variant="primary" onClick={handleShow}>View</Button></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>metalgeek</td>
                  <td>metalgeek@mhigh.edu</td>
                  <td><Button variant="primary" onClick={handleShow}>View</Button></td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        <Button variant="success" onClick={handleShow} className="mb-3">Open Modal</Button>

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" defaultValue="thundergod@mhigh.edu" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" defaultValue="thundergodpassword" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default App;
