import React, { Component } from 'react';

class Search extends Component {
    constructor(){
        super()
        this.state={
            inputValue: ""
        }
    }
    handleInputChange(event){
        // const value = event.target.value
        const {value} = event.target
        this.setState({
            inputValue: value
        })
    }
    handleKeyPress(e){
        if(e.which === 13) {
            const {inputValue} = this.state
            this.props.buscarProducto(inputValue)
        }
    }
   
    render() {
        const {inputValue} = this.state
        return (
            <div>
                <input onKeyPress={e => this.handleKeyPress(e)} onChange={e => this.handleInputChange(e)} value={this.state.inputValue} type="text"/>
                <button onClick={() => this.props.buscarProducto(inputValue)}>lupita</button>
            </div>
        );
    }
}

export default Search