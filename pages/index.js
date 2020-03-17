
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import GeneralNav from '../components/GeneralNav'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GeneralFooter from '../components/GeneralFooter'
import Layout from '../components/Layout'

export default class Index extends React.Component{
    getContent = () => {
        return(
            <Container>
                <h1 className = "text-center title">Raul Alcantara</h1>
                <div className = "info">
                    <div>
                        <p>
                            <mark>Hey there! I am Raul. </mark><br></br>
                            I am a student from Peru with a lot of aspirations and dreams. <br></br>
                            Currently, I am studying at the Massachusetts Institute of Technology (MIT).
                        </p>
                    </div>
                    <Col xs={6} md={4}>
                        <Image 
                            src= "../static/raul_alcantara_2.PNG"
                            alt = "This is me!"
                            className = "pic"
                            rounded ={true}
                            //roundedCircle = {true}
                            fluid = {true}
                        />
                    </Col>
                </div>
            </Container>
        )
    }
    render(){
        return(
            <Layout
            content = {this.getContent()}
            />
        );
    }
}