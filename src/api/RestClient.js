const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' }
const postOptions = { method: 'POST', headers }
const getOptions = { method: 'GET', headers }
const MaybeJSON = (x) => x.json().catch(e => Promise.resolve(JSON.stringify({})))
const parseResponse = (response) => MaybeJSON(response).then(json => ({ rawResponse: response, json }))
const identity = (x) => x

export async function add (num1, num2) {
	const postBody = { 'num1': num1, 'num2': num2 }
	let requestParams = { ...postOptions, body: JSON.stringify(postBody) }
	return await fetch('/add', requestParams).then(parseResponse).then(identity)
}

export async function sub (num1, num2) {
	const postBody = { 'num1': num1, 'num2': num2 }
	let requestParams = { ...postOptions, body: JSON.stringify(postBody) }
	return await fetch('/sub', requestParams).then(parseResponse).then(identity)
}

export async function divide (num1, num2) {
	const postBody = { 'num1': num1, 'num2': num2 }
	let requestParams = { ...postOptions, body: JSON.stringify(postBody) }
	return await fetch('/div', requestParams).then(parseResponse).then(identity)
}

export async function mul (num1, num2) {
	const postBody = { 'num1': num1, 'num2': num2 }
	let requestParams = { ...postOptions, body: JSON.stringify(postBody) }
	return await fetch('/mul', requestParams).then(parseResponse).then(identity)
}

export async function testExpr() {
	// ((5+3)/2-1)*7) 
	console.time('Total Execution Time')
	return await add(5,3).then(result => {
			return divide(result.json.sum, 2).then(result => {
				return sub(result.json.div,1).then(result => {
					return mul(result.json.sub, 7).then(console.timeEnd('Total Execution Time'))
				})
			})
	    })
}