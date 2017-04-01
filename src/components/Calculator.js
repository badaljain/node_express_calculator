import React, { Component } from 'react'
import styles from './style.css'
import * as operations from '../api/RestClient'

const ADD_OPERATOR = 'plus'
const SUB_OPERATOR = 'minus'
const DIV_OPERATOR = 'divide'
const MUL_OPERATOR = 'multiply'
const TEST_EXPR = 'test'

class Calculator extends Component {
	constructor(props) {
		super(props)
		this.state = {
			operator: '?',
			test: '',
			error: ''
		}

		this.inputHandler = this.inputHandler.bind(this)
		this.operationHandler = this.operationHandler.bind(this)
	}

	inputHandler (event) {
		this.setState ({
			[event.target.id]: event.target.value
		})
	} 

	operationHandler (event) {
		this.setState({
			operator: event.target.id,
			error: '',
			test: ''
		})

		switch(event.target.id) {
			case ADD_OPERATOR:
				operations.add(this.state.input1, this.state.input2)
				.then( response => {this.setState({ result: response.json.sum, error: response.json.error})})
				break;
			case SUB_OPERATOR:
				operations.sub(this.state.input1, this.state.input2)
				.then( response => this.setState({ result: response.json.sub, error: response.json.error }))
				break;
			case DIV_OPERATOR:
				operations.divide(this.state.input1, this.state.input2)
				.then( response => this.setState({ result: response.json.div, error: response.json.error }))
				break;
			case MUL_OPERATOR:
				operations.mul(this.state.input1, this.state.input2)
				.then( response => this.setState({ result: response.json.mul, error: response.json.error }))
				break
			case TEST_EXPR:
				operations.testExpr().then(response => this.setState({ test:  response.json.mul }))
				break
			default:
				this.setState({ result: 'Invalid Operation' })
		}
	}

	render () {
		const result = (
			this.state.result !== null
			&& this.state.result !== undefined
			&& <label className={styles.spacer}> = <span>{ this.state.result }</span> </label>
		)

		const testExpr = (
			this.state.test
			&& 	<span> 
					<span className={styles.success}> Test result for expression - ((5+3)/2-1)*7) = {this.state.test} 
					</span> 
					*Time logged in console
				</span>
		)	

		const error = (
			this.state.error
			&& <label className={styles.error}> { this.state.error } </label>
		)
		
		return  (
			<div className={styles.spacer}>
				<label> Number 1 </label>
				<input 
					id='input1'
					type='number'
					onChange={this.inputHandler} />
				<label> { this.state.operator } </label>
				<label> Number 2 </label>
				<input 
					id='input2'
					type='number'
					onChange={this.inputHandler} />
				{ result }
				<br />
				<div className={styles.spacer}>
					<button id={ADD_OPERATOR} onClick={this.operationHandler}> Add </button>
					<button id={SUB_OPERATOR} onClick={this.operationHandler}> Substract </button>
					<button id={DIV_OPERATOR} onClick={this.operationHandler}> Divide </button>
					<button id={MUL_OPERATOR} onClick={this.operationHandler}> Multiply </button>
					<button id={TEST_EXPR} onClick={this.operationHandler}> Test </button>
				</div>
				{ error }
				{ testExpr }
			</div>
		)
	}
}

export default Calculator