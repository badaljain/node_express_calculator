import express from 'express';
import * as Operations from './src/ServerComponents/Operations'
import bodyParser from 'body-parser'

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use('/', express.static('public'));

app.post('/add', Operations.add)
app.post('/sub', Operations.sub)
app.post('/div', Operations.div)
app.post('/mul', Operations.mul)

app.listen(process.env.PORT || 3000);