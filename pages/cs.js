import GeneralFooter from '../components/GeneralFooter'
import GeneralNav from '../components/GeneralNav'
import Container from 'react-bootstrap/Container';

export default class Cs extends React.Component{
    render(){
        return(
            <div>
                <GeneralNav/>
                <Container>
                    
                </Container>
                <GeneralFooter/>

            </div>
        );
    }
}