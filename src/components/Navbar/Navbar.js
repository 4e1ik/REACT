import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function BasicExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to={'/'}>Home</Link>
                <Link to={'/meal'}>Random meal</Link>
            </Container>
        </Navbar>
    );
}

export default BasicExample;