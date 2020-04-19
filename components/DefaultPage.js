import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Popover from 'react-bootstrap/Popover'
import { SocialIcon } from 'react-social-icons';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
export default class DefaultPage extends React.Component{
    render(){
        return(
            <Container>
                <h1 className = "text-center title">This will be updated in the following days. Stay tuned!</h1>
                {/**<h1>This will be updated in the following days. Stay tuned!</h1>**/}
            </Container>
        );
    }
}