import GeneralFooter from '../components/GeneralFooter'
import GeneralNav from '../components/GeneralNav'
import Container from 'react-bootstrap/Container';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <GeneralNav/>
                {this.props.content}
                <GeneralFooter/>

            </div>
        );
    }
}