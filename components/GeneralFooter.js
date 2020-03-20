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
export default class GeneralNav extends React.Component{
    render(){
        return(
            <div className="footer " id="contact">
                <h4><strong>Contact info</strong></h4>
                <div className = "icons">             
                    <Col><SocialIcon  url="https://www.facebook.com/raulalfredo.alcantaracastillo" target="_blank"/></Col>
                    <Col><SocialIcon  url="mailto:ralcanta@mit.edu"  target="_blank" /></Col>
                    <Col><SocialIcon  url="https://github.com/ralcant" target="_blank" bgColor = 'black' />  </Col>                 
                </div>
                <p><i>Cellphone: (203) 524-0315</i></p> 
            </div>

        );
    }
}