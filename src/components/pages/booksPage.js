import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import { withRouter } from 'react-router-dom';

class BooksPage extends Component {
    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList 
            onItemSelected={(charId) => {
                this.props.history.push(charId) //получаем хистори в пропах с помощью визроутера
            }}
            getData={this.gotService.getAllBooks}
            renderItem={({name}) => name}/>
        )
    }
}

export default withRouter(BooksPage);