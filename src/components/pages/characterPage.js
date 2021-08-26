import React from 'react';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';
import { Field } from '../charDetails';


export default class CharacterPage extends React.Component {
    gotService = new gotService();
    
    state = {
        selectedChar: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render () {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        
        const itemList = (
            <ItemList 
            onItemSelected={this.onItemSelected}
            getData ={this.gotService.getAllCharacters}
            renderItem={(item) => `${item.name} (${item.gender})`}/>
        );

        const charDetails = (
            <CharDetails 
            charId={this.state.selectedChar}
            getData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>

            </CharDetails>
        );

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}