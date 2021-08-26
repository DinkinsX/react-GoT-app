import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false,
        selectedHouse: 20
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {showRandomChar: !state.showRandomChar}
        });
    }

    componentDidCatch() {
        console.log('error')
        this.setState({
            error:true
        })
    }



    render() {

        const char = this.state.showRandomChar ? <RandomChar interval = {3000}/> : null;
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button 
                                className="toggle-btn"
                                onClick={this.toggleRandomChar}>Toggle random character</button>
                            </Col>
                            
                        </Row>
                        <Route path="/" exact component={() => <h1>Добро пожаловать в базу данных Игры Престолов</h1>}/>
                        <Route path="/characters" component={CharacterPage}/>
                        
                        <Route path="/houses" component={HousesPage}/>
                        <Route path="/books" exact component={BooksPage}/>
                        <Route path="/books/:id" render={
                            ({match}) => {
                                const {id} = match.params;
                               return <BooksItem bookId={id}/>
                                }
                            }/>
                    </Container>
                </div>

            </Router>
        );
    }
}