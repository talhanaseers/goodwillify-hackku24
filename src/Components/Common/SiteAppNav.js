import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#2E2C2C' }} variant="dark">
      <Container>
                    <Navbar.Brand><Link to='/homepage' className="navbar-brand">Hacklify</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-md-auto">
                            <Link to='/About' className="nav-link">About</Link>  
                            <Link to='/Contact' className="nav-link">Contact Us</Link> 
                            
                                
                        </Nav>
                    </Navbar.Collapse>
                </Container>
      </Navbar>
     
    
    </>
  );
}

export default ColorSchemesExample;