import GeneralFooter from '../components/GeneralFooter'
import GeneralNav from '../components/GeneralNav'
import Container from 'react-bootstrap/Container';
import Layout from '../components/Layout'
import Image from 'react-bootstrap/Image'
export default class Math extends React.Component{
    getContent = () => {
        return(
            <Container >
                <h1 className = "text-center title">Math</h1>

                <h3><strong>I've lived in math most of my life</strong></h3>
                <div>
                    <div>
                        <p>
                            When I was in elementary school, my mom introduced to this concept called <i>competitive math</i>. <br></br>
                            Since then, I participated in several competitions all over the country and I found out how passionate I was about it. <br></br>
                            Later at the age of twelve, the Saco Oliveros academy offered me an scholarship to study on the capital, and this was the decision that allowed me 
                            to expand my horizons and show the world that I was ready to compete internationally.
                        </p>
                        <h3><strong>Contributions: </strong></h3>
                        <ol>
                            <li>I created a problem in Number Theory for the Romanian Master Olympiad
                                 <ul><li>You can find the problem (#4) here: <a target="_blank" href="http://rmms.lbi.ro/rmm2018/index.php?id=problems_math">Submitted Problem</a></li></ul>
                            </li>
                            {/* Try to find the certificate and put it here */}
                            <li> 
                                I am part of the Peruvian Committee of Mathematical Olympiads.
                            </li>
                        </ol>
                        <h3><strong>Awards:</strong></h3>
                        <div className ="cont">
                            <div className = "info_text">
                                <ol>
                                    <li>
                                        <div>
                                            <div >
                                                <strong>International Math Olympiad (IMO)</strong>
                                                <ul>
                                                    <li>Gold medal 2015 - Thailand</li>
                                                    <li>Silver medal 2016 - Hong Kong</li>
                                                    <li>Silver medal 2017 - Brazil</li>
                                                </ul>
                                            </div>
                                            {/* <div className = "info_pic">
                                                <Image
                                                src= "../static/imo_pic.jpg"
                                                // rounded ={true}
                                                roundedCircle = {true}
                                                fluid = {true}
                                                // width={"80%"}
                                                // height={"100%"}
                                                />
                                            </div> */}
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div>
                                                <strong>Asian Pacific Mathematic Olympiad (APMO)</strong>
                                                <ul>
                                                    <li>Gold Medal 2017</li>
                                                </ul>
                                            </div>
                                            {/* <div className = "info_pic">
                                                <Image
                                                src= "../static/imo_pic.jpg"
                                                rounded ={true}
                                                roundedCircle = {true}
                                                fluid = {true}
                                                />
                                            </div> */}
                                        </div>
                                    </li>
                                    <li>
                                        <div >
                                            <div>
                                                <strong>Iberoamerican Mathematical Olympiad</strong>
                                                <ul>
                                                    <li>Gold medal 2016 - Chile</li>

                                                </ul>
                                            </div>
                                            {/* <div className = "info_pic">
                                                <Image
                                                src= "../static/raul_alcantara_2.PNG"
                                                rounded ={true}
                                                roundedCircle = {true}
                                                fluid = {true}
                                                />
                                            </div> */}
                                        </div>
                                    </li>
                                    <li>
                                        <div className ="cont">
                                            <div>
                                                <strong>Romanian Master of Mathematic</strong>
                                                <ul>
                                                    <li>Bronze medal 2017 - Romania</li>
                                                </ul>
                                            </div>
                                            {/* <div className = "info_pic">
                                                <Image
                                                src= "../static/imo_pic.jpg"
                                                rounded ={true}
                                                roundedCircle = {true}
                                                fluid = {true}
                                                />
                                            </div> */}
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div>
                                                <strong>Cono Sur Mathematical Olympiad</strong>
                                                <ul>
                                                    <li>Silver medal 2015 - Chile </li>
                                                    <li>Silver medal 2015 - Argentina </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div>
                                                <strong>Rioplatense Mathematical Olympiad</strong>
                                                <ul>
                                                    <li>Bronze medal 2012 - Argentina</li>
                                                    <li>Silver medal 2013 - Argentina</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                                            
                                </ol>
                            </div>

                            <div className = "info_pic">
                                <Image
                                src= "../static/imo_pic.jpg"
                                rounded ={true}
                                // roundedCircle = {true}
                                fluid = {true}
                                // width={"100%"}
                                thumbnail	

                                height={"1% "}
                                />
                                <Image
                                src= "../static/romanian_pic.jpg"
                                rounded ={true}
                                // roundedCircle = {true}
                                fluid = {true}
                                // width={"100%"}
                                thumbnail	

                                height={"1% "}
                                />
                            </div>
                        </div>

                    </div>

                </div>


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