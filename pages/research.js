import GeneralFooter from '../components/GeneralFooter'
import GeneralNav from '../components/GeneralNav'
import Container from 'react-bootstrap/Container';
import DefaultPage from '../components/DefaultPage'
import Layout from '../components/Layout'

export default class Research extends React.Component{
    getContent = () => {
        return <DefaultPage/>
    }
    render(){
        return(
            <Layout
            content = {this.getContent()}
            />
        );
    }
}