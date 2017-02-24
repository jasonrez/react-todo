let moment = require('moment')

let time = moment()
console.log('moment().format() ', moment().format())
//console.log('moment.unix() ', moment.unix(time.unix()))
console.log('time ',time.format('MMMM Do, YYYY @ HH:MM : A'))
//console.log('time.unix() ',time.unix())
