import GeneralFooter from '../components/GeneralFooter'
import GeneralNav from '../components/GeneralNav'
import Container from 'react-bootstrap/Container';
import Layout from '../components/Layout'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
export default class Cs extends React.Component{
    getContent = () => {
        return(
            <Container>
                <h1 className = "text-center title">Computer Science</h1>
                <h3><strong>The subject I wish I had found sooner</strong></h3>
                <Row>
                    <Col xs={12} md={8}>
                        <p className="intro">
                            Even though I love Peru, I believe that we have a lot to improve when it comes to education. <br></br>
                            For example, <i>Computer Science</i> is not a subject that is usually taught in high school or even in college. It just <strong>doesn't exist</strong> there.
                            I am trying my best to change this situation, and I have the vision that one day we will give CS the importance it deserves.<br></br>
                            The first time I heard about CS was when I attended a <a target="_blank" href = "https://espr-camp.org/">summer camp</a> in the UK after I finished high school. 
                            This was a life-changing experience, because I felt like I had finally found the subject that would give me the necessary tools to help my community. <br></br>
                        </p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Row>
                            <Image 
                                src= "../static/computer_science.jpg"
                                alt = "This is me!"
                                className = "pic"
                                rounded ={true}
                                //roundedCircle = {true}
                                fluid = {true}
                            />
                        </Row>
                        <Row>
                            <Col className= "text-center" >
                                <i>Pic taken from <a target="_blank" href="https://www.petersons.com/blog/majoring-in-computer-science-is-it-for-me/">here</a></i>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <br></br>

                <Row>
                    <Col>
                        {/* Each row is a bullet point */}
                        <Row>
                            <Col>
                                <h3><strong>Relevant Coursework: </strong></h3>
                                <Row>
                                    <ul>
                                        <li> MIT' <a target="_blank" href="http://student.mit.edu/catalog/search.cgi?search=6.009">6.009</a>: Fundamentals of Programming </li>
                                        <li> MIT' <a target="_blank" href="http://student.mit.edu/catalog/search.cgi?search=6.006">6.006</a>: Introduction to Algorithms</li>
                                        <li> MIT' <a target="_blank" href="http://student.mit.edu/catalog/search.cgi?search=6.034">6.034</a>: Artificial Intelligence </li>
                                        <li> MIT' <a target="_blank" href="http://student.mit.edu/catalog/search.cgi?search=6.036">6.036</a>: Intro to Machine Learning </li>
                                        <li> MIT' <a target="_blank" href="http://student.mit.edu/catalog/search.cgi?search=6.046">6.046</a>: Design and Analysis of Algorithms</li>
                                        <li> MIT' <a target="_blank" href="http://student.mit.edu/catalog/search.cgi?search=6.031">6.031</a>: Software Construction</li>
                                        <li> MIT' <a target="_blank" href="http://student.mit.edu/catalog/search.cgi?search=6.148">6.148</a>: Web Lab: A Web Programming class and competition</li>
                                        <li> Coursera' <a target="_blank" href="https://www.coursera.org/learn/machine-learning/home/welcome">Machine Learning</a></li>
                                        <li> Edx' <a target="_blank" href="https://courses.edx.org/courses/course-v1:HarvardX+CS50W+Web/course/">CS50's Web Programming with Python and JavaScript</a></li>
                                        {/* < */}
                                    </ul>
                                </Row>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <h3><strong>List of projects:</strong></h3>
                                <Row>
                                    <ul>
                                        <li>You can see the projects <a target ="_blank" href="/projects">here</a></li>
                                    </ul>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} md={4}>
                        {/*Here for the pics */}
                        <Row>
                            <Image 
                                src= "../static/ai_doggo_robot.jpg"
                                alt = "This is me!"
                                className = "pic"
                                rounded ={true}
                                //roundedCircle = {true}
                                fluid = {true}
                            />
                        </Row>
                        <Row>
                            <Col className= "text-center" >
                                <i>Pic of me with a doggo, and a robot. Part of my A.I. class in Fall 2019.</i>
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