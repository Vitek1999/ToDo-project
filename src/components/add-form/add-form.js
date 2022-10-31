import { Component } from 'react';
import Arrow from './arrow.svg';

class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.text === ''){
            alert('Введите задачу')
        } else {
            this.props.onAdd(this.state.text);
            this.setState({
                text: '',
            })
        }
    }

    render() {
        const {text} = this.state;

        return (
            <form
                className="add-form"
                onSubmit = {this.onSubmit}>
                <button type="submit"><img className='arrow' src={Arrow} alt='arrow'/></button>
                <input
                    className="input-form"
                    type="text"
                    placeholder="What needs to be done?"
                    name="text"
                    value={text}
                    onChange={this.onValueChange}/>
            </form>
        )
    }
}

export default AddForm;