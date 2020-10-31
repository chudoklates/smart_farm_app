import Agenda from 'agenda'
import db from './_db'

const agenda = new Agenda({ mongo: db })

export default agenda