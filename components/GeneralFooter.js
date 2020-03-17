import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Popover from 'react-bootstrap/Popover'

export default class GeneralNav extends React.Component{
    popover =  () => {
        <Popover id="popover-basic">
            <Popover.Title as="h3">Popover right</Popover.Title>
            <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
            </Popover.Content>
      </Popover>
    }
    render(){
        return(
            <p className="footer" id="contact">
                <strong>Contact info</strong>

                <p >Cellphone: (203)524-0315</p>
                <p >Email: <a href = {"mailto:ralcanta@mit.edu"}>ralcanta@mit.edu"</a></p>
                {/* <p >Facebook: <a href = https://www.facebook.com/raulalfredo.alcantaracastillo target="_blank">Click here</a></p> */}
                
            </p>
            // <>
            //     <Navbar fixed="bottom" bg="dark" variant="dark">
            //         <Navbar.Brand href="https://www.youtube.com/watch?v=QUwxKWT6m7U&list=RDMM1at7kKzBYxI&index=27">Home</Navbar.Brand>
            //         <Nav className="mr-auto">
            //             {/*<Nav.Link href="/about">About</Nav.Link>*/}
            //             <Nav.Link href="/computer_science">Computer Science</Nav.Link>
            //             <Nav.Link href="/math">Math</Nav.Link>
            //             <Nav.Link href="/projects">Projects</Nav.Link>
            //             <Nav.Link href="/research">Research</Nav.Link>
            //             <Nav.Link href="/research">Personal</Nav.Link>

            //         </Nav>
            //     </Navbar>
            // </>
            // <div className = "footer">
            //     <p> Contact </p>
            //     <Card className="text-center" bg = "light" style={{ width: '50rem' }}>
            //         <Card.Header>Contact Info</Card.Header>
            //         <Card.Body>
            //             <Card.Title>Special title treatment</Card.Title>
            //             <Card.Title>Special title treatment</Card.Title>
            //             <Card.Title>Special title treatment</Card.Title>
            //             <Card.Title>Special title treatment</Card.Title>
            //             <Card.Title>Special title treatment</Card.Title>

            //         </Card.Body>
            //     </Card>
            // </div>
            /* <>
                <OverlayTrigger
                    placement=  "bottom"
                    trigger = "click"
                    overlay={this.popover}
                    
                >
                    <Button variant="secondary">Contact me</Button>
                </OverlayTrigger>
            </> */

        );
    }
}