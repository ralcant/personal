import GeneralFooter from '../components/GeneralFooter'
import GeneralNav from '../components/GeneralNav'
import Container from 'react-bootstrap/Container';
import Layout from '../components/Layout'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
export default class Math extends React.Component{
    getContent = () => {
        return(
            <Container>
                <h1 className = "text-center title">Math</h1>
                <h3><strong>I've lived in math most of my life</strong></h3>

                <Row>
                    <Col xs={12} md={8}>
                        <p className="intro">
                            When I was in elementary school, my mom introduced me to this concept called <i>competitive math</i>. <br></br>
                            Since then, I participated in several competitions all over the country and I found out how passionate I was about it. <br></br>
                            Later at the age of twelve, I was offered a scholarship to study in the capital by the Saco Oliveros Academy, and this was the decision that allowed me 
                            to expand my horizons and show the world that I was ready to compete internationally.
                        </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Row>
                            <Image 
                                src= "../static/math.jpg"
                                alt = "This is me!"
                                className = "pic"
                                rounded ={true}
                                //roundedCircle = {true}
                                fluid = {true}
                            />
                        </Row>
                        <Row>
                            <Col className= "text-center" >
                                <i>Pic taken from <a target="_blank" href="https://www.wellesley.edu/news/2017/stories/node/120511">here</a></i>
                            </Col>
                        </Row>
                    </Col>
                </Row>
 
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <h3><strong>Contributions: </strong></h3>
                                <Row>
                                    <ol>
                                        <li>I created a problem in Number Theory for the Romanian Master Olympiad <br></br>
                                            &#x1F826; You can find the problem (#4) here: <a target="_blank" href="http://rmms.lbi.ro/rmm2018/index.php?id=problems_math">Submitted Problem</a>
                                        </li>
                                        {/* Try to find the certificate and put it here */}
                                        <li> 
                                            I am part of the Peruvian Committee of Mathematical Olympiads.
                                        </li>
                                    </ol>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><strong>Awards:</strong></h3>
                                <Row>    
                                    <ol>
                                        <li>
                                            <div>
                                                <strong>International Math Olympiad (IMO)</strong>
                                                <ul>
                                                    <li>Gold medal 2015 - Thailand</li>
                                                    <li>Silver medal 2016 - Hong Kong</li>
                                                    <li>Silver medal 2017 - Brazil</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <strong>Putnam Competition</strong>
                                                <ul>
                                                    <li>Honorable Mention 2019</li>
                                                    <li>Honorable Mention 2018</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <strong>Asian Pacific Mathematic Olympiad (APMO)</strong>
                                                <ul>
                                                    <li>Gold Medal 2017</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <strong>Iberoamerican Mathematical Olympiad</strong>
                                                <ul>
                                                    <li>Gold medal 2016 - Chile</li>

                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <strong>Romanian Master of Mathematic</strong>
                                                <ul>
                                                    <li>Bronze medal 2017 - Romania</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <strong>Cono Sur Mathematical Olympiad</strong>
                                                <ul>
                                                    <li>Silver medal 2015 - Chile </li>
                                                    <li>Silver medal 2015 - Argentina </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <strong>Rioplatense Mathematical Olympiad</strong>
                                                <ul>
                                                    <li>Bronze medal 2012 - Argentina</li>
                                                    <li>Silver medal 2013 - Argentina</li>
                                                </ul>
                                            </div>
                                        </li>                                           
                                    </ol>                                    
                                </Row>
                            </Col>
                            <Col xs={6} md={4}>
                                <Row>
                                    <Image
                                    src= "../static/imo_pic.jpg"
                                    rounded ={true}
                                    // roundedCircle = {true}
                                    fluid = {true}
                                    // width={"100%"}
                                    thumbnail	

                                    // height={"10% "}
                                    />
                                </Row>
                                <Row>
                                    <Col className= "text-center" >
                                        <i>Not surprisingly, I am the one holding the peruvian flag.</i>
                                    </Col>
                                </Row>
                                <Row>
                                    <Image
                                    src= "../static/romanian_pic.jpg"
                                    rounded ={true}
                                    // roundedCircle = {true}
                                    fluid = {true}
                                    // width={"100%"}
                                    thumbnail	
                                    // resize = {0.5}
                                    // width={"500"}
                                    // height={"1% "}
                                    />
                                </Row>
                                <Row>
                                    <Col className= "text-center" >
                                        <i>The peruvian team in the Romanian Master. <br></br> If you couldn't tell by now, I'm the one standing on the far right.</i>
                                    </Col>
                                </Row>
                                
                            </Col>
                        </Row>

                    </Col>
                </Row>

        </Container>

        );
    }
    render(){   
        return(
            <Layout
            content = {this.getContent()}
            />
        );
    }
}