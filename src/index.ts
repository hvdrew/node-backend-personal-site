import * as express from 'express'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'
import { env } from './config'
// import * as mongoose from 'mongoose'

const PORT = env.port
const app = express()

app.use(morgan('dev'))
app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: 'Home | Merison.io' })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT} in ${env.name} mode.`))
