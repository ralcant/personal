import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default class GeneralNav extends React.Component{
    render(){
        return(
            //<>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                        {/*<Nav.Link href="/about">About</Nav.Link>*/}
                        <Nav.Link href="/cs">Computer Science</Nav.Link>
                        <Nav.Link href="/math">Math</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/research">Research</Nav.Link>
                        <Nav.Link href="/personal">Personal</Nav.Link>

                    </Nav>
                </Navbar>
            //</>
        )
    }
}