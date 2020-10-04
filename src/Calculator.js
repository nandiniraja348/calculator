import React, {Component} from "react";
import styles from '/Users/nandiniraja/Desktop/TW learning Stuff/ELP_Neev/React/calculator/src/index.module.css'

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            inputOne: 'Input One',
            inputTwo: 'Input Two',
            output: ''
        }
    }

    setInputOne = (event) => {
        this.setState({
            inputOne: event.target.value
        });
    }

    setInputTwo = (event) => {
        this.setState({
            inputTwo: event.target.value
        });
    }

    addValues = (event) => {
        const add = (valueOne, ValueTwo) => {
            return parseInt(valueOne) + parseInt(ValueTwo);
        }
        this.setState({
            output: add(this.state.inputOne, this.state.inputTwo)
        })
        event.preventDefault()
    }

    subtractValues = (event) => {
        const subtract = (valueOne, ValueTwo) => {
            return parseInt(valueOne) - parseInt(ValueTwo);
        }
        this.setState({
            output: subtract(this.state.inputOne, this.state.inputTwo)
        })
        event.preventDefault()
    }

    divideValues = (event) => {
        const divide = (valueOne, ValueTwo) => {
            return parseInt(valueOne) / parseInt(ValueTwo);
        }
        this.setState({
            output: divide(this.state.inputOne, this.state.inputTwo)
        })
        event.preventDefault()
    }

    multiplyValues = (event) => {
        const multiply = (valueOne, ValueTwo) => {
            return parseInt(valueOne) * parseInt(ValueTwo);
        }
        this.setState({
            output: multiply(this.state.inputOne, this.state.inputTwo)
        })
        event.preventDefault()
    }

    render() {
        const {inputOne, inputTwo} = this.state
        return (<div className={styles.form}>
            <form>
                <div>
                    <h1>Calculator</h1>
                </div>
                <div>
                    <label>Input One</label>
                    <input type='number' id='input_one' value={inputOne} onChange={this.setInputOne}/>
                </div>
                <div>
                    <label>Input Two</label>
                    <input type='number' id='input_two' value={inputTwo} onChange={this.setInputTwo}/>
                </div>
                <div>
                    <button id='plus' className={styles.button} value='+' onClick={this.addValues}> +</button>
                    <button id='minus' className={styles.button} value="-" onClick={this.subtractValues}> -</button>
                    <button id='multiply' className={styles.button} value='/' onClick={this.divideValues}> /</button>
                    <button id='divide' className={styles.button} value='*' onClick={this.multiplyValues}> *</button>
                </div>
                <div>
                    <button id='clear' className={styles.button} value='reset'>Clear</button>
                </div>
                <div>
                    <label>Output : </label>
                    <output id='output'>
                        {this.state.output}
                    </output>
                </div>
            </form>
        </div>)
    }


}

export default Calculator