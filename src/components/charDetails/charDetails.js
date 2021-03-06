import React, {Component} from 'react';
import './charDetails.css';
import react from 'react';


const Field = ({char, field, label}) => {
    return (
    <li className="list-group-item d-flex justify-content-between">
        <span className="term">{label}</span>
        <span>{char[field]}</span>
    </li>
    )
}

export {Field};
export default class CharDetails extends Component {
    state = {
        char: null
    }

    conmponentDidMount() {
        this.updateChar();
    }
    componentDidUpdate(prevProps) {
        if(this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId, getData} = this.props;
        if(!charId) {
            return;
        }

        getData(charId)
        .then((char) => {
            this.setState({char});
        })
    }



    render() {
        if(!this.state.char) {
            return <span className='select-error'>Пожалуйста, выберите персонажа</span>
        }
        
        const {char} = this.state;
        const {name} = char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        react.Children.map(this.props.children, (child) => {
                            return react.cloneElement(child, {char})
                        })
                    }
                </ul>
            </div>
        );
    }
}