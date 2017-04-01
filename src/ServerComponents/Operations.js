import { get } from 'lodash/object'
import * as validations from './Validations'

const INVALID_INPUT_MSG = 'Invalid input'
const DIVIDE_BY_ZERO = 'Cannot Divide by Zero'

exports.add = function(req, res) {
	let num1 = get(req, 'body.num1', null)
	let num2 = get(req, 'body.num2', null)

	if (validations.isValidNumber(num1) && validations.isValidNumber(num2)) {
		
		const sum = Number(num1) + Number(num2)

		res.setHeader('Content-Type', 'application/json')
    	res.send(JSON.stringify({ 'sum': sum }, null, 3))
	} else {
		res.status(400)
		res.send(JSON.stringify({ 'error': INVALID_INPUT_MSG }, null, 3))
	}
}

exports.sub = function(req, res) {
	let num1 = get(req, 'body.num1', null)
	let num2 = get(req, 'body.num2', null)

	if (validations.isValidNumber(num1) && validations.isValidNumber(num2)) {
		
		const sub = Number(num1) - Number(num2)

		res.setHeader('Content-Type', 'application/json')
    	res.send(JSON.stringify({ 'sub': sub }, null, 3))
	} else {
		res.status(400)
		res.send(JSON.stringify({ 'error': INVALID_INPUT_MSG }, null, 3))
	}
}

exports.div = function(req, res) {
	let num1 = get(req, 'body.num1', null)
	let num2 = get(req, 'body.num2', null)
	res.setHeader('Content-Type', 'application/json')

	if (validations.isValidNumber(num1) && validations.isValidNumber(num2)) {
		
		if(Number(num2) == 0) {
			res.status(400)
			res.send(JSON.stringify({ 'error': DIVIDE_BY_ZERO }, null, 3))
		}

		const div = Number(num1) / Number(num2)
    	res.send(JSON.stringify({ 'div': div }, null, 3))
	} else {
		res.status(400)
		res.send(JSON.stringify({ 'error': INVALID_INPUT_MSG }, null, 3))
	}
}

exports.mul = function(req, res) {
	let num1 = get(req, 'body.num1', null)
	let num2 = get(req, 'body.num2', null)

	if (validations.isValidNumber(num1) && validations.isValidNumber(num2)) {
		
		const mul = Number(num1) * Number(num2)

		res.setHeader('Content-Type', 'application/json')
    	res.send(JSON.stringify({ 'mul': mul }, null, 3))
	} else {
		res.status(400)
		res.send(JSON.stringify({ 'error': INVALID_INPUT_MSG }, null, 3))
	}
}